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
  detailsContainer,
  detailsSection,
  footer,
} from "../generalFunctions/variables.js";
import {
  createHtmlElement,
  displayResponseMessage,
} from "../buildingHTML/rendering.js";

export const userListHandler = function (event) {
  if (selectingTarget(event).contains("details-icon")) {
    addHide(usersList);
    addHide(footer);
    showSpinner();
    getUsers(BASE_URL).then((data) => {
      spinner.setAttribute("hidden", "");
      showUserDetails(data, event);
      hideSpinner();
      addHide(userForms);
      removeHide(userDetails);
      addHide(postList);
      removeHide(detailsContainer);
      removeHide(detailsSection);
    });
  }

  if (selectingTarget(event).contains("delete-user")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
};

export const handleNoPosts = function () {
  displayResponseMessage(`User haven't posted anything yet!`);
  const goBackToDetailsButton = createHtmlElement(
    "button",
    ["go-back-to-details"],
    {},
    "Go Back"
  );

  goBackToDetailsButton.addEventListener("click", function () {
    removeHide(userDetails);
    addHide(postList);
    goBackToDetailsButton.parentNode.removeChild(goBackToDetailsButton);
  });

  // goBackToDetailsButton.append(userListSection);
  postList.append(goBackToDetailsButton);
};
