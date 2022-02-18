import { createUserComment } from "../async/asyncApiCalls.js";
import { checkPostHeader, clearElement } from "../generalFunctions/general.js";
import { addHide, removeHide } from "../generalFunctions/styleChanges.js";
import {
  BASE_URL,
  postList,
  userDetails,
  userForms,
  userListSection,
} from "../generalFunctions/variables.js";
import { createUserCommentObject } from "../users/creatingUserObjects.js";
import { showPostComments } from "../users/showingUserData.js";

import { createHtmlElement } from "./rendering.js";

export const buildAddCommentForm = function (data) {
  const formTitle = createFormTitle();
  const goBackButton = createButton(data);
  const nameInput = createCommentNameInput();
  const emailInput = createCommentEmailInput();
  const messageInput = createCommentMessageInput();
  const submitButton = createCommentSubmitButton(data);

  const addCommentForm = createHtmlElement("form", ["add-comment-form"], {
    alt: "background image of a mountain with forrest at it's feet",
  });

  addCommentForm.appendChild(formTitle);
  addCommentForm.appendChild(goBackButton);
  addCommentForm.appendChild(nameInput);
  addCommentForm.appendChild(emailInput);
  addCommentForm.appendChild(messageInput);
  addCommentForm.appendChild(submitButton);

  userForms.appendChild(addCommentForm);
};

const createFormTitle = function () {
  const title = createHtmlElement(
    "h1",
    ["create-comment-form-title"],
    {},
    `Create Comment!`
  );
  const instruction = createHtmlElement(
    "p",
    ["create-comment-form-title-instruction"],
    {},
    "Please fill all of the boxes."
  );
  const titleContainer = createHtmlElement("div", [
    "create-comment-form-title-container",
  ]);

  titleContainer.appendChild(title);
  titleContainer.appendChild(instruction);

  return titleContainer;
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
    "🠖"
  );

  goBackButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearElement(userForms);
    removeHide(postList);
    addHide(userForms);
    removeHide(goBackToPosts);
    removeHide(addCommentButton);
    removeHide(userListSection);
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
    "textarea",
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
    value: "Add Comment!",
  });

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    createUserComment(BASE_URL, data.id, createUserCommentObject()).then(() => {
      clearElement(userForms);
      clearElement(postList);
      checkPostHeader();
      removeHide(userDetails);
      addHide(userForms);
    });
  });

  return submitButton;
};
