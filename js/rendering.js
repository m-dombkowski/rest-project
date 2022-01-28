import { userDetails, usersList } from "./variables.js";

const renderUser = function (data) {
  let html = `
    <li class="user">
        <h2 class="user-name">${data.name}</h2>
        <div class="user-buttons">
        <button class="user-details" title="Check user details">
          <img class="details-icon" src="../svg/search-svg.svg"/>
        </button>
        <button class="delete-user">x</button>
        </div>
    </li>`;

  usersList.insertAdjacentHTML("beforeend", html);
};

export const printUsers = function (data) {
  const userArray = data.data;
  for (let i = 0; i < userArray.length; i++) {
    renderUser(userArray[i]);
  }
};

export const renderUserData = function (data) {
  let html = `<div class="detailed-user-info">
  <div class="details-buttons">
  <button class="go-back-to-main">Go Back</button>
  </div>
    <h2 class="active-user-name">${data.name}</h2>
    <p class="active-user-email">E-mail: ${data.email}</p>
    <p class="active-user-gender">Gender: ${data.gender}</p>
    <p class="active-user-status">Status: ${data.status}</p>
  </div>
  `;

  userDetails.insertAdjacentHTML("afterbegin", html);
};
