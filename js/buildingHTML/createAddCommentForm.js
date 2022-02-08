import { createUserComment, getPostComments } from "../async/asyncApiCalls.js";
import {
  addHide,
  hideSpinner,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import {
  BASE_URL,
  postList,
  userForms,
} from "../generalFunctions/variables.js";
import { createUserCommentObject } from "../users/creatingUser.js";
import { showPostComments } from "../users/showingUserData.js";

import { buildCommentContainer } from "./createPostComment.js";
import { createHtmlElement } from "./rendering.js";

const goBackToPosts = document.querySelector(".go-back-to-posts");
const addCommentButton = document.querySelector(".add-comment-button");
const allCommentsContainer = document.querySelector(".all-comments-container");

export const buildAddCommentForm = function (data) {
  const goBackButton = createButton(data);
  const nameInput = createCommentNameInput();
  const emailInput = createCommentEmailInput();
  const messageInput = createCommentMessageInput();
  const submitButton = createCommentSubmitButton(data);

  const addCommentForm = createHtmlElement("form", ["add-comment-form"]);

  addCommentForm.appendChild(goBackButton);
  addCommentForm.appendChild(nameInput);
  addCommentForm.appendChild(emailInput);
  addCommentForm.appendChild(messageInput);
  addCommentForm.appendChild(submitButton);

  userForms.appendChild(addCommentForm);
};

const createButton = function (data) {
  const goBackToPosts = document.querySelector(".go-back-to-posts");
  const allCommentsContainer = document.querySelector(
    ".all-comments-container"
  );
  const addCommentButton = document.querySelector(".add-comment-button");
  const goBackButton = createHtmlElement(
    "button",
    ["go-back-comment"],
    {},
    "Go Back"
  );

  goBackButton.addEventListener("click", function (event) {
    showSpinner();
    userForms.innerHTML = "";
    event.preventDefault();
    removeHide(postList);
    addHide(userForms);
    removeHide(goBackToPosts);
    removeHide(addCommentButton);
    showPostComments(data, event, allCommentsContainer);
  });

  const btnContainer = createHtmlElement("div", ["go-back-btn-container"]);

  btnContainer.appendChild(goBackButton);
  return btnContainer;
};

const createCommentNameInput = function () {
  const userNameInput = createHtmlElement("input", ["add-comment-name-input"], {
    placeholder: "Your name",
    type: "text",
  });

  const userNameInputContainer = createHtmlElement("div", [
    "add-comment-name-input-container",
  ]);
  userNameInputContainer.appendChild(userNameInput);

  return userNameInputContainer;
};

const createCommentEmailInput = function () {
  const userEmailInput = createHtmlElement(
    "input",
    ["add-comment-email-input"],
    { placeholder: "Your email address", type: "email" }
  );

  const userEmailInputContainer = createHtmlElement("div", [
    "add-comment-email-input-container",
  ]);

  userEmailInputContainer.appendChild(userEmailInput);

  return userEmailInputContainer;
};

const createCommentMessageInput = function () {
  const userMessageInput = createHtmlElement(
    "input",
    ["add-comment-message-input"],
    { placeholder: "Your message", type: "text" }
  );

  const userMessageInputContainer = createHtmlElement("div", [
    "add-comment-message-input-container",
  ]);

  userMessageInputContainer.appendChild(userMessageInput);
  return userMessageInputContainer;
};

const createCommentSubmitButton = function (data) {
  const goBackToPosts = document.querySelector(".go-back-to-posts");
  const addCommentButton = document.querySelector(".add-comment-button");
  const allCommentsContainer = document.querySelector(
    ".all-comments-container"
  );
  const submitButton = createHtmlElement("input", ["add-comment-submit"], {
    type: "submit",
    value: "Submit",
  });

  submitButton.addEventListener("click", function (event) {
    showSpinner();
    event.preventDefault();
    console.log(data.id);
    createUserComment(BASE_URL, data.id, createUserCommentObject()).then(() => {
      userForms.innerHTML = "";
      removeHide(postList);
      addHide(userForms);
      removeHide(goBackToPosts);
      removeHide(addCommentButton);
      showPostComments(data, event, allCommentsContainer);
      // getPostComments(BASE_URL, data.id).then((data) => {
      //   const commentObjectArray = data.data;
      //   commentObjectArray.forEach((commentObject) => {
      //     buildCommentContainer(commentObject, event, allCommentsContainer);
      //   });
      //   hideSpinner();
      // });
    });
  });

  return submitButton;
};
