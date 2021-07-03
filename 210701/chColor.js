'use strict';

const color = ["white", "yellow", "aqua", "purple"];
let i = 0;
function colorBg() {
  i++;
  if(i >= color.length) i=0;
  const bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.style.backgroundColor = color[i];
}

const btn2 = document.getElementById("btn2");
btn2.onclick = () => colorBg();
console.dir(btn2);

const btn3 = document.getElementById("btn3");
btn3.onmouseover = () => colorBg();