'use strict';

// Array 

// 1. Declaration(선언)
const arr1 = new Array(); // 오브젝트를 사용
const arr2  = [1, 2]; // index[0] = 1

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); // proto..?
console.log(fruits.length); // 2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 제일 마지막 배열

console.clear();
// 3. Looping over an Array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) { 
  console.log(fruit);
}
// c. forEach
fruits.forEach((fruit, index) => console.log(fruit)); // forEach 라는 api 사용

//4. Addtion, deletion, copy
//push: add an item to the end, 삽입(뒤에서)
fruits.push('🍓', '🍑'); // 원래 배열 ['🍎', '🍌']
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑"]

// pop : remove an item from the end, 삭제(뒤)
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging, 앞부터 삽입
fruits.unshift('🍓', '🍋'); // 배열 앞에서 부터 넣을 수 있음
console.log(fruits);

//shift: remove an items from the benigging, 뒤부터 삭제
fruits.shift(); // 앞에서부터 삭제함
fruits.shift(); 
console.log(fruits);

// note!! shift, unshift are slower than pop, push(unshift, shift는 매우 느림)
// 매우매우 느림, 배열을 뒤로 미루고 unshift를 해야하기 때문
// 뒤에서 움직이거나 index로 움직이는 것은 빠름

// splice: remove an item by index position(지정된 범위에서 삭제)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // (시작 인덱스, 지울 개수)
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 1 삭제후 사과랑 수박 삽입, (시작, 지울개수, 그 자리에 넣을 요소..)
console.log(fruits);

// conbine two arrays, concat
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); // 배열이 합쳐져서 리턴
console.log(newFruits);

// 5. Searching 
// indexOf: find the index (인덱스 찾기)
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 사과가 있는 곳의 인덱스 = 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🥥')); // -1

// includes ( 불린 값 )
console.log(fruits.includes('🍉')); // bool 값 리턴
console.log(fruits.includes('🥥'));


// lastIndexOF (인덱스인데 가장 마지막에 있는 값)
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎')); // last index of apple

// practice
fruits.push()
console.clear();
const array = fruits.toLocaleString();
const numbers = [1, 3, 2, 6, 4, 2, 3, 1];
console.log(numbers);
console.log(numbers.lastIndexOf(1, 7));
const smallNum = currentValue => currentValue < 2;
console.log(numbers.some(smallNum));
numbers.forEach((number, index) => console.log(number));
const map1 = numbers.map(x => x*2);
console.log(numbers);
console.log(map1);
const result = numbers.filter(x => x > 3);
console.log(result);
const sum = numbers.reduce((acc, value, index) => {return acc + value});
console.log(sum);

console.clear();
// Q1. make a string out of an array (join())
{
  const fruits = ['apple', 'banana', 'orange'];
  // console.log(fruits.toString()); (내가 만든 코드, 이하 my)
  console.log(fruits.join(', '));
}

// Q2. make an array out of a string (spilt())
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const fruitsArray = fruits.split(', '); // limit 설정 가능(몇 개 리턴할 지)
  console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] (reverse())
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements (slice())
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2, 5);
  console.log(newArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
console.clear();

// Q5. find a student with the score 90 (find())
{
  const result = students.find((student) => (student.score === 90));// find(), boolean 값 리턴, 찾으면 바로 리턴
  console.log(result);

  // console.log(students.filter((value, index, array) => (value.score == 90)));
  // for(let i = 0; i < students.length; i++) {
  //   if(students[i].score === 90) {
  //     console.log(students[i]);
  //   }
  // }   // my code
}

// Q6. make an array of enrolled students (filter())
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);

  // const enrollStudent = [];
  // for (let student of students) {
  //   if(student.enrolled) enrollStudent.push(student);
  // }
  // console.log(enrollStudent); // my code
}

// Q7. make an array containing only the students' scores (map(), map()는 모든 배열의 요소를 콜백함수에 적용해서 새로운 배열을 만듦)
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // const scores = [];
  // for(let student of students) {
  //   scores.push(student.score);
  // }
  // console.log(scores); // my code
}

// Q8. check if there is a student with the score lower than 50 (some(), every())
{
  console.log(students.some((student) => (student.score < 50)));
}

// Q9. compute students' average score(reduce(), 누적되는 값을 리턴해줌)
{ 
  const result = students.reduce((prev, curr) => {
    console.log('-------');
    console.log(prev);
    console.log(curr); // 배열의 요소를 순차적으로 받음
    return prev + curr.score; // 리턴되어서 다음 prev가 되는 값
  }, 0); // prev는 0으로 시작, 리턴시에 계속 prev는 누적됨.

  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result2 / students.length);

  // let sum = 0;
  // students.forEach((value, index, array) => (sum += value.score));
  // console.log(sum/students.length); // my code
}

// Q10. make a string containing all the scores(map(), join())
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .join();
  console.log(result);

  // const scores = [];
  // for(let student of students) {
  //   scores.push(student.score);
  // }
  // console.log(scores);
  // const string = scores.join(', ');
  // console.log(string); // my code
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}