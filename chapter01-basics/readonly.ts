// 5.読み取り専用プロパティ
// readonlyキーワードを付けると、そのプロパティは変更できなくなる。

interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// 読み取り専用のためエラー！
// config.apiUrl = "https://other.com";
{
  interface User {
    readonly profile: {
      name: string;
    };
  }

  const user: User = {
    profile: {
      name: "Taro",
    },
  };

  // user.profile = { name: "Jiro" };  ❌ profile自体の入れ替えは禁止
  user.profile.name = "Jiro"; // ✅ 中のnameは変更できる
}
//中身も禁止したいなら、
{
  interface User {
    readonly profile: {
      readonly name: string;
    };
  }

  const user: User = {
    profile: {
      name: "Taro",
    },
  };

  // user.profile = { name: "Jiro" }; ❌
  // user.profile.name = "Jiro";      ❌
}
