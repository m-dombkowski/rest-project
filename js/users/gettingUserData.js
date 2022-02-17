import { displayResponseMessage } from "../buildingHTML/rendering.js";
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

  for (const user of usersArray) {
    if (user.name === userName) {
      return user.id;
    }
  }
};

export const getUserIDForEdit = function (data, event, className) {
  const usersArray = data.data;
  for (const user of usersArray) {
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

export const getUserIDForDetailsAndDelete = function (event) {
  return loopForGettingUserID(tripleParentChildren(event), "user-id");
};

export const getUserIDForDelete = function (event) {
  return loopForGettingUserID(doubleParentChildren(event), "user-id");
};

export const getUserPostObjects = function (data) {
  const postObjectsArray = data.data;

  let postsArray = [];
  if (postObjectsArray.length === 0) {
    displayResponseMessage(`User haven't posted anything yet!`);
    return postObjectsArray;
  }
  for (let i = 0; i < postObjectsArray.length; i++) {
    postsArray.push(postObjectsArray[i]);
  }
  return postsArray;
};

export const getPostID = function (data) {
  const objectArray = getUserPostObjects(data);
  let idArray = [];
  objectArray.forEach((postObject) => {
    idArray.push(postObject.id);
  });

  return idArray;
};

export const getComments = function (data) {
  const commentsArray = data.data;
  for (const commentObject of commentsArray) {
    return commentObject;
  }
};
