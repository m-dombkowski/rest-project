import { btn, btn2, testBody, BASE_URL, form } from "./variables.js";
import { createUser, getUserByID } from "./asyncApiCalls.js";

import { windowHandler } from "./eventHandlers.js";
import { createUserObject, showUserList } from "./users.js";
import { renderCreateUser } from "./rendering.js";

btn.addEventListener("click", function () {
  showUserList();
});

btn2.addEventListener("click", function () {
  // createUser(BASE_URL, testBody).then((data) => console.log(data.data.id));
  renderCreateUser();
});

window.addEventListener("click", function (event) {
  windowHandler(event);
});
