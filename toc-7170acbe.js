// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="about.html"><strong aria-hidden="true">1.</strong> この本について</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="map.html"><strong aria-hidden="true">2.</strong> この本の地図</a></span></li><li class="chapter-item expanded "><li class="part-title">1章-Python初級編</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/001.html"><strong aria-hidden="true">3.</strong> Python実行環境</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/002.html"><strong aria-hidden="true">4.</strong> エラーが出た時は</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/003.html"><strong aria-hidden="true">5.</strong> 四則演算の実行</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/004.html"><strong aria-hidden="true">6.</strong> 変数定義と使用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/005.html"><strong aria-hidden="true">7.</strong> 関数の使用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/006.html"><strong aria-hidden="true">8.</strong> 型について</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/007.html"><strong aria-hidden="true">9.</strong> if文</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/008.html"><strong aria-hidden="true">10.</strong> 真偽値</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/009.html"><strong aria-hidden="true">11.</strong> while文</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/010.html"><strong aria-hidden="true">12.</strong> for文</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/011.html"><strong aria-hidden="true">13.</strong> リスト型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/014.html"><strong aria-hidden="true">14.</strong> 関数定義</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/015.html"><strong aria-hidden="true">15.</strong> 演習</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-easy-python/016.html"><strong aria-hidden="true">16.</strong> 展望</a></span></li><li class="chapter-item expanded "><li class="part-title">2章-Web制作基礎</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/001.html"><strong aria-hidden="true">17.</strong> Webサイトの仕組み</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/002.html"><strong aria-hidden="true">18.</strong> htmlの文法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/003.html"><strong aria-hidden="true">19.</strong> cssの文法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/004.html"><strong aria-hidden="true">20.</strong> よく使うhtmlタグ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/005.html"><strong aria-hidden="true">21.</strong> cssセレクター</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/006.html"><strong aria-hidden="true">22.</strong> よく使うcssプロパティ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/007.html"><strong aria-hidden="true">23.</strong> VisualStudioCodeの導入</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/008.html"><strong aria-hidden="true">24.</strong> アニメーション</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/009.html"><strong aria-hidden="true">25.</strong> ブロック要素とインライン要素</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/010.html"><strong aria-hidden="true">26.</strong> グリッドシステム</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-basic-web/011.html"><strong aria-hidden="true">27.</strong> 演習</a></span></li><li class="chapter-item expanded "><li class="part-title">3章-JavaScript入門</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/001.html"><strong aria-hidden="true">28.</strong> JavaScriptとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/002.html"><strong aria-hidden="true">29.</strong> 変数定義</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/003.html"><strong aria-hidden="true">30.</strong> プリミティブ型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/004.html"><strong aria-hidden="true">31.</strong> 基本の制御構造</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/005.html"><strong aria-hidden="true">32.</strong> switch文</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/006.html"><strong aria-hidden="true">33.</strong> コレクション型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/007.html"><strong aria-hidden="true">34.</strong> 型の明示について</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/008.html"><strong aria-hidden="true">35.</strong> 関数定義</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/009.html"><strong aria-hidden="true">36.</strong> オブジェクト型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/010.html"><strong aria-hidden="true">37.</strong> DOM操作</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/011.html"><strong aria-hidden="true">38.</strong> シンボルの記法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/012.html"><strong aria-hidden="true">39.</strong> 演習</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-basic-js/013.html"><strong aria-hidden="true">40.</strong> まとめ</a></span></li><li class="chapter-item expanded "><li class="part-title">4章-TypeScript入門</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/001.html"><strong aria-hidden="true">41.</strong> Node.js導入</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/002.html"><strong aria-hidden="true">42.</strong> npmの使い方</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/003.html"><strong aria-hidden="true">43.</strong> TypeScript導入</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/004.html"><strong aria-hidden="true">44.</strong> 型注釈</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/005.html"><strong aria-hidden="true">45.</strong> 使ってはいけない集</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/006.html"><strong aria-hidden="true">46.</strong> クラスの表記法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/007.html"><strong aria-hidden="true">47.</strong> 静的フィールド・メソッド</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/008.html"><strong aria-hidden="true">48.</strong> インターフェース</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/009.html"><strong aria-hidden="true">49.</strong> 抽象クラス・継承</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/010.html"><strong aria-hidden="true">50.</strong> オブジェクト指向のメリット</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/011.html"><strong aria-hidden="true">51.</strong> 他の言語のオブジェクト指向</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/012.html"><strong aria-hidden="true">52.</strong> オブジェクト指向の用語整理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/013.html"><strong aria-hidden="true">53.</strong> ESmoduleとcommonJS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/014.html"><strong aria-hidden="true">54.</strong> 非同期処理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/015.html"><strong aria-hidden="true">55.</strong> 非同期関数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/016.html"><strong aria-hidden="true">56.</strong> まとめ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-basic-ts/017.html"><strong aria-hidden="true">57.</strong> 演習</a></span></li><li class="chapter-item expanded "><li class="part-title">5章-JSのエコシステム</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5-js-ecosystem/001.html"><strong aria-hidden="true">58.</strong> エコシステムとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5-js-ecosystem/002.html"><strong aria-hidden="true">59.</strong> Three.js入門</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5-js-ecosystem/003.html"><strong aria-hidden="true">60.</strong> React概要</a></span></li><li class="chapter-item expanded "><li class="part-title">6章-Linuxターミナルの扱いとGit</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/001.html"><strong aria-hidden="true">61.</strong> 基本のファイル操作</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/002.html"><strong aria-hidden="true">62.</strong> Gitとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/003.html"><strong aria-hidden="true">63.</strong> GitHubへの登録とGitのインストール</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/004.html"><strong aria-hidden="true">64.</strong> Gitの基本の使い方</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/005.html"><strong aria-hidden="true">65.</strong> CLIツールのお作法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-how-to-terminal/006.html"><strong aria-hidden="true">66.</strong> 演習</a></span></li><li class="chapter-item expanded "><li class="part-title">7章-ReactとNext.js</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/001.html"><strong aria-hidden="true">67.</strong> JSXと関数コンポーネント</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/002.html"><strong aria-hidden="true">68.</strong> propsとchildrenの扱い</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/003.html"><strong aria-hidden="true">69.</strong> Reactの思想</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/004.html"><strong aria-hidden="true">70.</strong> DOM更新のステップ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/005.html"><strong aria-hidden="true">71.</strong> フック</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/006.html"><strong aria-hidden="true">72.</strong> カスタムフック</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/007.html"><strong aria-hidden="true">73.</strong> SPAとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/008.html"><strong aria-hidden="true">74.</strong> ReactRouterとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/009.html"><strong aria-hidden="true">75.</strong> Next.jsとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/010.html"><strong aria-hidden="true">76.</strong> AppRouterについて</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/011.html"><strong aria-hidden="true">77.</strong> 特別な関数たち</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/012.html"><strong aria-hidden="true">78.</strong> 動的ルーティング</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/013.html"><strong aria-hidden="true">79.</strong> 公式ドキュメントの読み方</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="7-react/014.html"><strong aria-hidden="true">80.</strong> 演習</a></span></li><li class="chapter-item expanded "><li class="part-title">8章-バックエンドとデータベース</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/001.html"><strong aria-hidden="true">81.</strong> バックエンドとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/002.html"><strong aria-hidden="true">82.</strong> express.jsを使ったバックエンド</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/003.html"><strong aria-hidden="true">83.</strong> ミドルウェア</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/004.html"><strong aria-hidden="true">84.</strong> JWTによる認証</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/005.html"><strong aria-hidden="true">85.</strong> CORSポリシー</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/006.html"><strong aria-hidden="true">86.</strong> Cookieによる認証</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/007.html"><strong aria-hidden="true">87.</strong> DBとは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/008.html"><strong aria-hidden="true">88.</strong> SQLiteのインストール</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/009.html"><strong aria-hidden="true">89.</strong> SQL文1</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/010.html"><strong aria-hidden="true">90.</strong> SQL文2</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/011.html"><strong aria-hidden="true">91.</strong> SQL文3</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/012.html"><strong aria-hidden="true">92.</strong> SQL文4</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/013.html"><strong aria-hidden="true">93.</strong> DB設計・最適化・バックアップ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/014.html"><strong aria-hidden="true">94.</strong> 実践</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="8-backend/015.html"><strong aria-hidden="true">95.</strong> サービスを実際に公開したい人へ</a></span></li><li class="chapter-item expanded "><li class="part-title">9.開発効率化</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/001.html"><strong aria-hidden="true">96.</strong> 開発効率化の重要性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/002.html"><strong aria-hidden="true">97.</strong> GitHubの機能branch</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/003.html"><strong aria-hidden="true">98.</strong> GitHubの機能PullRequest</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/004.html"><strong aria-hidden="true">99.</strong> GitHubの機能Issues</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/005.html"><strong aria-hidden="true">100.</strong> GitFlowとGitHubFlow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/006.html"><strong aria-hidden="true">101.</strong> Gitコマンドチートシート</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/007.html"><strong aria-hidden="true">102.</strong> Copilotの使い道</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="9-ci/008.html"><strong aria-hidden="true">103.</strong> GitHubActions</a></span></li><li class="chapter-item expanded "><li class="part-title">10.低レベルプログラミング</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/001.html"><strong aria-hidden="true">104.</strong> 言語の動作環境</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/002.html"><strong aria-hidden="true">105.</strong> コラム:PythonとC言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/003.html"><strong aria-hidden="true">106.</strong> レジスタとメモリとディスク</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/004.html"><strong aria-hidden="true">107.</strong> ポインタと参照</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/005.html"><strong aria-hidden="true">108.</strong> 計算量</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/006.html"><strong aria-hidden="true">109.</strong> コラム:アルゴリズムとP≠NP問題</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/007.html"><strong aria-hidden="true">110.</strong> 配列</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/008.html"><strong aria-hidden="true">111.</strong> ベクター</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/009.html"><strong aria-hidden="true">112.</strong> スタック</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/010.html"><strong aria-hidden="true">113.</strong> ハッシュマップ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/011.html"><strong aria-hidden="true">114.</strong> ヒープとスタック</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/012.html"><strong aria-hidden="true">115.</strong> 機械語とアセンブリ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/013.html"><strong aria-hidden="true">116.</strong> CPUとOSによる仮想化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/014.html"><strong aria-hidden="true">117.</strong> CPUとOSによるスケージューリング</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/015.html"><strong aria-hidden="true">118.</strong> CPUとOSによるエラーハンドリング・セキュリティ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/016.html"><strong aria-hidden="true">119.</strong> OSカーネルとシステムコール</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/017.html"><strong aria-hidden="true">120.</strong> コラム:2038年問題</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/018.html"><strong aria-hidden="true">121.</strong> GPUとGLSL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/019.html"><strong aria-hidden="true">122.</strong> プロトコル</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/020.html"><strong aria-hidden="true">123.</strong> C言語の基本</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/021.html"><strong aria-hidden="true">124.</strong> Cの配列</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/022.html"><strong aria-hidden="true">125.</strong> Cのコレクション</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/023.html"><strong aria-hidden="true">126.</strong> マクロ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/024.html"><strong aria-hidden="true">127.</strong> コンパイル・コンパイラ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/025.html"><strong aria-hidden="true">128.</strong> リンク・リンカ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/026.html"><strong aria-hidden="true">129.</strong> アロケート・デアロケート</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/027.html"><strong aria-hidden="true">130.</strong> コンパイラによる最適化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/028.html"><strong aria-hidden="true">131.</strong> LLVMについて</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/029.html"><strong aria-hidden="true">132.</strong> コラム:チューリング完全</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-low-level-programming/030.html"><strong aria-hidden="true">133.</strong> Rustによる開発</a></span></li><li class="chapter-item expanded "><li class="part-title">11.Rust</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-rust/001.html"><strong aria-hidden="true">134.</strong> Rustの思想</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-rust/002.html"><strong aria-hidden="true">135.</strong> The Bookの読み方</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-rust/003.html"><strong aria-hidden="true">136.</strong> The Bookに書いていないこと</a></span></li><li class="chapter-item expanded "><li class="part-title">12.関数型言語</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12-functional/001.html"><strong aria-hidden="true">137.</strong> 純粋とは</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12-functional/002.html"><strong aria-hidden="true">138.</strong> Haskell</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12-functional/003.html"><strong aria-hidden="true">139.</strong> カリー化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12-functional/004.html"><strong aria-hidden="true">140.</strong> データ志向</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="12-functional/005.html"><strong aria-hidden="true">141.</strong> OOPでも関数型！</a></span></li><li class="chapter-item expanded "><li class="part-title">付録1-各種APIの使い方</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-1-api/001.html"><strong aria-hidden="true">142.</strong> LINEMessagingAPI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-1-api/002.html"><strong aria-hidden="true">143.</strong> GoogleDriveAPI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-1-api/003.html"><strong aria-hidden="true">144.</strong> GmailAPI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-1-api/004.html"><strong aria-hidden="true">145.</strong> GitHubAPI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-1-api/005.html"><strong aria-hidden="true">146.</strong> GeminiAPI</a></span></li><li class="chapter-item expanded "><li class="part-title">付録2-各種レンタルサーバー・デプロイサービスのすすめ</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/001.html"><strong aria-hidden="true">147.</strong> XServer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/002.html"><strong aria-hidden="true">148.</strong> Kagoya</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/003.html"><strong aria-hidden="true">149.</strong> GoogleCloud</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/004.html"><strong aria-hidden="true">150.</strong> AmazonWebService</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/005.html"><strong aria-hidden="true">151.</strong> Vercel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/006.html"><strong aria-hidden="true">152.</strong> CloudFlare</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-2-hosting/007.html"><strong aria-hidden="true">153.</strong> Firebase</a></span></li><li class="chapter-item expanded "><li class="part-title">付録3-各種言語のすすめ</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/001.html"><strong aria-hidden="true">154.</strong> 各言語の共通点</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/002.html"><strong aria-hidden="true">155.</strong> HelloWorld・FizzBazz集</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/003.html"><strong aria-hidden="true">156.</strong> スクリプト系言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/004.html"><strong aria-hidden="true">157.</strong> Apple開発の言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/005.html"><strong aria-hidden="true">158.</strong> Android開発の言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/006.html"><strong aria-hidden="true">159.</strong> Java言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/007.html"><strong aria-hidden="true">160.</strong> Go言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/008.html"><strong aria-hidden="true">161.</strong> .NET系言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/009.html"><strong aria-hidden="true">162.</strong> システムプログラミング言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/010.html"><strong aria-hidden="true">163.</strong> 関数型言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/011.html"><strong aria-hidden="true">164.</strong> マークアップ言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-3-languages/012.html"><strong aria-hidden="true">165.</strong> マークダウン言語</a></span></li><li class="chapter-item expanded "><li class="part-title">付録4-法律関係</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-4-law/001.html"><strong aria-hidden="true">166.</strong> 著作権・ライセンスの扱い</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-4-law/002.html"><strong aria-hidden="true">167.</strong> 広告・収益化の扱い</a></span></li><li class="chapter-item expanded "><li class="part-title">付録5-蛇足</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-5-zatsusoku/001.html"><strong aria-hidden="true">168.</strong> 筆者の紹介</a></span></li><li class="chapter-item expanded "><li class="part-title">付録6-オレオレ開発のすすめ</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/001.html"><strong aria-hidden="true">169.</strong> オレオレ言語</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/002.html"><strong aria-hidden="true">170.</strong> オレオレCPU</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/003.html"><strong aria-hidden="true">171.</strong> オレオレデータベース</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/004.html"><strong aria-hidden="true">172.</strong> オレオレVM</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/005.html"><strong aria-hidden="true">173.</strong> オレオレブラウザ(chrominium使用)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="supple-6-your-own/006.html"><strong aria-hidden="true">174.</strong> オレオレブラウザ(chrominium不使用)</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

