# ESLint / Prettier

## 役割

### ESLint（リンター）

* コードの品質をチェックするツール
* 実行前にバグや問題のある書き方を検出する
* 設定ファイル：`.eslintrc.js`

例

* 未使用の変数を検出
* `var` の使用を警告・禁止
* 非推奨な書き方を検出

---

### Prettier（フォーマッター）

* コードの見た目を自動で整えるツール
* コードの書き方を統一する
* 設定ファイル：`.prettierrc`

例

* インデントを揃える
* セミコロンの有無を統一
* クォートを統一
* 長い行を自動改行

---

## ESLint と Prettier の違い

| ESLint            | Prettier    |
| ----------------- | ----------- |
| コード品質をチェック        | コードスタイルを整える |
| バグの原因になりそうなコードを検出 | 見た目を自動整形    |
| エラー・警告を表示         | コードを書き換える   |

---

## .eslintrc.js の主な設定

### extends

他のルールセットを継承する。

例

* `eslint:recommended`
* `plugin:@typescript-eslint/recommended`
* `plugin:react/recommended`
* `prettier`

---

### plugins

TypeScript や React などの追加ルールを利用する。

---

### rules

個別のルールを変更する。

設定値

* `off`
* `warn`
* `error`

---

### env

実行環境を指定する。

例

* browser
* node

---

## .prettierrc の主な設定

### semi

セミコロンを付けるか。

### singleQuote

シングルクォートを使用するか。

### tabWidth

インデント幅。

### trailingComma

末尾カンマの設定。

---

## ESLint と Prettier の連携

ESLint と Prettier はフォーマットに関するルールが競合する場合がある。

そのため、

```text
extends: [
  "...",
  "prettier"
]
```

のように **`prettier` を `extends` の最後に追加**し、フォーマットは Prettier に任せる。

役割分担

* ESLint → コード品質
* Prettier → コード整形

---

## 覚えておきたいこと

* `.eslintrc.js`：ESLint の設定ファイル
* `.prettierrc`：Prettier の設定ファイル
* ESLint はコード品質をチェックする
* Prettier はコードを自動整形する
* `extends` の最後に `prettier` を設定すると競合を防げる
* VS Code では保存時に Prettier を実行する設定をすると便利
