'use strict';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handlerLinkClick(event) { // event는 js가 자동으로 넣는 인자일뿐, 우리는 이름만 만들어줌
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit); // submitEvent
link.addEventListener("click", handlerLinkClick); //mouseEvent -> 이벤트의 다양성을 확인 할 수 있음
// handlerLinkClick() 함수의 전체가 아닌 이름만 넘겨줘서 JS가 함수를 실행 하도록 함
// 함수가 실행될 때 JS는 첫번째 인자로 object를 자동적으로 넣음
// object에는 방금 일어난 event에 대한 정보가 담겨있음