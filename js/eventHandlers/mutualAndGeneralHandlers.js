import { selectingTarget, clearElement } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
} from "../generalFunctions/styleChanges.js";
import { showUserList } from "../users/showingUserData.js";

import {
  responseMessageModal,
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

  if (selectingTarget(event).contains("go-back-create")) {
    clearElement(userForms);
    // showUserList();
    removeHide(usersList);
    addHide(userForms);
    hideSpinner();
  }
};

export const responseModalHandler = function (event) {
  const responseMessage = document.querySelector(".response-message");
  if (event.target == responseMessageModal) {
    responseMessage.parentNode.removeChild(responseMessage);
    responseMessageModal.style.display = "none";
  }
};
