'use strict';

// 1. String concatenation(문자열 결합)
console.log('my' + 'cat');
console.log('1' + 2); // num + string => string
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('chan\'s book\n\t') // \ (백 슬러쉬) 사용

// 2. Numeric opertors(숫자 연산)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder(나머지)
console.log(2 ** 3); // exponentiation(제곱)

// 3. Increment and decrement operators(++, --)
let counter = 2;
const preIncrement = ++counter; // 미리 ++연산
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // 나중 ++연산
// postIncrement = counter; // 할당
// counter = counter + 1;   // 업데이트
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operator(할당 연산자)
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y 
x /= y; // x = x / y

// 5. Comparison operators(비교)
console.log(10 < 6);  // less than
console.log(10 <= 6); // less than or equal 
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical(논리) operator: || (or), && (and), ! (not)
const value1 = false; //true 경우 바로 연산 종료하기 때문에 check()함수 호출 x, 즉 시간이 오래걸리는 연산일수록 뒤에 작성이 바람직함
const value2 = 4 < 2;

// || (or), finds the first truthy value
console .log(`or: ${value1 || value2 || check()}`); // value1이 true면 연산을 멈춤.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something, 간편하게 null check

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive ==  numberFive); // true, type 관계 x
console.log(stringFive !=  numberFive);

// === strict equality, no type conversion(타입까지 신경써서 확인)
console.log(stringFive ===  numberFive); // false, type도 일치해야함
console.log(stringFive !=  numberFive);

// object equality by referance
const chan1 = { name : 'chan'};
const chan2 = { name : 'chan'};
const chan3 = chan1;
console.log(chan1 == chan2); // 값이 같더라도 다른 오브젝트(다른 referance)
console.log(chan1 === chan2); // loose, strict 둘 다 false
console.log(chan1 === chan3); // 같은 memory referance 지정

// equality - puzzler, 0 null undefined emptystring => false
console.log(0 == false); // true
console.log(0 === false);  // false(0은 boolean 타입 x)
console.log('' == false);  // true
console.log('' === false);  // false
console.log(null == undefined); // true
console.log(null === undefined);  //false

// 8. conditional operators(조건문): if
// if, else if, esle
const name = 'chan';
if (name === 'chan') {
  console.log('Welcome, Chan!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'chan' ? 'yes' : 'no'); // 조건문 ok => 앞, 아니면 뒤

// 10. Switch statement(스위치)
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ="IE";  // else if 많이 사용시 사용하면 좋음
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox': // 같은 메시지, 연결
    console.log('love you!'); 
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops(반복문)
// while loop, while the condition is truly,
// body code is executed.
let i = 3;
while(i > 0) {
  console.log(`while: ${i}`); // 3 2 1 0(종료)
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`); // i가 0이지만 do 를 실행함
  i--;
} while(i > 0); // do 를 실행하고 while을 실행함

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
  // inline variable declaration => 지역변수
  console.log(`inline variable variable for: ${i}`);
}

// nested loops 다중루프, 메모리 상으로 좋지 않음
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(i = 0; i < 11; i++) {
  if (i == 0) { 
    continue;
  }
  else if ( i % 2 == 0) {
    console.log(`even: ${i}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 10; i++)  {
  console.log(`number: ${i}`);
  if(i == 8) { 
    break;
  }
}
