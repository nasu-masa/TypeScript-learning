# TypeScript ベストプラクティスまとめ

## 1. `any` をなるべく使わない

`any` は型チェックを無効にするため、できるだけ避けます。

型が本当に分からない場合は、`unknown` を使う方が安全です。

```ts
function processData(data: unknown) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  }
}
```

---

## 2. `interface` と `type` を使い分ける

### `interface`

オブジェクトの形を定義するときに使います。

```ts
interface User {
  id: number;
  name: string;
}
```

### `type`

Union型、Intersection型、タプル型、Utility Typesなどに使います。

```ts
type Status = "success" | "error";

type UserPreview = Pick<User, "id" | "name">;
```

基本方針は次のとおりです。

* オブジェクトの形は `interface`
* Union型やUtility Typesは `type`

---

## 3. 型定義を重複させない

同じような型を何度も定義せず、元の型を再利用します。

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;

type UserPreview = Pick<User, "id" | "name">;
```

複数ファイルで使う型は、`types.ts` などにまとめて管理します。

---

## 4. `as` は慎重に使う

`as` は、TypeScriptの型判断を上書きする機能です。

```ts
const user = data as User;
```

間違った型でも強制できるため、乱用は避けます。

可能であれば、Type Guardで型を確認してから使います。

```ts
function isUser(data: unknown): data is User {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data
  );
}
```

---

## 5. `as const` を使う

変更させたくない設定値や固定値に使います。

```ts
const config = {
  env: "development",
  version: "1.0",
} as const;
```

`as const` を付けると、プロパティが読み取り専用になります。

```ts
// config.env = "production";
// エラー：変更できない
```

また、`env` は単なる `string` ではなく、`"development"` というリテラル型になります。

---

## まとめ

```ts
any        // なるべく避ける
unknown    // 型が不明な場合に使う
interface  // オブジェクトの形を定義する
type       // Union型やUtility Typesなどに使う
as         // 慎重に使う
as const   // 値を変更できないようにする
```

最も重要なのは、型チェックを無効にせず、同じ型定義を重複させないことです。
