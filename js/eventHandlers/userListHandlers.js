import { getUsers } from "../async/asyncApiCalls.js";
import { selectingTarget } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import { showUserDetails } from "../users/showingUserData.js";
import { deleteUser } from "../users/deletingUser.js";

import {
  BASE_URL,
  usersList,
  userForms,
  userDetails,
  postList,
} from "../generalFunctions/variables.js";

export const userListHandler = function (event) {
  if (selectingTarget(event).contains("details-icon")) {
    addHide(usersList);
    showSpinner();
    getUsers(BASE_URL).then((data) => {
      spinner.setAttribute("hidden", "");
      showUserDetails(data, event);
      hideSpinner();
      addHide(userForms);
      removeHide(userDetails);
      addHide(postList);
    });
  }

  if (selectingTarget(event).contains("close-icon")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
};
