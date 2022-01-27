import { btn, btn2, testBody, BASE_URL } from "./variables.js";
import { createUser } from "./asyncApiCalls.js";

import { windowHandler } from "./eventHandlers.js";
import { showUserList } from "./users.js";

btn.addEventListener("click", function () {
  showUserList();
});

btn2.addEventListener("click", function () {
  createUser(BASE_URL, testBody).then((data) => console.log(data.data.id));
});

window.addEventListener("click", function (event) {
  windowHandler(event);
});
