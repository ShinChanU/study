'use strict';
// intervals(시간적 주기), timeout

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(arg1, arg2): arg1= 실행할 함수이름, arg2= 주기(ms)
// setInterval(sayHello, 5000); 

getClock();
setInterval(getClock, 1000);