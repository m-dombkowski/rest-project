import { getPostComments, getUsers } from "../async/asyncApiCalls.js";
import { buildCommentContainer } from "../buildingHTML/createPostComment.js";
import { printUsers, renderUserDetails } from "../buildingHTML/rendering.js";
import { clearElement } from "../generalFunctions/general.js";
import { hideSpinner, showSpinner } from "../generalFunctions/styleChanges.js";
import { spinner, usersList, BASE_URL } from "../generalFunctions/variables.js";
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
  getUsers(BASE_URL).then((data) => {
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
    commentObjectArray.forEach((commentObject) => {
      buildCommentContainer(commentObject, event, container);
    });
    hideSpinner();
  });
};
