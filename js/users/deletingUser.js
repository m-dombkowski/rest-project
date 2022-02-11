import { deleteUserREST } from "../async/asyncApiCalls.js";
import { doubleParent } from "../generalFunctions/general.js";
import { BASE_URL } from "../generalFunctions/variables.js";
import { getUserIDForDelete } from "./gettingUserData.js";

export const deleteUser = function (data, event) {
  const container = doubleParent(event);
  const usersArray = data.data;
  usersArray.forEach((userObject) => {
    if (getUserIDForDelete(event) == userObject.id) {
      deleteUserREST(BASE_URL, userObject.id);
    }
  });
  container.parentNode.removeChild(container);
};
