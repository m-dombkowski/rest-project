import { deleteUserREST, getUsers } from "./asyncApiCalls.js";
import { renderUserData, printUsers } from "./rendering.js";
import { BASE_URL, usersList } from "./variables.js";

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
  const userArray = data.data;
  userArray.forEach((userObject) => {
    if (userObject.name === getUserName(event)) {
      renderUserData(userObject);
    }
  });
};

export const deleteUser = function (data, event) {
  const target = event.target;
  const container = target.parentElement.parentElement.parentElement;
  console.log(container);
  const userArray = data.data;
  userArray.forEach((userObject) => {
    if (getUserName(event) === userObject.name) {
      deleteUserREST(BASE_URL, userObject.id);
    }
  });
  container.parentNode.removeChild(container);
};

export const showUserList = function () {
  getUsers(BASE_URL).then((data) => {
    usersList.innerHTML = "";
    printUsers(data);
  });
};

export const createUserObject = function () {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const gender = document.querySelector("#gender").value;
  const status = document.querySelector("#status").value;

  return {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };
};
