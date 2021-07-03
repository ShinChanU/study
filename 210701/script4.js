'use strict';

const h1 = document.querySelector("div.hello:first-child h1");

// 1. className
function handlerTitleClick() { // 이 경우 h1의 class가 존재해도 사라짐
  const clickedClass = "clicked"
  if(h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

// 2. classList, contains, remove
function handlerTitleClick2() { 
  const clickedClass = "clicked"
  if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

// 3. toggle: check className exists
// classList에 clicked class가 있는지 확인 후 없으면 추가하고, 있으면 제거
function handlerTitleClick3() { 
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handlerTitleClick3); // toggle 사용으로 간편하게 !