import { deleteUserREST } from "../async/asyncApiCalls.js";
import { tripleParent } from "../generalFunctions/general.js";
import { BASE_URL } from "../generalFunctions/variables.js";
import { getUserIDForDetailsAndDelete } from "./gettingUserData.js";

export const deleteUser = function (data, event) {
  const container = tripleParent(event);
  const usersArray = data.data;
  usersArray.forEach((userObject) => {
    if (getUserIDForDetailsAndDelete(event) == userObject.id) {
      deleteUserREST(BASE_URL, userObject.id);
    }
  });
  container.parentNode.removeChild(container);
};
