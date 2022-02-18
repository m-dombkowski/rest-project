import { getUserPosts, getUsers } from "../async/asyncApiCalls.js";
import { buildAddPostContainer } from "../buildingHTML/createPostForm.js";
import { renderEditUser, renderUserPosts } from "../buildingHTML/rendering.js";
import { selectingTarget } from "../generalFunctions/general.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import { getUserIDForEdit } from "../users/gettingUserData.js";

import {
  BASE_URL,
  postList,
  userDetails,
  userForms,
  userListSection,
} from "../generalFunctions/variables.js";

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
    removeHide(postList);
    removeHide(userListSection);
    showSpinner();
    getUsers(BASE_URL).then((data) => {
      getUserPosts(
        BASE_URL,
        getUserIDForEdit(data, event, "active-user-name")
      ).then((data) => {
        // removeHide(userForms);
        renderUserPosts(data, event);
        hideSpinner();
        console.log(data);
      });
    });
  }
};
