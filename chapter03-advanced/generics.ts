// ======================================================
// 6-3-4: ジェネリクスの基本
// ======================================================

// ジェネリクスとは：
// 型を引数のように扱い、型安全を保ったまま
// いろいろな型に対応できる関数やクラスを作る仕組み。

// ------------------------------------------------------
// any を使った場合
// ------------------------------------------------------

// any を使えばどんな型でも受け取れるが、型安全性が失われる。
// 戻り値が string なのか number なのかを TypeScript が正確に把握できない。
function identityAny(arg: any): any {
  return arg;
}

const anyResult = identityAny("hello");
// anyResult は any 型なので、型補完や型チェックが弱くなる。

// ------------------------------------------------------
// ジェネリック関数
// ------------------------------------------------------

// <T> で型変数 T を宣言する。
// T は関数を呼び出したときに、具体的な型に置き換わる。
function identity<T>(arg: T): T {
  return arg;
}

// 型を明示的に指定する書き方
const output1 = identity<string>("myString");
// output1 は string 型

// 型推論に任せる書き方
// 通常はこちらの書き方でOK。
const output2 = identity("myString");
// output2 は string 型と推論される

const output3 = identity(123);
// output3 は number 型と推論される

// ジェネリクスを使うと、
// 「引数の型」と「戻り値の型」の関係を保てる。
output1.toUpperCase(); // OK

// ------------------------------------------------------
// 複数の型変数
// ------------------------------------------------------

// 型変数は T, U のように複数使える。
// first と second が別々の型でも扱える。
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair<string, number>("hello", 123);
// result は [string, number] 型

// 型推論に任せてもOK
const result2 = pair("hello", 123);
// result2 も [string, number] 型と推論される

// ------------------------------------------------------
// ジェネリック制約
// ------------------------------------------------------

// ジェネリクスの T は何の型にもなれる。
// そのため、何も制約がない状態では length プロパティを使えない。

// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);
//   // エラー:
//   // Property 'length' does not exist on type 'T'.
//   return arg;
// }

// length プロパティを持つ型を定義する。
interface Lengthwise {
  length: number;
}

// T extends Lengthwise によって、
// T は length プロパティを持つ型に限定される。
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // OK
  return arg;
}

loggingIdentity("hello"); // OK: string は length を持つ
loggingIdentity([1, 2, 3]); // OK: 配列は length を持つ

// loggingIdentity(123);
// エラー:
// number は length プロパティを持たないため渡せない。

// ------------------------------------------------------
// 型変数名の慣習
// ------------------------------------------------------

// よく使われる型変数名：
// T: Type
// U, V: 2つ目以降の型
// K: Key
// V: Value
// E: Element

function getValue<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const keyValue = getValue("id", 1);
// keyValue は [string, number] 型

// ======================================================
// まとめ
// ======================================================

// ジェネリクスは、型安全で再利用しやすいコードを書くための機能。
// <T> のように型変数を宣言して使う。
// 多くの場合、型は TypeScript が自動で推論してくれる。
// extends を使うと、型変数に制約を付けられる。
// 例: T extends Lengthwise
// → length を持つ型だけ受け取れる。
