import { createUser, getUsers } from "./asyncApiCalls.js";
import { printUsers } from "./rendering.js";
import { addHide, removeHide, toggleHide } from "./styleChanges.js";
import {
  createUserObject,
  deleteUser,
  showUserDetails,
  showUserList,
} from "./users.js";
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
  if (event.target.classList.contains("close-icon")) {
    getUsers(BASE_URL).then((data) => {
      deleteUser(data, event);
    });
  }
  if (event.target.classList.contains("submit")) {
    event.preventDefault();
    createUser(BASE_URL, createUserObject()).then((data) => console.log(data));
  }
};
