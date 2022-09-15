"use strict";

const elForm = document.querySelector(".form");
const elusernameInput = document.querySelector(".username-input");
const elPasswordInput = document.querySelector(".password-input");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const userNameInputValue = elusernameInput.value;
  const userNamePasswordValue = elPasswordInput.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userNameInputValue,
      password: userNamePasswordValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);

        window.location.replace("index.html");
      } else {
        alert("parol yoki username notogri");
      }
    });
});
