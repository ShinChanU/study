'use strict';

const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-Form");

const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input";

const loginButton = loginForm.querySelector("button");

function btnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    alert("Hello " + username);
  }
}

loginButton.addEventListener("click", btnClick);