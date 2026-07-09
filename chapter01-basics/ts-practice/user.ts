interface User {
  name: string;
  age: number;
  email?: string;
}

function formatUser(user: User): string {
  let result = `名前:${user.name},年齢:${user.age}`;

  if (user.email) {
    result += `,email:${user.email}`;
  }

  return result;
}

const user1: User = { name: "Saburo", age: 60 };
const user2: User = { name: "Gosaburo", age: 56, email: "example@example.com" };

console.log(user1);
console.log(user2);
