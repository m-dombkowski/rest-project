import {
  getUserNameForEdit,
  getUserPostObjects,
} from "../users/gettingUserData.js";
import {
  userForms,
  userDetails,
  usersList,
  responseMessageModal,
} from "../generalFunctions/variables.js";
import { buildPostList, buildPostListHeader } from "./createPostsList.js";

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
          <button class="user-details" id=${userObject.id}" title="Check user details">
            <p class="details-icon">📖</p>
          </button>
          <button class="delete-user" title="Delete user">&#10008;</button>
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
     <button class="go-back" title="Go Back">&#129046</button>
     <button class="edit-user" title="Edit User Information">&#x270E</button>
     </div>
    <h2 class="active-user-name">${data.name}</h2>
    <p class="active-user-email">E-mail: ${data.email}</p>
    <p class="active-user-gender">Gender: ${data.gender}</p>
    <p class="active-user-status">Status: ${data.status}</p>
    <div class="posts">
      <button class="add-post" title="Add Post">+</button>
      <button class="get-user-posts" title="Show user posts">	
      &#128366;</button>
    </div>    
  </div>  `;

  userDetails.insertAdjacentHTML("afterbegin", html);
};

export const renderCreateUser = function () {
  let html = `
      
     
      <form class="create-form"> 
        <button class="go-back-create" title="Go Back">&#129046</button>  
        <div class="create-form-title-container">
          <p class="create-form-title">Create your own user! </br> Please, fill all of the boxes</p>
        </div> 
        <div class="name-input">        
          <label for="name" class="create-name-label">Name: </label>
          <input type="text" id="create-name" name="name" placeholder="Your username" required size="10"> 
        </div>
        <div class="email-input">
          <label for="email" class='create-email-label'>Email: </label>       
          <input type="email" id="create-email" placeholder="Your email address" required size="10"> 
        </div>
        <div class="gender-select"> 
          <label for="gender" class='create-gender-label'>Gender: </label>      
          <select name="gender" id="create-gender" required>
            <option value="">Please choose an option</option>
            <option value="female">Female &#9792</option>
            <option value="male">Male &#9794</option>
          </select>
        </div>
        <div class="status-select"> 
          <label for="status" class='create-status-label'>Status: </label>        
          <select name="status" id="create-status" required>
            <option value="">Please choose an option</option>
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
  <form class="edit-form">  
  <button class='go-back-to-details'>&#129046</button>
      <p class="edit-user-title">Current user: </p> 
      <h2 class="current-user-name">${getUserNameForEdit(
        event,
        "active-user-name"
      )}</h2>    
    <div class="name-input">
      <label class="edit-name-label" for="name">Name: </label></br>
      <input type="text" placeholder="Your username" id="edit-name" name="name" required size="10"> 
    </div>
    <div class="email-input">
      <label class="edit-email-label" for="email">Email: </label></br>
      <input type="email" placeholder="Your email" id="edit-email" required size="10"> 
    </div>
    <div class="gender-select">
      <label class="edit-gender-label" for="gender">Gender: </label> </br>
      <select name="gender" id="edit-gender" required>
        <option value="">--Please choose an option--</option>
        <option value="female">Female &#9792</option>
        <option value="male">Male &#9794</option>
      </select>
    </div>
    <div class="status-select">
      <label class="edit-status-label" for="status">Status: </label> </br>
      <select name="status" id="edit-status" required>
        <option value="">--Please choose an option--</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <div class="submit-container">
      <input type="submit" class="edit-submit" value="Edit">
    </div>
  </form>
  `;

  userForms.insertAdjacentHTML("afterbegin", html);
};

export const renderUserPosts = function (data, event) {
  getUserPostObjects(data).forEach((postObject) => {
    buildPostList(postObject);
  });
  buildPostListHeader(event);
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
