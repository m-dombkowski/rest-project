import { usersList } from "./variables.js";

export const renderUser = function (data) {
  let html = `
    <li class="user">
        <h2 class="user-name">${data.name}</h2>
        <button class="user-details" title="Check user details">
          <img class="details-icon" src="../svg/search-svg.svg"/>
        </button>
    </li>`;

  usersList.insertAdjacentHTML("beforeend", html);
};
