'use strict';

// same code with 'script'
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handlerTitleClick() {
  title.style.color = "blue";
}

function handlerMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handlerMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() { 
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI")
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

// change code !
// title.addEventListener('click', handlerTitleClick);
// title.addEventListener("mouseenter", handlerMouseEnter);
title.onclick = handlerTitleClick;
title.onmouseenter= handlerMouseEnter;

title.addEventListener("mouseleave", handlerMouseLeave);
// .removEventListener; addEventListener를 더 선호

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);