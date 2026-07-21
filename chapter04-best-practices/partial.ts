{
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
  }
  // Userのすべてのプロパティがオプショナルになる
  // type PartialUser = {
  //   id?: number;
  //   name?: string;
  //   email?: string;
  //   isAdmin?: boolean;
  //   createdAt?: Date;
  // }

  type PartialUser = Partial<User>;

  function updateUser(id: number, fieldsToUpdate: PartialUser) {
    // ...更新処理
  }

  // nameとemailだけを更新する
  updateUser(1, { name: "Taro Yamada", email: "taro@new-example.com" });

  // 例題

  interface Profile {
    name: string;
    age: number;
    bio: string;
  }

  const userData: Partial<Profile> = {
    name: "Taro",
  };

  console.log(userData);
}
