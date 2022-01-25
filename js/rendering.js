import { usersList } from "./variables.js";

export const renderUser = function (data) {
  let html = `
    <li class="user">
        <h2 class="user-name">${data.name}</h2>
        <p class="user-email">${data.email}</p>
        <p class="user-gender">${data.gender}</p>
        <p class="user-status">${data.status}</p>
    </li>`;

  usersList.insertAdjacentHTML("beforeend", html);
};
