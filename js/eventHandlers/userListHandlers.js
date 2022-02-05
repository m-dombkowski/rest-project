import { getUsers } from "../async/asyncApiCalls.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../styleChanges.js";
import { deleteUser, showUserDetails } from "../users.js";
import { BASE_URL, usersList, userForms, userDetails } from "../variables.js";
import { selectingTarget } from "./mutualAndGeneralHandlers.js";

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
    });
  }

  if (selectingTarget(event).contains("close-icon")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
};
