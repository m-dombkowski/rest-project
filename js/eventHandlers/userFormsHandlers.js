import { createUser, editUser, getUsers } from "../async/asyncApiCalls.js";
import { selectingTarget } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import { createUserObject } from "../users/creatingUser.js";
import { getUserIDForEdit } from "../users/gettingUserData.js";
import { showUserList } from "../users/showingUserData.js";

import {
  BASE_URL,
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
      userForms.innerHTML = "";
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
        userForms.textContent = "";
        showUserList();
        removeHide(usersList);
      });
    });
  }
};
