import { renderUser } from "./rendering.js";

export const printUsers = function (data) {
  const userArray = data.data;

  for (let i = 0; i < userArray.length; i++) {
    renderUser(userArray[i]);
  }
};
