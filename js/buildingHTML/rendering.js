import {
  getComments,
  getUserNameForEdit,
  getUserPostObjects,
} from "../users/gettingUserData.js";
import {
  userForms,
  userDetails,
  usersList,
  responseMessageModal,
  postList,
} from "../generalFunctions/variables.js";
import {
  buildGoBackToDetailsButton,
  buildPostList,
} from "./createPostsList.js";

export const createHtmlElement = function (
  type,
  classList = [],
  attributes = {},
  textContent = ""
) {
  const element = document.createElement(type);
  if (classList.length > 0) {
    element.classList.add(...classList);
  }
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  if (typeof textContent === "string" && textContent !== "") {
    element.textContent = textContent;
  }
  return element;
};

const renderUser = function (userObject) {
  let html = `
    <li class="user">
        <h2 class="user-name">${userObject.name}</h2>
        <div class=user-id id=${userObject.id}></div>
        <div class="user-buttons">
          <button class="user-details id=${userObject.id}" title="Check user details">
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

export const renderUserDetails = function (data) {
  let html = `
  <div class="detailed-user-info">
    <div class="details-buttons">
      <button class="edit-user">Edit user info</button>
      <button class="go-back">Go Back</button>
    </div>
    <h2 class="active-user-name">${data.name}</h2>
    <p class="active-user-email">E-mail: ${data.email}</p>
    <p class="active-user-gender">Gender: ${data.gender}</p>
    <p class="active-user-status">Status: ${data.status}</p>
    <div class="posts">
      <button class="add-post">Add Post</button>
      <button class="get-user-posts">Get User Posts</button>
    </div>
  </div>  `;

  userDetails.insertAdjacentHTML("afterbegin", html);
};

export const renderCreateUser = function () {
  let html = `
      <button class="go-back-create" title="Go Back">&#129044</button>  
      <div class="create-form-title-container">
        <p class="create-form-title">Create User Form. </br> Please, fill all of the boxes</p>
      </div> 
      <form class="create-form"> 
        <div class="name-input">        
          <label for="name" class="create-name-label">Name: </label></br>  
          <input type="text" id="create-name" name="name" placeholder="Your username" required size="10"> 
        </div>
        <div class="email-input">
          <label for="email" class='create-email-label'>Email: </label></br>         
          <input type="email" id="create-email" placeholder="Your email address" required size="10"> 
        </div>
        <div class="gender-select"> 
          <label for="gender" class='create-gender-label'>Gender: </label> </br>       
          <select name="gender" id="create-gender" required>
            <option value="">--Please choose an option--</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div class="status-select"> 
          <label for="status" class='create-status-label'>Status: </label>        
          <select name="status" id="create-status" required>
            <option value="">--Please choose an option--</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <input type="submit" class="submit" value="Create User">
      </form>
   
  `;
  //
  //
  //
  //  </br>
  userForms.insertAdjacentHTML("afterbegin", html);
};

export const renderEditUser = function (event) {
  let html = `
  <button class='go-back-to-details'>Go Back</button>
  <form class="edit-form">  
      <p class="edit-user-title">Current user: </p> 
      <h2 class="current-user-name">${getUserNameForEdit(
        event,
        "active-user-name"
      )}</h2>    
    <div class="name-input">
      <label for="name">Name: </label></br>
      <input type="text" id="edit-name" name="name" required size="10"> 
    </div>
    <div class="email-input">
      <label for="email">Email: </label></br>
      <input type="email" id="edit-email" required size="10"> 
    </div>
    <div class="gender-select">
      <label for="gender">Gender: </label> </br>
      <select name="gender" id="edit-gender" required>
        <option value="">--Please choose an option--</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
    <div class="status-select">
      <label for="status">Status: </label> </br>
      <select name="status" id="edit-status" required>
        <option value="">--Please choose an option--</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <div class="submit-container">
      <input type="submit" class="edit-submit" value="Edit Information">
    </div>
  </form>
  `;

  userForms.insertAdjacentHTML("afterbegin", html);
};

export const renderUserPosts = function (data) {
  getUserPostObjects(data).forEach((postObject) => {
    buildPostList(postObject);
  });
  buildGoBackToDetailsButton();
};

export const displayResponseMessage = function (message) {
  const responseMessage = createHtmlElement(
    "p",
    ["response-message"],
    {},
    `${message}`
  );

  responseMessageModal.style.display = "block";
  responseMessageModal.appendChild(responseMessage);
};
