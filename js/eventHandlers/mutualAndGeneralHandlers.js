import { selectingTarget, clearElement } from "../generalFunctions/general.js";
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
    clearElement(userDetails);
    clearElement(userForms);
    showUserList();
    removeHide(usersList);
    addHide(userDetails);
    addHide(userForms);
    hideSpinner();
  }
};
