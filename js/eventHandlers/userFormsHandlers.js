import { createUser, editUser, getUsers } from "../async/asyncApiCalls.js";
import { selectingTarget, clearElement } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import { createUserObject } from "../users/creatingUserObjects.js";
import { getUserIDForEdit } from "../users/gettingUserData.js";
import { showUserList } from "../users/showingUserData.js";

import {
  BASE_URL,
  userDetails,
  userForms,
  usersList,
} from "../generalFunctions/variables.js";

export const userFormsHandler = function (event) {
  if (selectingTarget(event).contains("submit")) {
    event.preventDefault();
    showSpinner();
    createUser(BASE_URL, createUserObject("create")).then(() => {
      hideSpinner();
      showUserList();
      clearElement(userForms);
      addHide(userForms);
      removeHide(usersList);
    });
  }

  if (selectingTarget(event).contains("edit-submit")) {
    event.preventDefault();
    showSpinner();
    getUsers(BASE_URL).then((data) => {
      editUser(
        BASE_URL,
        getUserIDForEdit(data, event, "current-user-name"),
        createUserObject("edit")
      ).then(() => {
        hideSpinner();
        clearElement(userForms);
        showUserList();
        removeHide(usersList);
      });
    });
  }

  if (selectingTarget(event).contains("go-back-to-details")) {
    userForms.innerHTML = "";
    addHide(userForms);
    removeHide(userDetails);
  }
};
