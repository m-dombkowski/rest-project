import { deleteUserREST, getUsers } from "./async/asyncApiCalls.js";
import {
  loopForGettingUserName,
  loopForGettingUserID,
  tripleParentChildren,
  doubleParentChildren,
  tripleParent,
} from "./generalFunctions/general.js";
import { printUsers, renderUserDetails } from "./building/rendering.js";
import { capitalizeFirstLetters } from "./styleChanges.js";
import { BASE_URL, usersList } from "./variables.js";

export const showUserList = function () {
  spinner.removeAttribute("hidden");
  getUsers(BASE_URL).then((data) => {
    console.log(data);
    spinner.setAttribute("hidden", "");
    usersList.innerHTML = "";
    printUsers(data);
  });
};

export const showUserDetails = function (data, event) {
  const usersArray = data.data;

  usersArray.forEach((userObject) => {
    if (userObject.id == getUserIDForDetailsAndDelete(event)) {
      renderUserDetails(userObject);
    }
  });
};

export const getUserNameForEdit = function (event, className) {
  return loopForGettingUserName(doubleParentChildren(event), className);
};

const getUserName = function (event) {
  return loopForGettingUserName(tripleParentChildren(event), "user-name");
};

export const getUserIDForDetailsAndDelete = function (event) {
  return loopForGettingUserID(tripleParentChildren(event), "user-id");
};

export const getUserIDForEdit = function (data, event, className) {
  const usersArray = data.data;
  for (const user of usersArray) {
    console.log(user.id);
    if (user.name === getUserNameForEdit(event, className)) {
      return user.id;
    }
  }
};

export const getUserIDForAddPost = function (data) {
  const titleString = document.querySelector(".form-title").textContent;
  const userName = titleString.split(" ").slice(3).join(" ");
  const usersArray = data.data;
  console.log(usersArray);
  for (const user of usersArray) {
    if (user.name === userName) {
      return user.id;
    }
  }
};

export const deleteUser = function (data, event) {
  const container = tripleParent(event);
  const usersArray = data.data;
  usersArray.forEach((userObject) => {
    if (getUserIDForDetailsAndDelete(event) == userObject.id) {
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

export const createUserPostObject = function () {
  const titleString = document.querySelector(".form-title").textContent;
  const userName = titleString.split(" ").slice(3).join(" ");
  const title = document.querySelector(".add-post-title-input").value;
  const message = document.querySelector(".add-post-message-input").value;
  return {
    name: userName,
    title: title,
    body: message,
  };
};
