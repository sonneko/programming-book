const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// ==========================================
// 設定項目
// ==========================================
const BOOK_DIR = path.join(__dirname, 'book');
const SITE_URL = 'https://programming-book-sonneko.aoristos.net';
const OUTPUT_SITEMAP = path.join(BOOK_DIR, 'sitemap.xml');

// サイトマップから除外するファイル名
const EXCLUDE_FILES = ['404.html', 'print.html'];

// ==========================================
// メイン処理
// ==========================================

// 再帰的にディレクトリ内のHTMLファイルを収集する関数
function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// 外部リンクかどうかを判定する関数
function isExternalLink(url) {
    if (!url) return false;
    // http:// または https:// から始まるものを外部リンクとする（自ドメインから始まるものは除く）
    return /^https?:\/\//i.test(url) && !url.startsWith(SITE_URL);
}

// リンクのステータス（404等）をチェックする関数
async function checkLink(url, sourceFile) {
    try {
        // HEADリクエストで軽量にチェック（失敗したらGETで再試行）
        let response = await fetch(url, { method: 'HEAD', timeout: 5000 }).catch(() => null);
        if (!response || response.status === 405) {
            response = await fetch(url, { method: 'GET', timeout: 5000 });
        }

        if (response.status >= 400) {
            console.error(`❌ リンク切れの可能性 (${response.status}): ${url} (場所: ${path.relative(__dirname, sourceFile)})`);
        } else {
            console.log(`✅ リンク生存確認 (${response.status}): ${url}`);
        }
    } catch (error) {
        console.error(`⚠️ 接続エラー (タイムアウト等): ${url} (場所: ${path.relative(__dirname, sourceFile)}) - ${error.message}`);
    }
}

async function main() {
    if (!fs.existsSync(BOOK_DIR)) {
        console.error(`エラー: ${BOOK_DIR} ディレクトリが見つかりません。先に mdbook build を実行してください。`);
        process.exit(1);
    }

    console.log('HTMLファイルの探索を開始します...');
    const htmlFiles = getAllHtmlFiles(BOOK_DIR);
    const externalLinksToCheck = new Set();
    const sitemapUrls = [];

    for (const filePath of htmlFiles) {
        const fileName = path.basename(filePath);
        const relativePath = path.relative(BOOK_DIR, filePath).replace(/\\/g, '/');

        // 1. HTMLの読み込みとCheerioによるパース
        const htmlContent = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(htmlContent);
        let isModified = false;

        // 2. aタグの抽出と属性追加
        $('a').each((_, element) => {
            const href = $(element).attr('href');
            
            if (isExternalLink(href)) {
                // 属性の追加/更新
                $(element).attr('target', '_blank');
                $(element).attr('rel', 'noopener noreferrer');
                isModified = true;
                
                // チェック対象のユニークなURLとして追加
                externalLinksToCheck.add(JSON.stringify({ url: href, file: filePath }));
            }
        });

        // 変更があった場合のみファイルを上書き保存
        if (isModified) {
            fs.writeFileSync(filePath, $.html(), 'utf-8');
            console.log(`📝 属性を追加しました: ${relativePath}`);
        }

        // 3. サイトマップ対象のURLを蓄積（除外リストにないもの）
        if (!EXCLUDE_FILES.includes(fileName)) {
            // index.html はディレクトリURLに正規化（例: chapter_1/index.html -> chapter_1/）
            let urlPath = relativePath;
            if (urlPath === 'index.html') {
                urlPath = '';
            } else if (urlPath.endsWith('/index.html')) {
                urlPath = urlPath.replace('index.html', '');
            }
            sitemapUrls.push(`${SITE_URL}/${urlPath}`);
        }
    }

    // 4. サイトマップ (sitemap.xml) の作成
    console.log('\nGoogle対応サイトマップを作成中...');
    const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    sitemapUrls.forEach(url => {
        sitemapXml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });
    sitemapXml += `</urlset>`;
    
    fs.writeFileSync(OUTPUT_SITEMAP, sitemapXml, 'utf-8');
    console.log(` Sitemaps.xml が生成されました: ${path.relative(__dirname, OUTPUT_SITEMAP)}`);

    // 5. 外部リンクの404チェック実行
    console.log('\n外部リンクのステータスチェックを開始します（非同期実行）...');
    const checkPromises = Array.from(externalLinksToCheck).map(item => {
        const { url, file } = JSON.parse(item);
        return checkLink(url, file);
    });

    await Promise.all(checkPromises);
    console.log('\nすべての処理が完了しました！');
}

main();