'use strict';

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handlerTitleClick() { // change color on the tag
  title.style.color = "blue";
}

function handlerMouseEnter() {  // change innertext 
  title.innerText = "Mouse is here!";
}

function handlerMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener('click', handlerTitleClick); // onclick is Event, so argument could write "click".
title.addEventListener("mouseenter", handlerMouseEnter); // when mouseenter, func handlerMouseEnter() execute..
title.addEventListener("mouseleave", handlerMouseLeave);