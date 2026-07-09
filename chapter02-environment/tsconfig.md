# tsconfig.json

## 役割

* TypeScript コンパイラ（tsc）の設定ファイル
* TypeScript プロジェクトのルートを示す
* コンパイル方法や型チェックのルールを定義する

---

## 主な役割

* コンパイル対象のファイルを指定する
* JavaScriptへの変換ルールを設定する
* 型チェックの厳しさを設定する

---

## よく使う compilerOptions

### target

* 出力するJavaScriptのバージョン
* 例

  * ES2020
  * ESNext

---

### module

* モジュール形式(ファイル同士のやりとりルール)を指定する
* Node.js：CommonJS
* React / Next.js：ESNext が一般的

---

### strict

* 厳格な型チェックを有効にする
* 基本は `true` を推奨

---

### esModuleInterop　

* trueにするとES Modules と CommonJS がうまく一緒に使えるように変換してくれる
* CommonJSのモジュールをES Modulesの書き方で扱いやすくする
* Reactやライブラリ利用時によく使用

---

### jsx

* JSXをどのように変換するか
* React17以降は `react-jsx` が一般的

---

### rootDir

* TypeScriptソースコードのルートディレクトリ

例

```text
src/
```

---

### outDir

* コンパイル後のJavaScriptの出力先

例

```text
dist/
```

---

## include

コンパイル対象を指定する。

例

```json
"include": ["src"]
```

---

## exclude

コンパイル対象から除外する。

例

```json
"exclude": ["node_modules"]
```

---

## よく覚えておきたいこと

* `tsconfig.json` は TypeScript 全体の設定ファイル
* `compilerOptions` でコンパイル方法を設定する
* `strict: true` は基本的に有効にする
* Next.js や Vite では自動生成されることが多い
* 必要に応じて設定を変更して使用する
