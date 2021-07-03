'use strict';

// .getElementById(): 찾고자하는 id의 정보들을 확인 할 수 있음
const title = document.getElementById("title");
console.dir(title); // title의 객체 자세히 확인
title.innerText = "Got You!"; // innerText를 변경

console.log(title.id); // title의 id 
console.log(title.className); // title의 class

