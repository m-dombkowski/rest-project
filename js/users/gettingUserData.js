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

export const getPostTitle = function (event) {
  return loopForGettingUserName(doubleParentChildren(event), "post-title");
};

const getUserName = function (event) {
  return loopForGettingUserName(tripleParentChildren(event), "user-name");
};

export const getUserIDForDetailsAndDelete = function (event) {
  return loopForGettingUserID(tripleParentChildren(event), "user-id");
};

export const getUserPostObjects = function (data) {
  const postObjectsArray = data.data;
  let postsArray = [];

  for (let i = 0; i < postObjectsArray.length; i++) {
    postsArray.push(postObjectsArray[i]);
  }
  console.log(postsArray);
  return postsArray;
};

export const getPostID = function (data) {
  getUserPostObjects(data).forEach((userObject) => {
    return userObject.id;
  });
};
