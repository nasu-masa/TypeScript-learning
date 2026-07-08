{//1.プリミティブ型

//string型 文字列。シングルクォート、ダブルクォート、バッククォートのいずれでも定義できる。
const userName: string = "Taro";
const greeting: string = `Hello, ${userName}`;

console.log(greeting);

const city: string = "Tokyo";
const greetingCity: string = `Hello, ${city}`;

console.log(greetingCity);

//number型 数値。整数も少数も同じnumber型。
const age: number = 25;
const price: number = 1980.5;
const hex: number = 0xff; //16進数

const score: number = 90;
const total: number = score + 10;

console.log(total);

//boolean型 真偽値(true, false)を表す型。
const isActive: boolean = true;
const hasPermission: boolean = false;

const isAdmin: boolean = true;

console.log(isAdmin);
}
