// 1. use strict
// added in ES5
// use this for vanilla JavaScript
"use strict";
console.log(age);

// 2. variable, rw(read/write)
// let (added int ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
console.log(age);
var age;

// let은 선언전에 값 할당 시 오류 발생
// x = 4;
// let x;

{
  num = 4;
  var num;
}
console.log(num);

// 3. constant, r(read only)
// use const whenever possible
// only use let if variable needs to change
const daysInWeek = 7;
const MaxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (function 변수에 할당 가능)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negatuveInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negatuveInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bingInt = 123456789123456789123456789123456789123456789123n;
console.log(`value: ${bingInt}, type: ${typeof bingInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2);
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. dynamic typing dynamically typed language
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 7 + "5";
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error
