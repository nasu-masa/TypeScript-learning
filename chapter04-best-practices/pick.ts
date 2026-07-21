{
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
  }
  // Userからidとnameプロパティだけを抜き出した型
  // type UserPreview = {
  //   id: number;
  //   name: string;
  // }
  type UserPreview = Pick<User, "id" | "name">;

  const user: UserPreview = {
    id: 1,
    name: "Taro",
  };

  // 例題
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }

  type ProductPreview = Pick<Product, "id" | "name">;

  const pick: ProductPreview = {
    id: 1,
    name: "Octopus",
  };

  console.log(pick);
}
