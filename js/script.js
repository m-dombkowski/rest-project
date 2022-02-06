import {
  btn,
  btn2,
  userForms,
  userDetails,
  usersList,
} from "./generalFunctions/variables.js";

import { renderCreateUser } from "./building/rendering.js";
import { addHide, removeHide } from "./generalFunctions/styleChanges.js";
import { userFormsHandler } from "./eventHandlers/userFormsHandlers.js";
import { userListHandler } from "./eventHandlers/userListHandlers.js";
import { userDetailsHandler } from "./eventHandlers/userDetailsHandlers.js";
import { mutualHandler } from "./eventHandlers/mutualAndGeneralHandlers.js";
import { showUserList } from "./users/showingUserData.js";

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
