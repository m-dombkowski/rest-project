import { deleteUserREST, getUsers } from "./asyncApiCalls.js";
import { renderUserData, printUsers } from "./rendering.js";
import { BASE_URL, usersList } from "./variables.js";

const getUserName = function (event, className) {
  const target = event.target;
  const grandParentElement = target.parentElement.parentElement;
  const children = grandParentElement.children;

  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains(`${className}`)) {
      return children[i].textContent;
    }
  }
};

export const showUserDetails = function (data, event) {
  const userArray = data.data;
  userArray.forEach((userObject) => {
    if (userObject.name === getUserName(event, "user-name")) {
      renderUserData(userObject);
    }
  });
};

export const deleteUser = function (data, event) {
  const userArray = data.data;

  userArray.forEach((userObject) => {
    if (getUserName(event, "active-user-name") === userObject.name) {
      deleteUserREST(BASE_URL, userObject.id);
    }
  });
};

export const showUserList = function () {
  getUsers(BASE_URL).then((data) => {
    usersList.innerHTML = "";
    printUsers(data);
  });
};
