# .envファイルと環境変数

## 環境変数とは

* アプリケーションの外側から渡す設定値
* 開発環境・本番環境など、環境ごとに異なる値を管理する
* APIキー、DB接続情報、APIのURLなどをコードから分離できる

---

## .envファイルの役割

`.env` は環境変数を管理するファイル。

例

```env
API_BASE_URL=http://localhost:8000/api
DB_HOST=localhost
DB_USER=root
DB_PASS=password
```

---

## .envを使う理由

* 機密情報をコードに直接書かないため
* 開発環境と本番環境で設定を切り替えるため
* 設定値を一箇所で管理するため

---

## 重要なルール

`.env` はGitで管理しない。

```gitignore
.env
```

理由：

* APIキーやパスワードが外部に漏れる危険がある
* GitHubに公開すると不正利用される可能性がある

---

## .env.example

`.env` の代わりに、サンプル用の `.env.example` をGit管理する。

例

```env
API_BASE_URL=http://localhost:8000/api
GOOGLE_MAPS_API_KEY=
```

`.env.example` には本物の秘密情報を書かない。

---

## フロントエンドでの環境変数

フロントエンドでは、すべての環境変数を使えるわけではない。

ブラウザに公開してよい変数だけ、決められたプレフィックスを付ける。

---

## Viteの場合

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

コードでは以下のように使う。

```ts
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## Next.jsの場合

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

コードでは以下のように使う。

```ts
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
```

---

## プレフィックスが必要な理由

* フロントエンドに公開してよい値かを明確にするため
* 秘密鍵やAPIキーを誤ってブラウザに公開しないため

注意：

```env
NEXT_PUBLIC_SECRET_KEY=secret
```

のようにすると、ブラウザから見える可能性があるため危険。

---

## 覚えておきたいこと

* `.env` は環境ごとの設定値を管理するファイル
* `.env` には機密情報を書くことがある
* `.env` は必ず `.gitignore` に追加する
* `.env.example` はGit管理してよい
* Next.jsでブラウザに公開する値は `NEXT_PUBLIC_` を付ける
* Viteでブラウザに公開する値は `VITE_` を付ける
* プレフィックス付きの値はクライアント側に公開されるため、秘密情報を書かない

