"use strict";

const token = window.localStorage.getItem("token");

if (!token) {
  //   window.localStorage.removeItem("token", data.token);

  window.location.replace("login.html");
}

logout.addEventListener("click", function () {
  window.localStorage.clear();
  window.location.replace("login.html");
});
