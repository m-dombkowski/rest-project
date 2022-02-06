import { selectingTarget } from "../generalFunctions/general.js";
import { addHide, hideSpinner, removeHide } from "../styleChanges.js";
import { showUserList } from "../users.js";
import { userDetails, userForms, usersList } from "../variables.js";

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
