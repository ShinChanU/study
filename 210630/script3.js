'use strict';

const title = document.querySelector(".hello:first-child h1"); // first child 찾음
console.dir(title); // 많은 정보를 볼 수 있음. 그  중 on...은 event에 해당

function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);

// Event
// HTML로 부터 const title을 querySelector로 원하는 정보 받아옴
// addEventListener() 호출, 인자로 event이름, 실행 시킬 function을 넘겨줌(넘겨주기만 하고 실행은 event가 활성되면 하기때문에 괄호()없이 전달)
