import { selectingTarget } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
} from "../generalFunctions/styleChanges.js";
import { showUserList } from "../users/showingUserData.js";

import {
  userDetails,
  userForms,
  usersList,
} from "../generalFunctions/variables.js";

export const mutualHandler = function (event) {
  if (selectingTarget(event).contains("go-back")) {
    userDetails.innerHTML = "";
    userForms.innerHTML = "";
    showUserList();
    removeHide(usersList);
    addHide(userDetails);
    addHide(userForms);
    hideSpinner();
  }
};
