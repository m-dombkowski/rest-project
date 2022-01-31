import { createUser, editUser, getUsers } from "./asyncApiCalls.js";
import { renderEditUser } from "./rendering.js";

import { addHide, removeHide } from "./styleChanges.js";
import {
  createUserObject,
  deleteUser,
  showUserDetails,
  showUserList,
  getUserIDForEdit,
} from "./users.js";
import { BASE_URL, userCreate, userDetails, usersList } from "./variables.js";

export const windowHandler = function (event) {
  if (event.target.classList.contains("details-icon")) {
    getUsers(BASE_URL).then((data) => {
      showUserDetails(data, event);
      addHide(usersList);
      addHide(userCreate);
      removeHide(userDetails);
    });
  }
  if (event.target.classList.contains("go-back-to-main")) {
    userDetails.innerHTML = "";
    userCreate.innerHTML = "";
    showUserList();
    removeHide(usersList);
    addHide(userDetails);
    addHide(userCreate);
  }
  if (event.target.classList.contains("close-icon")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
  if (event.target.classList.contains("submit")) {
    event.preventDefault();
    createUser(BASE_URL, createUserObject("create")).then(() => {
      showUserList();
      userCreate.innerHTML = "";
      addHide(userCreate);
      removeHide(usersList);
    });
  }
  if (event.target.classList.contains("edit-user")) {
    addHide(userDetails);
    removeHide(userCreate);
    renderEditUser(event);
  }
  if (event.target.classList.contains("edit-submit")) {
    event.preventDefault();
    getUsers(BASE_URL).then((data) => {
      editUser(
        BASE_URL,
        getUserIDForEdit(data, event),
        createUserObject("edit")
      ).then((data) => console.log(data));
    });
  }
};
