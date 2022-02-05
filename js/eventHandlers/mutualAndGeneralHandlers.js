import { addHide, hideSpinner, removeHide } from "../styleChanges.js";
import { showUserList } from "../users.js";
import { userDetails, userForms, usersList } from "../variables.js";

export const selectingTarget = function (event) {
  const target = event.target;
  return target.classList;
};

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
