{// ==========================================
// null / undefined
// ==========================================

// undefined: 値が未定義
// null: 意図的に空

let value1;
let value2 = null;

// strictNullChecks が有効なら、null / undefined は明示が必要
let userName: string | null = null;

// ? は省略可能
interface User {
  name: string;
  age?: number;
}

// ?. は途中が null / undefined なら undefined を返す
interface Company {
  address?: {
    city: string;
  };
}

const company: Company = {};
const city = company.address?.city;

// ?? は null / undefined のときだけ右側を使う

// const name = null ?? "Guest"; // Guest
// const count = 0 ?? 10; // 0

// ! は「nullではない」と断言する
// 実行時の安全は保証されないため、なるべく使わない
const element = document.getElementById("app")!;

/*
まとめ

undefined: 未定義
null: 意図的に空
?: 省略可能
?.: 安全にプロパティへアクセス
??: null / undefined のとき初期値を使う
!: nullではないと断言
*/
}