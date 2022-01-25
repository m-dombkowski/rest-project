import { getUserData, printUsers } from "./users.js";
import { btn1, btn, btn2, deleteU, testBody, BASE_URL } from "./variables.js";
import {
  getUsers,
  getUserByID,
  createUser,
  deleteUser,
} from "./asyncApiCalls.js";

btn1.addEventListener("click", function () {
  getUserByID(BASE_URL, 3934).then((data) => console.log(data));
});

btn.addEventListener("click", function () {
  getUsers(BASE_URL).then((data) => {
    printUsers(data);
  });
});

deleteU.addEventListener("click", function () {
  deleteUser(BASE_URL, 3931);
});

btn2.addEventListener("click", function () {
  createUser(BASE_URL, testBody).then((data) => console.log(data.data.id));
});

window.addEventListener("click", function (event) {
  getUsers(BASE_URL).then((data) => getUserData(data, event));
});
