{
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
  }
  // UserからidとcreatedAtプロパティを除外した型
  // type UserCreationPayload = {
  //   name: string;
  //   email: string;
  //   isAdmin: boolean;
  // }
  type UserCreationPayload = Omit<User, "id" | "createdAt">;

  function createUser(payload: UserCreationPayload) {
    // ...作成処理
  }

  createUser({ name: "Jiro", email: "jiro@example.com", isAdmin: false });

  // 例題
  interface Article {
    id: number;
    title: string;
    content: string;
    createAt: Date;
  }

  type CreateArticleData = Omit<Article, "id" | "createAt">;

  const article: CreateArticleData = {
    title: "Nameless Cat",
    content: "I Am a Cat. It doesn't have a name yet.",
  };

  console.log(article);
}
