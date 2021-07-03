'use strict';

// 1. 변수(Variable), rw(read, write)(메모리에 읽기 쓰기)
// 변경 되는 값(mutable)
// let (선언), var (잘 사용하지 않음)
let globalName = 'global name';
{
  let name = 'chan';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
} // block scope 로 사용을 제한 할 수 있음
console.log(name);
console.log(globalName);

// 2. 상수(Constant), r(read only)
// 값이 변경 되지 않음(immutable)
// security, thread safety(프로세스 효율), reduce human mistakes
const week = 7;
const maxNumber = 5;
console.log(week, maxNumber);
// week = 5; error 발생

// 3. 데이터 타입(Data(Variable types))
// primitive, single item: number(숫자는 모두, (*-2**53~2**53), string, boolean, null, undefined, symbol
// object, box container(메모리 저장 개념: 포인터와 비슷)
// function, first-class function(함수를 변수에 할당, 인자로 전달, 리턴 모두 가능)
// js는 dynamic type (let a = 1.23;)
const size = 17.1;
console.log(`valu: ${size}, type: ${typeof size}`);

// 데이터 타입 종류
// Immutable data types, primitive types, frozen objects(변경이 불가한 데이터 타입)
// Mutable data types: all objects by default are mutable in JS

// number - infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan; // ' ' + string => 
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string), 백틱(`) + ${} 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undedined, NaN, ''(공백 string)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 동일한 스트링이여도 심볼에 따라 다르다
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // description 작성해야함

// object, real-life Object, data structure
const chan = { name: 'chan', age: 25}; // 다른 object 할당 불가
chan.age = 24; 
console.log(chan);

// 4. 다이나믹 타이핑(dynamic typing)
let text = 'hello';
console.log(text.charAt(0)); // indexing
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // stirng + number = string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); -> error 발생