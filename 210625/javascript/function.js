'use strict';
// 함수(Function)
// - fundamental building block in the program, 기본적 빌딩 블록
// - subprogram can be used multiple times, 재사용 가능
// - performs a task or calculates a value, 한가지 일, 계산 사용


// 1. Function declaration(함수 선언)
// function name(param1, param2) {body... return;}(logic 부분)
// one function === one thing(하나 함수 하나의 일)
// naming: dosomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS(함수는 오브젝트로 간주)
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) { // message: parameter
  console.log(message);
}
log('Hello@');
log(1234); // type을 동적으로 운영 in JS (typescript 필요성)

// 2. parameters(매개 변수)
function changeName(obj) {
  obj.name = 'coder'; // object는 reference 접근
}
const chan = { name: 'chan' };
changeName(chan);
console.log(chan);

// 3. default parameters
function showMessage(message, from = 'unknown') { // 디폴드 값 저장
  console.log(`${message} by ${from}`)
}
showMessage('Hi');

// 4. Rest parameters (added in ES6) (배열 형태로 전달)
function printAll(...args)  {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) { // 하나씩 매핑
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // 배열의 함수
}
printAll('Shin', 'Chan', 'Woo');

// 5. Local scope(밖에서는 안을 볼 수 없고, 안에서는 밖을 볼 수 있다.)
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello'
  }
  // console.log(childMessage); error!
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b; 
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}

//good 
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않는 경우 재빨리 리턴
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable(함수도 다른 변수 처럼)
// can be assigned as a value to variable(변수에 할당이 되고)
// can be passed as an argument to other functions.(함수의 파라미터로 전달도 되고)
// can be returned by another function.(다른 함수의 리턴도 가능)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expresstion is created when the execution reaches it.
const print = function() { // anonymous function(이름이 없는 함수)
  console.log('print');
}; 
const printAgain = print; // 함수를 변수로 선언
printAgain(); // 변수를 함수로 사용
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression(함수를 상황에 맞게 전달된 파라미터를 실행)
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function() {
  console.log('Yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() { 
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function(화살표 함수)
// always anonymous
// const simplePrint = function() {
//   console.log('simplePrint');
// }
const simplePrint = () => console.log('simplePrint!'); // 한 줄로 표현 가능 !
const add  = (a, b) => a + b;
add(2, 3);
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE: Immdiately Invoked Function Expression
function hello() {
  console.log('IIFE');
}
hello();

(function hello() {
  console.log('IIFE');
})(); // 괄호로 묶고, 괄로를 한 번 더 하면, 함수 생성과 동시에 출력

function calculate(command, a, b) {
  if (command == 'add') {
    return a + b;
  } else if (command == 'substract') {
    return a - b;
  } else if (command == 'divide') {
    return a / b;
  } else if (command == 'multiply') {
    return a * b;
  } else if (command == 'remainder') {
    return a % b;
  } else {
    return;
  }
}

function calculate2(command, a, b) {
  switch(command) {
    case 'add':
      console.log(a + b);
      break;
    case 'substract':
      console.log(a - b);
      break;
    case 'divide':
      console.log(a / b);
      break;
    case 'multiply':
      console.log(a * b);
      break;
    case 'remainder':
      console.log(a % b);
      break;
    default:
      throw Error('No!');
  }
}

calculate2('add', 5, 5);
