import { getUsers } from "../async/asyncApiCalls.js";
import { printUsers, renderUserDetails } from "../building/rendering.js";
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
  spinner.removeAttribute("hidden");
  getUsers(BASE_URL).then((data) => {
    console.log(data);
    spinner.setAttribute("hidden", "");
    usersList.innerHTML = "";
    printUsers(data);
  });
};
