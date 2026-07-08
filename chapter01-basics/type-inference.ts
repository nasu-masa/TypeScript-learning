{
  // =============================
  // 型推論 (Type Inference)
  // =============================

  // 初期値から型を推論
  let nameTaro = "Taro";
  let age = 30;
  let isAdult = true;

  // name = 123; // ❌ エラー

  // =============================
  // 型注釈 (Type Annotation)
  // =============================

  // 型を明示
  let userName: string;

  userName = "Jiro";
  // userName = false; // ❌ エラー

  // =============================
  // 関数の型注釈
  // =============================

  function greet(name: string): string {
    return `Hello, ${name}`;
  }

  console.log(greet("Taro"));

  // =============================
  // 型推論と戻り値
  // =============================

  // 戻り値はnumberと推論される
  function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(3, 5));

  // =============================
  // 型注釈が必要なケース
  // =============================

  // 初期化しないなら型を書く
  let safeUser: string;

  safeUser = "Saburo";
  // safeUser = 123; // ❌ エラー

  //関数の引数には呼び出すまで型が不明なため、必ず型注釈をつける
  // a と b の型が不明なためエラーになる
  // function add(a, b) {
  // return a + b;
  // }

  // 型を注釈することで、安全な関数になる
  function add(a: number, b: number): number {
    return a + b;
  }

  // =============================
  // オブジェクト
  // =============================

  let post: {
    title: string;
    likes: number;
  };

  post = {
    title: "My first post",
    likes: 10,
  };

  console.log(post);
}
