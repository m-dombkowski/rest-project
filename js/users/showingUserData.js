import { getPostComments, getUsers } from "../async/asyncApiCalls.js";
import { buildCommentContainer } from "../buildingHTML/createPostComment.js";
import { buildNoCommentsMessage } from "../buildingHTML/createPostsList.js";
import { printUsers, renderUserDetails } from "../buildingHTML/rendering.js";
import { clearElement } from "../generalFunctions/general.js";
import {
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import {
  usersList,
  BASE_URL,
  footer,
  userListSection,
} from "../generalFunctions/variables.js";
import { getUserIDForDetailsAndDelete } from "./gettingUserData.js";

export const showUserDetails = function (data, event) {
  const usersArray = data.data;

  usersArray.forEach((userObject) => {
    if (userObject.id == getUserIDForDetailsAndDelete(event)) {
      renderUserDetails(userObject);
    }
  });
};

export const showUserList = function () {
  showSpinner();
  removeHide(footer);
  getUsers(BASE_URL).then((data) => {
    removeHide(userListSection);
    clearElement(usersList);
    console.log(data);
    printUsers(data);
    hideSpinner();
  });
};

export const showPostComments = function (data, event, container) {
  showSpinner();
  getPostComments(BASE_URL, data.id).then((data) => {
    const commentObjectArray = data.data;
    if (commentObjectArray.length === 0) {
      buildNoCommentsMessage();
    }
    commentObjectArray.forEach((commentObject) => {
      buildCommentContainer(commentObject, event, container);
    });
    hideSpinner();
  });
};
