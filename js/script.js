import {
  BASE_URL,
  btn,
  btn1,
  btn2,
  btn3,
  userForms,
  userDetails,
  usersList,
} from "./variables.js";
import {
  mutualHandler,
  userDetailsHandler,
  userFormsHandler,
  userListHandler,
} from "./eventHandlers.js";
import { showUserList } from "./users.js";
import { renderCreateUser } from "./rendering.js";
import { addHide, removeHide } from "./styleChanges.js";

btn.addEventListener("click", function () {
  usersList.innerHTML = " ";
  showUserList();
  removeHide(usersList);
  addHide(userForms);
  userForms.innerHTML = "";
  userDetails.innerHTML = "";
});

btn2.addEventListener("click", function () {
  renderCreateUser();
  removeHide(userForms);
  addHide(usersList);
  userDetails.innerHTML = "";
});

userForms.addEventListener("click", function (event) {
  userFormsHandler(event);
});

usersList.addEventListener("click", function (event) {
  userListHandler(event);
});

userDetails.addEventListener("click", function (event) {
  userDetailsHandler(event);
});

window.addEventListener("click", function (event) {
  mutualHandler(event);
});
