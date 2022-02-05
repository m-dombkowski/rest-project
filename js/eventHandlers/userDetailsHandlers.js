import { getUserPosts, getUsers } from "../async/asyncApiCalls.js";
import { buildAddPostContainer } from "../createPostForm.js";
import { renderEditUser } from "../rendering.js";
import { addHide, removeHide } from "../styleChanges.js";
import { getUserIDForEdit } from "../users.js";
import { BASE_URL, userDetails, userForms } from "../variables.js";
import { selectingTarget } from "./mutualAndGeneralHandlers.js";

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
