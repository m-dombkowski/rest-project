import { deleteUserREST, getUsers } from "./asyncApiCalls.js";
import { renderUserData, printUsers } from "./rendering.js";
import { capitalizeFirstLetters } from "./styleChanges.js";
import { BASE_URL, createForm, usersList } from "./variables.js";

export const showUserList = function () {
  getUsers(BASE_URL).then((data) => {
    usersList.innerHTML = "";
    printUsers(data);
  });
};

const loopForGettingUserName = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].textContent;
    }
  }
};

const getUserName = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement.parentElement;
  const children = parent.children;
  return loopForGettingUserName(children, "user-name");
};

export const showUserDetails = function (data, event) {
  const usersArray = data.data;
  usersArray.forEach((userObject) => {
    if (userObject.name === getUserName(event)) {
      renderUserData(userObject);
    }
  });
};

export const getUserNameForEdit = function (event, className) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  const children = parent.children;

  return loopForGettingUserName(children, className);
};

export const getUserIDForEdit = function (data, event) {
  const usersArray = data.data;
  for (const user of usersArray) {
    if (user.name === getUserNameForEdit(event, "current-user-name")) {
      return user.id;
    }
  }
};

export const deleteUser = function (data, event) {
  const target = event.target;
  const container = target.parentElement.parentElement.parentElement;
  const usersArray = data.data;
  usersArray.forEach((userObject) => {
    if (getUserName(event) === userObject.name) {
      deleteUserREST(BASE_URL, userObject.id);
    }
  });
  container.parentNode.removeChild(container);
};

export const createUserObject = function (className) {
  const name = document.querySelector(`#${className}-name`).value;
  const email = document.querySelector(`#${className}-email`).value;
  const gender = document.querySelector(`#${className}-gender`).value;
  const status = document.querySelector(`#${className}-status`).value;

  return {
    name: capitalizeFirstLetters(name),
    email: email,
    gender: gender,
    status: status,
  };
};
