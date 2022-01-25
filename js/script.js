import { printUsers } from "./users.js";
import { btn1, btn, btn2, deleteU, testBody } from "./variables.js";
import {
  getUsers,
  getUserByID,
  createUser,
  deleteUser,
} from "./asyncApiCalls.js";

btn1.addEventListener("click", function () {
  getUserByID(3934).then((data) => console.log(data));
});

btn.addEventListener("click", function () {
  getUsers().then((data) => printUsers(data));
});

deleteU.addEventListener("click", function () {
  deleteUser(3931);
});

btn2.addEventListener("click", function () {
  createUser(testBody).then((data) => console.log(data.data.id));
});
