// type
// 型に名前を付けるための機能。
// オブジェクトにも使える。

type UserId = number;

type Status = "success" | "error";

// オブジェクト以外にも名前を付けられる。
// あらゆる型に名前を付けられる

// プリミティブ型 別名
// type のみ可能
type UserName = string;
const manName: UserName = "Taro";

console.log(manName);

// Union型の定義 typeのみ可能
let id: number | string;
id = 1;
id = "abc";
