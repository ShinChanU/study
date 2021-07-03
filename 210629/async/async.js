// async & await
// clear style of using promise

// 1. async
async function fetchUSer() {
  // do network request in 10 secs...
  return 'chan';
}

const user = fetchUSer();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌');
// }

async function pickFruits() {
  const applePromise = getApple(); // promise 생성시 바로 발생
  const bananaPromise = getBanana();
  const apple = await applePromise; // apple, banana 병렬 실행
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // 먼저 끝나는 것 부터 출력