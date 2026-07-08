{
  // プリミティブ型 別名
  // type のみ可能
  type UserName = string;
  const manName: UserName = "Taro";

  console.log(manName);

  // Union型の定義 typeのみ可能
  let id: number | string;
  id = 1;
  id = "abc";

  // 同名の宣言は interfaceの場合のみ統合され typeはエラーになる
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }
}
