import { getUsers } from "./asyncApiCalls.js";

import { addHide, removeHide, toggleHide } from "./styleChanges.js";
import { deleteUser, showUserDetails, showUserList } from "./users.js";
import { BASE_URL, userDetails, usersList } from "./variables.js";

export const windowHandler = function (event) {
  if (event.target.classList.contains("details-icon")) {
    getUsers(BASE_URL).then((data) => {
      showUserDetails(data, event);
      addHide(usersList);
      removeHide(userDetails);
    });
  }
  if (event.target.classList.contains("go-back-to-main")) {
    userDetails.innerHTML = "";
    toggleHide(usersList);
    toggleHide(userDetails);
  }
  if (event.target.classList.contains("delete-user")) {
    showUserList();
    getUsers(BASE_URL).then((data) => deleteUser(data, event));
    toggleHide(usersList);
    userDetails.innerHTML = "";
  }
};
