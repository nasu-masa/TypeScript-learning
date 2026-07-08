// interface
// オブジェクトの型に名前を付けるための機能。

interface User {
  name: string;
  age: number;
}

// {
//   name: string;
//   age: number;
// }
// というオブジェクトの型に User という名前を付けている。

// 同名の宣言は interfaceの場合のみ統合され typeはエラーになる
interface User {
  name: string;
}

interface User {
  age: number;
}
