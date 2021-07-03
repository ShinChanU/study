'use strict';

// Objects
// one of the JavaScript's data type.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object  = { key : value };

// // 1. Literals and properties
const obj1 = {}; // 'object literal' syntax, {} 사용
const obj2 = new Object(); // 'object constructor' syntax, new 사용(Object 생성자 사용)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const chan = {name: 'chan', age: 25} // {key: value ... }
print(chan);

// with JavaScript magic (dynamically typed language)
// can add properties later
chan.hasJob = true; // object에 추가
console.log(chan.hasJob); // 동적 타이핑이지만 유지보수 까다롭

delete chan.hasJob;
console.log(chan.hasJob); // 삭제도 가능(미친 짓..)

// 2. Computed properties (계산된 프로퍼티 [])
// key should be always string
console.log(chan.name);  // dot . 가능
console.log(chan['name']); // [], string type 대괄호도 가능(computed property), 배열처럼, 실시간으로 확인하고 싶을 때
chan['hasJob'] = true;
console.log(chan.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // obj.key => undefined 출력, key라는 property가 없음, name, age 뿐
}
printValue(chan, 'name');
printValue(chan, 'age'); 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dava', age: 4}; // 여기에서 person4를 추가하고 싶음
// 오브젝트를 만들어서 리턴해주는 함수 작성
const person4 = makePerson('chan', 30);
console.log(person4);
function makePerson(name, age) {
  return {
    name, // key, value 같을 시 생략 가능
    age,
  };
}

// 4. Constuctor Function
// 위 함수를 단순하게 class를 만들어서 사용 
const person5 = new Person('ellie', 35);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return tis;
}
console.log(person5);

// 5. in operator: property existence check ( key in obj )(해당하는 키가 오브젝트 안에 있는지)
console.log('name' in chan);
console.log('age' in chan);
console.log('random' in chan);
console.log(chan.random); // 정의하지  않은 키 -> undefined

// 6. for..in vs for..of
// for (key in obj)
for (let key in chan) {
  console.log(key);
} // chan 오브젝트의 모든 key를 출력

// for (value of iterable) (for ... of ...)
const array = [1, 2, 4, 5];
for(let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [ob1, obj2, obj3...])
const user = { name: 'chan', age: '20'}; // user 이름으로 메모리 할당 받음
const user2 = user; // user2는 user가 가지고 있는 주소를 복사받음
user2.name = 'coder'; // user2, user 모두 바뀜
console.log(user);

//old way, object를 복사하는 법
const user3 = {};
for(let key in user ) {
  user3[key] = user[key];
}
console.log(user3);
// Object.assign
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 뒤에 나오는 값으로 덮어씀, blue
console.log(mixed.size);

