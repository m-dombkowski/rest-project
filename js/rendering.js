import { userCreate, userDetails, usersList } from "./variables.js";

const renderUser = function (data) {
  let html = `
    <li class="user">
        <h2 class="user-name">${data.name}</h2>
        <div class="user-buttons">
          <button class="user-details" title="Check user details">
            <img class="details-icon" src="../svg/search-svg.svg"/>
          </button>
          <button class="delete-user" title="Delete user">
            <img class="close-icon" src="../svg/close1-svg.svg"/>
          </button>
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

export const renderCreateUser = function () {
  let html = `
    <form class="create-form">
      <div class="name-input">
        <label for="name">Name: </label></br>
        <input type="text" id="name" name="name" required size="10"> 
      </div>
      <div class="email-input">
        <label for="email">Email: </label></br>
        <input type="email" id="email" required size="10"> 
      </div>
      <div class="gender-select">
        <label for="gender">Gender: </label> </br>
        <select name="gender" id="gender" required>
          <option value="">--Please choose an option--</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div class="status-select">
        <label for="status">Status: </label> </br>
        <select name="status" id="status" required>
          <option value="">--Please choose an option--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <input type="submit" class="submit" value="Submit">
    </form>
  
  `;

  userCreate.insertAdjacentHTML("afterbegin", html);
};
