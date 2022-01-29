import { btn, btn2, userCreate, usersList } from "./variables.js";
import { windowHandler } from "./eventHandlers.js";
import { showUserList } from "./users.js";
import { renderCreateUser } from "./rendering.js";
import { addHide, removeHide } from "./styleChanges.js";

btn.addEventListener("click", function () {
  showUserList();
});

btn2.addEventListener("click", function () {
  renderCreateUser();
  removeHide(userCreate);
  addHide(usersList);
});

window.addEventListener("click", function (event) {
  windowHandler(event);
});
