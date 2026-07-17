const fs = require('fs');
const path = require('path');

const replacementData = {
  
};

const srcDir = path.resolve(__dirname, '../src');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) {
    throw new Error(`ディレクトリ「${dir}」が存在しません。`);
  }

  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function main() {
  try {
    const mdFiles = [];
    
    walkDir(srcDir, (filePath) => {
      if (filePath.endsWith('.md')) {
        mdFiles.push(filePath);
      }
    });

    if (mdFiles.length === 0) {
      console.log('💡 src ディレクトリ内に Markdown ファイルが見つかりませんでした。');
      return;
    }

    mdFiles.forEach(filePath => {
      let content = fs.readFileSync(filePath, 'utf8');
      let isUpdated = false;

      const regex = /[¥]([a-zA-Z0-9_-]+)[¥]/g;

      const updatedContent = content.replace(regex, (match, key) => {
        if (key in replacementData) {
          isUpdated = true;
          return replacementData[key];
        } else {
          const relativePath = path.relative(process.cwd(), filePath);
          throw new Error(`ファイル「${relativePath}」内に、置換データに存在しないキー「${key}」が見つかりました。`);
        }
      });

      if (isUpdated) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ 置換完了: ${path.relative(process.cwd(), filePath)}`);
      }
    });

    console.log('\n🎉 すべてのMarkdownファイルの置換処理が正常に完了しました！');

  } catch (error) {
    console.error(`\n❌ エラーが発生したため処理を中断しました:`);
    console.error(error.message);
    process.exit(1);
  }
}

main();
