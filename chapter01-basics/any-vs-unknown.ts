// 6.any型とunknown型
// 型が不明な場合に使う型として、anyとunknownがあります。

// any型: 何でも代入でき、何にでも代入できる（型チェックを無効化）
let anyValue: any = "hello";
anyValue = 123; // OK
anyValue = true; // OK

// unknown型: 何でも代入できるが、使用時に型チェックが必要
let unknownValue: unknown = "hello";
// console.log(unknownValue.length); // エラー！型が不明
if (typeof unknownValue === "string") {
  console.log(unknownValue.length); // OK（型が絞り込まれた）
}

// anyは完全に型チェックを無効化してしまうため基本的に使わない。
// Json()などの戻り値など方が不明な場合、unknownを基本的に使う。
{
  {
    async function getUser() {
      const data = await fetch("/api/user");
    }
  }

  // この時点では

  // {
  // name: "Taro",
  // age: 20
  // }

  // が返ってくるのか

  // {
  // message: "error"
  // }

  // が返ってくるのか分からない。

  // だから

  {
    async function getUser() {
      const data: unknown = await fetch("/api/user");

      if (typeof data === "object") {
        console.log(data);
      }
    }
  }

  //みたいに確認してから使う。
}
