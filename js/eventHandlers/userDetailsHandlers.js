import {
  getPostComments,
  getUserPosts,
  getUsers,
} from "../async/asyncApiCalls.js";
import { buildAddPostContainer } from "../buildingHTML/createPostForm.js";
import { renderEditUser, renderUserPosts } from "../buildingHTML/rendering.js";
import { selectingTarget } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import {
  getComments,
  getPostID,
  getUserIDForEdit,
  getUserPostObjects,
} from "../users/gettingUserData.js";

import {
  BASE_URL,
  postList,
  userDetails,
  userForms,
} from "../generalFunctions/variables.js";
import { showPostComments } from "../users/showingUserData.js";

export const userDetailsHandler = function (event) {
  if (selectingTarget(event).contains("edit-user")) {
    addHide(userDetails);
    removeHide(userForms);
    renderEditUser(event);
  }

  if (selectingTarget(event).contains("add-post")) {
    event.preventDefault();
    removeHide(userForms);
    addHide(userDetails);
    buildAddPostContainer(event);
  }

  if (selectingTarget(event).contains("get-user-posts")) {
    addHide(userDetails);
    showSpinner();
    getUsers(BASE_URL).then((data) => {
      getUserPosts(
        BASE_URL,
        getUserIDForEdit(data, event, "active-user-name")
      ).then((data) => {
        removeHide(userForms);
        removeHide(postList);
        renderUserPosts(data);
        hideSpinner();
      });
    });
  }
};
