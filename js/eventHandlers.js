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
import {
  BASE_URL,
  createForm,
  userForms,
  userDetails,
  usersList,
} from "./variables.js";

const selectingTarget = function (event) {
  const target = event.target;
  return target.classList;
};

export const userListHandler = function (event) {
  if (selectingTarget(event).contains("details-icon")) {
    getUsers(BASE_URL).then((data) => {
      showUserDetails(data, event);
      addHide(usersList);
      addHide(userForms);
      removeHide(userDetails);
    });
  }

  if (selectingTarget(event).contains("close-icon")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
};

export const userDetailsHandler = function (event) {
  if (selectingTarget(event).contains("edit-user")) {
    addHide(userDetails);
    removeHide(userForms);
    renderEditUser(event);
  }

  if (selectingTarget(event).contains("add-post")) {
    event.preventDefault();
  }
};

export const userFormsHandler = function (event) {
  if (selectingTarget(event).contains("submit")) {
    event.preventDefault();
    createUser(BASE_URL, createUserObject("create")).then(() => {
      showUserList();
      userForms.innerHTML = "";
      addHide(userForms);
      removeHide(usersList);
      addHide(createForm);
    });
  }

  if (selectingTarget(event).contains("edit-submit")) {
    event.preventDefault();
    getUsers(BASE_URL).then((data) => {
      editUser(
        BASE_URL,
        getUserIDForEdit(data, event),
        createUserObject("edit")
      ).then((data) => {
        createForm.textContent = "";
        showUserList();
        removeHide(usersList);
        console.log(data);
      });
    });
  }
};

export const mutualHandler = function (event) {
  if (selectingTarget(event).contains("go-back-to-main")) {
    userDetails.innerHTML = "";
    userForms.innerHTML = "";
    showUserList();
    removeHide(usersList);
    addHide(userDetails);
    addHide(userForms);
  }
};
