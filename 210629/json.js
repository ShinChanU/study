'use strict';
// JSON
// JavaScript Object Notation
// (1) simplest data interchange format
// (2) lightweight text-based structure(텍스트 기반)
// (3) easy to read
// (4) key-value pairs(오브젝트처럼 key와 value)
// (5) used for seralization and transmission of data between the network the network connection (직렬화하고 전송할 때 사용)
// (6) indenpendent programming language and platform (언어, 플랫폼에 상관없이 사용 가능)

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(), // 오브젝트 사용
  // symbol: Symbol("id"), // json에 포함되지 않음
  jump: function() {
    console.log(`${this.name} can jump!`);
  }, // 출력이 되지 않음(데이터가 아니기 때문에)
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // 원하는 프로퍼티만 json으로 변환 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'chan' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // json에서 만들어진 오브젝트이므로 함수는 포함되지 않음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // parse에서 콜백함수를 사용하지 않았다면 error, object가 아닌 string 이기때문