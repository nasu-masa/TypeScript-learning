module.exports = {
  // この設定ファイルをESLintのルート設定として扱う
  // 親ディレクトリのESLint設定を継承しない
  root: true,

  // =========================
  // TypeScriptの解析設定
  // =========================

  parser: '@typescript-eslint/parser',
  // TypeScriptの構文をESLintが解析できるようにする
  // interface や type などTypeScript特有の構文を理解できる

  parserOptions: {
    ecmaVersion: 2020,
    // JavaScriptをES2020として解析する

    sourceType: 'module',
    // import / export を使用するモジュールとして解析する

    project: './tsconfig.json',
    // tsconfig.jsonを利用して型情報も解析する
    // 型情報が必要なESLintルールで利用される
  },

  // =========================
  // プラグイン
  // =========================

  plugins: ['@typescript-eslint'],
  // TypeScript用の追加ルールを利用できるようにする
  // ESLint本体には無いTypeScript専用ルールを追加する

  // =========================
  // 推奨ルール
  // =========================

  extends: [
    'eslint:recommended',
    // ESLint標準の推奨ルール

    'plugin:@typescript-eslint/recommended',
    // TypeScript向けの推奨ルール

    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 型情報を利用した、より厳格な推奨ルール

    'prettier',
    // コードの整形をprettierにまかせコード品質チェックに専念する
  ],

  // =========================
  // 個別ルール
  // =========================

  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // 関数の戻り値の型を省略すると警告する
    // 戻り値の型を明示して可読性・保守性を向上させる

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    // 使用していない変数はエラーにする
    // ただし _ から始まる引数は意図的に未使用として許可する

    '@typescript-eslint/no-explicit-any': 'error',
    // any型の使用を禁止する
    // 型安全性を維持するため
  },

  // =========================
  // ESLint対象外
  // =========================

  ignorePatterns: ['dist/', 'node_modules/'],
  // distはコンパイル後の生成物
  // node_modulesは外部ライブラリ
  // どちらもESLintの解析対象から除外する
};
