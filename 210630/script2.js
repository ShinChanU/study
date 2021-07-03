'use strict';

// getElementsByClassName()
const title1 = document.getElementsByClassName("hello"); // only class name, all element(array)
console.log(title1);

// getElementsByTagName()
const title2 = document.getElementsByTagName("h1"); // array
console.log(title2);

// querySelecor() : element를 css방식으로 search
const title3 = document.querySelector(".hello h1"); // like css(. use)
console.log(title3); // return first element 

const title4 = document.querySelectorAll(".hello h1"); // like css(. use)
console.log(title4); // return all element (array)

const title5 = document.querySelector("div h1");
console.dir(title5);

title5.innerText = "Grab me !!!!";

