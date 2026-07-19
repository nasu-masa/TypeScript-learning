# Chapter 03 - Advanced

## 学習内容

- （後で自分が記入）

## 学習メモ

- TypeScriptが最初から用意してる型の他に、カスタムで型を作れる。
```ts
type Status = "loading" | "success" | "error";
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type Flag = true | false;
```
- 条件を書くとTypeScriptが型を絞り込んでくれる
- 関数をプロパティに持てる
```ts
interface Fish {
    swim: () => void;
}
```
- Type Guardsは、if文だけでなく、switch文や三項演算子、whileループなど、条件分岐を伴う多くの構文で機能する

- ジェネリック関数 = 呼び出し時に型が決まる仕組み
- ジェネリック制約 = その型に最低条件をつける仕組み

## ハマったポイント

- 0や""はfalsyな値であるが有効な値でありnullやundefinedにはならない
- T と type/interface の役割が混ざった
- T = data に入る型を一時的に受け取る箱


