import {
  showUsers,
  createUser,
  userForms,
  userDetails,
  usersList,
  postList,
  userListSection,
  postListHeaderContainer,
} from "./generalFunctions/variables.js";

import { renderCreateUser } from "./buildingHTML/rendering.js";
import { addHide, removeHide } from "./generalFunctions/styleChanges.js";
import { userFormsHandler } from "./eventHandlers/userFormsHandlers.js";
import { userListHandler } from "./eventHandlers/userListHandlers.js";
import { userDetailsHandler } from "./eventHandlers/userDetailsHandlers.js";
import {
  mutualHandler,
  responseModalHandler,
} from "./eventHandlers/mutualAndGeneralHandlers.js";
import { showUserList } from "./users/showingUserData.js";
import { checkPostHeader, clearElement } from "./generalFunctions/general.js";

showUsers.addEventListener("click", function () {
  // usersList.innerHTML = " ";
  clearElement(usersList);
  checkPostHeader();

  showUserList();
  removeHide(userListSection);
  removeHide(usersList);
  addHide(userForms);
  addHide(postList);

  clearElement(userForms);
  clearElement(userDetails);
  clearElement(postList);
});

createUser.addEventListener("click", function () {
  clearElement(userForms);
  renderCreateUser();
  removeHide(userForms);
  addHide(usersList);
  clearElement(userDetails);
  addHide(userListSection);
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
  responseModalHandler(event);
});
