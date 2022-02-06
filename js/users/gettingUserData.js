import {
  doubleParentChildren,
  loopForGettingUserID,
  loopForGettingUserName,
  tripleParentChildren,
} from "../generalFunctions/general.js";

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

export const getUserIDForEdit = function (data, event, className) {
  const usersArray = data.data;
  for (const user of usersArray) {
    console.log(user.id);
    if (user.name === getUserNameForEdit(event, className)) {
      return user.id;
    }
  }
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
