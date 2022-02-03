import { createUserPost, getUsers } from "./asyncApiCalls.js";
import { addHide, removeHide } from "./styleChanges.js";
import {
  createUserPostObject,
  getUserIDForAddPost,
  getUserNameForEdit,
} from "./users.js";
import { BASE_URL, userDetails, userForms } from "./variables.js";

const createFormElement = function (
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

export const buildAddPostContainer = function (event, data) {
  const mainContainer = createFormElement("div", ["add-post-form-container"]);

  const formHeader = buildFormHeader(event);
  const form = buildForm(data);

  mainContainer.appendChild(formHeader);
  mainContainer.appendChild(form);

  userForms.appendChild(mainContainer);
};

const buildFormHeader = function (event) {
  const goBackButton = createFormElement(
    "button",
    ["go-back-to-details"],
    {},
    "Go Back"
  );

  goBackButton.addEventListener("click", function () {
    userForms.innerHTML = "";
    addHide(userForms);
    removeHide(userDetails);
  });

  const title = createFormElement(
    "h1",
    ["form-title"],
    {},
    `Add post as ${getUserNameForEdit(event, "active-user-name")}`
  );

  const titleContainer = createFormElement("div", ["form-title-container"]);

  titleContainer.appendChild(goBackButton);
  titleContainer.appendChild(title);

  return titleContainer;
};

const buildForm = function () {
  const form = createFormElement("form", ["add-post-form"]);
  const title = buildTitleInput();
  const message = buildMessageInput();
  const buttons = formButtons();

  form.appendChild(title);
  form.appendChild(message);
  form.appendChild(buttons);

  return form;
};

const buildTitleInput = function () {
  const titleInput = createFormElement(
    "input",
    ["add-post-title-input"],
    {
      placeholder: "Your post title",
      type: "text",
      required: true,
    },
    ""
  );
  const titleContainer = createFormElement("div", ["add-post-title-container"]);

  titleContainer.appendChild(titleInput);

  return titleContainer;
};

const buildMessageInput = function () {
  const messageInput = createFormElement(
    "input",
    ["add-post-message-input"],
    {
      placeholder: "Place for your message",
      type: "text",
      required: true,
    },
    ""
  );

  const messageContainer = createFormElement("div", [
    "add-post-message-container",
  ]);

  messageContainer.appendChild(messageInput);

  return messageContainer;
};

const formButtons = function () {
  const sendButton = createFormElement("input", ["submit-post-button"], {
    type: "submit",
    value: "Submit",
  });

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    getUsers(BASE_URL).then((data) => {
      createUserPost(
        BASE_URL,
        getUserIDForAddPost(data),
        createUserPostObject()
      ).then(() => {
        userForms.textContent = "";
        removeHide(userDetails);
        addHide(userForms);
      });
    });
  });

  const clearButton = createFormElement("input", ["clear-form-button"], {
    type: "reset",
    value: "Clear Form",
  });

  const buttonsContainer = createFormElement("div", ["form-buttons-container"]);

  buttonsContainer.appendChild(sendButton);
  buttonsContainer.appendChild(clearButton);

  return buttonsContainer;
};
