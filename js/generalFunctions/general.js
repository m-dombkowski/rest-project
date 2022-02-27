import { userListSection } from "./variables.js";

export const selectingTarget = function (event) {
  const target = event.target;
  return target.classList;
};

export const singleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement;
  return parent.children;
};

export const doubleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  return parent.children;
};

export const doubleParent = function (event) {
  const target = event.target;
  return target.parentElement.parentElement;
};

export const tripleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement.parentElement;
  return parent.children;
};

export const tripleParent = function (event) {
  const target = event.target;
  return target.parentElement.parentElement.parentElement;
};

export const commentsContainer = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  const children = parent.children;

  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("all-comments-container")) {
      return children[i];
    }
  }
};

export const loopForGettingUserName = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].textContent;
    }
  }
};

export const loopForGettingUserID = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].id;
    }
  }
};

export const checkPostHeader = function () {
  const userListSectionChildren = userListSection.children;

  for (let i = 0; i < userListSectionChildren.length; i++) {
    if (
      userListSectionChildren[i].classList.contains(
        "post-list-header-container"
      )
    ) {
      userListSectionChildren[i].parentNode.removeChild(
        userListSectionChildren[i]
      );
    }
  }
};

export const clearElement = function (parentElement) {
  parentElement.innerHTML = "";
};

export const validateCreateEmailInput = function () {
  const email = document.getElementById("create-email").value;
  const email2 = document.getElementById("create-email");
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    alert("done");
    return true;
  } else {
    email2.style.border = "red solid 3px";
    return false;
  }
};

export const validateUsernameInput = function () {
  const userName = document.getElementById("create-name").value;

  const regex = /[a-zA-Z][a-zA-Z0-9-_]/;

  if (regex.test(userName)) {
    alert("git gud");
    return true;
  } else {
    alert("Username not valid");
    return false;
  }
};
