{//3. オブジェクト型

// オブジェクトの型を定義するには、interfaceまたはtypeを使う。

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Takashi",
  age: 30,
  email: "taro@example.com",
};

type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 1,
  name: "TypeScript入門",
  price: 2980,
};
// 一般的には、オブジェクトの形状を定義する場合はinterfaceを、それ以外の型定義にはtypeを使うことが多い。
}
