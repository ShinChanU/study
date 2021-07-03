'use strict';

const title = document.querySelector("div.hello:first-child h1");

function handlerTitleClick() { // js에서 css 스타일링을 하는 것은 별로 좋지 않다 !
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  }
  else {
    newColor = "blue"; 
  }
  title.style.color = newColor;
}

title.addEventListener("click", handlerTitleClick);

// note !
// step1: find the element
// step2: listen for an event
// step3: react to the event