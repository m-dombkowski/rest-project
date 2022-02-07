import {
  btn,
  btn2,
  userForms,
  userDetails,
  usersList,
  postList,
} from "./generalFunctions/variables.js";

import { renderCreateUser } from "./buildingHTML/rendering.js";
import { addHide, removeHide } from "./generalFunctions/styleChanges.js";
import { userFormsHandler } from "./eventHandlers/userFormsHandlers.js";
import { userListHandler } from "./eventHandlers/userListHandlers.js";
import { userDetailsHandler } from "./eventHandlers/userDetailsHandlers.js";
import { mutualHandler } from "./eventHandlers/mutualAndGeneralHandlers.js";
import { showUserList } from "./users/showingUserData.js";
import { clearElement } from "./generalFunctions/general.js";

btn.addEventListener("click", function () {
  usersList.innerHTML = " ";
  showUserList();
  removeHide(usersList);
  addHide(userForms);
  addHide(postList);
  clearElement(userForms);
  clearElement(userDetails);
  clearElement(postList);
});

btn2.addEventListener("click", function () {
  renderCreateUser();
  removeHide(userForms);
  addHide(usersList);
  clearElement(userDetails);
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
