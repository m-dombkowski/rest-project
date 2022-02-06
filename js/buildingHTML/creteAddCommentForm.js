import { userForms } from "../generalFunctions/variables.js";
import { createHtmlElement } from "./rendering.js";

export const buildAddCommentForm = function () {
  const goBackButton = createButton();
  const nameInput = createCommentNameInput();
  const emailInput = createCommentEmailInput();
  const messageInput = createCommentMessageInput();
  const submitButton = createCommentSubmitButton();

  const addCommentForm = createHtmlElement("form", ["add-comment-form"]);

  addCommentForm.appendChild(goBackButton);
  addCommentForm.appendChild(nameInput);
  addCommentForm.appendChild(emailInput);
  addCommentForm.appendChild(messageInput);
  addCommentForm.appendChild(submitButton);

  userForms.appendChild(addCommentForm);
};

const createButton = function () {
  const goBackButton = createHtmlElement("button", ["go-back"], {}, "Go Back");

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

  return userEmailInput;
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

const createCommentSubmitButton = function () {
  const submitButton = createHtmlElement("input", ["add-comment-submit"], {
    type: "submit",
    value: "Submit",
  });

  return submitButton;
};
