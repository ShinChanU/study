'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resovle, reject) => {
  // doing some heavy work (network, read file)
  console.log('doing something...');
  setTimeout(() => {
    resovle('chan'); // 성공
    // reject(new Error('no network')); // 실패, 에러코드
  }, 2000)
});

// 2. Consumers: then. catch, finally
promise
.then((value) => { // promise가 잘 실행되면 resolve 콜백함수의 값이 value로 전달
  console.log(value); // error 발생
})
.catch(error => {
  console.log(error); // reject error 를 받아옴
})
.finally(() => {
  console.log('finally');
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓', 1000));
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ${hen} = 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`, 1000));
  });

getHen() // 
.then(getEgg) // 이런식으로 생략도 가능
.catch(error => { // 위의 then이 실패할 경우 추가해야함
  return '🌭';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);