{
  // ========================================
  // Union型
  // ========================================
  // Union型は「A または B」を表す型
  // 記号は | を使う

  let userId: string | number;

  userId = 101;
  userId = "user-abc";

  // userId = true;
  // エラー: boolean は string | number に代入できない

  // ----------------------------------------
  // 関数の引数で使う例
  // ----------------------------------------

  function printId(id: string | number) {
    console.log(id);
  }

  printId(1);
  printId("user-001");

  // ----------------------------------------
  // Union型の注意点
  // ----------------------------------------
  // string | number の場合、string専用メソッドはそのまま使えない

  function printFormattedId(id: string | number) {
    // console.log(id.toUpperCase());
    // エラー: number の可能性があるため

    if (typeof id === "string") {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }

  printFormattedId("abc");
  printFormattedId(123);

  // ----------------------------------------
  // リテラル型との組み合わせ
  // ----------------------------------------
  // 決まった選択肢だけを許可したいときによく使う

  type Status = "loading" | "success" | "error";

  let status: Status;

  status = "loading";
  status = "success";
  status = "error";

  // status = "pending";
  // エラー: "pending" は Status に含まれていない

  // ----------------------------------------
  // アプリで使いそうな例
  // ----------------------------------------

  type MediaType = "image" | "video";

  const mediaType: MediaType = "image";

  // const wrongMediaType: MediaType = "audio";
  // エラー: "audio" は許可されていない
}
