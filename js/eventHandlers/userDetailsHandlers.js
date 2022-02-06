import { getUserPosts, getUsers } from "../async/asyncApiCalls.js";
import { buildAddPostContainer } from "../building/createPostForm.js";
import { renderEditUser } from "../building/rendering.js";
import { selectingTarget } from "../generalFunctions/general.js";
import { addHide, removeHide } from "../generalFunctions/styleChanges.js";
import { getUserIDForEdit } from "../users/gettingUserData.js";

import {
  BASE_URL,
  userDetails,
  userForms,
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
    console.log("test");
    getUsers(BASE_URL).then((data) => {
      getUserPosts(
        BASE_URL,
        getUserIDForEdit(data, event, "active-user-name")
      ).then((data) => {
        console.log(data);
      });
    });
  }
};
