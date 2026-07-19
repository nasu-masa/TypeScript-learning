// ==========================================
// Type Guards（型の絞り込み）
// Union型を条件分岐によって安全に扱う仕組み
// ==========================================

//
// 1. typeof
// プリミティブ型（string、number、booleanなど）を判定する
//

function printId(id: string | number) {
  if (typeof id === "string") {
    // idはstring型
    console.log(id.toUpperCase());
  } else {
    // idはnumber型
    console.log(id.toFixed(2));
  }
}

printId("hello-world"); // HELLO-WORLD
printId(123.456);     // 123.46

//
// 2. instanceof
// クラスのインスタンスかどうかを判定する
//

class User {
  constructor(public name: string) {}
}

class Company {
  constructor(public companyName: string) {}
}

function printEntity(entity: User | Company) {
  if (entity instanceof User) {
    // entityはUser型
    console.log(entity.name);
  } else {
    // entityはCompany型
    console.log(entity.companyName);
  }
}

printEntity(new User("Taro"));         // User: Taro
printEntity(new Company("Tech Inc.")); // Company: Tech Inc.

//
// 3. in
// オブジェクトが特定のプロパティを持っているか判定する
//

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // animalはFish型
    animal.swim();
  } else {
    // animalはBird型
    animal.fly();
  }
}

/*
===========================
使い分け
===========================

typeof
・プリミティブ型を判定する
・string、number、booleanなど

instanceof
・クラスのインスタンスを判定する
・newで作成したオブジェクト

in
・オブジェクトが持つプロパティで判定する
・interfaceやtypeで定義したオブジェクト

Type Guardsを使うことで、
Union型を安全に扱えるようになる。
*/
