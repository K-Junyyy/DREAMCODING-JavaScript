// 1. string concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substarct
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`);

// 4. assignment operator
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operator: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("👀");
  }
  return true;
}

// ! (not)
console.log(!true);

// 7. equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. conditional operator: if
// if, else if, else
const name = "coder";
if (name === "ellie") {
  console.log("welcome ellie!");
} else if (name === "coder") {
  console.log("you are amazing coder!");
} else {
  console.log("unknown");
}

// 9. ternary(삼항) operator: ?
// condition ? value1 : value2
console.log(name === "ellie" ? "yes" : "no");

// 10. switch statement
// use for mutiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("love you!");
    break;
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. loops
// while loop, while the condition is truthy
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
  // inline variable declaration
  console.log(`inline varialbe for: ${i}`);
}

// nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j;: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}
// Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}

// label, 현업에서 거의 쓰이지 않음
loop1: for (let i = 0; i < 3; i++) {
  //첫번째 for문은 "loop1" 레이블을 붙였다.
  loop2: for (let j = 0; j < 3; j++) {
    //두번째 for문은 "loop2" 레이블을 붙였다.
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}
