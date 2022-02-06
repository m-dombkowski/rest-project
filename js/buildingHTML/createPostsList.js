import { postList } from "../generalFunctions/variables.js";
import { getPostTitle } from "../users/gettingUserData.js";
import { buildAddCommentForm } from "./creteAddCommentForm.js";
import { createHtmlElement } from "./rendering.js";

export const buildPostList = function (data) {
  const postTitle = buildPostTitle(data);
  const postBody = buildPostBody(data);
  const postButton = buildAddCommentButton(data);

  const postContainer = createHtmlElement("div", ["post-container"]);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(postButton);

  postList.appendChild(postContainer);
};

const buildPostTitle = function (data) {
  const postTitle = createHtmlElement(
    "h1",
    ["post-title"],
    {},
    `${data.title}`
  );

  return postTitle;
};

const buildPostBody = function (data) {
  const postBody = createHtmlElement("p", ["post-body"], {}, `${data.body}`);

  const bodyContainer = createHtmlElement("div", ["post-body-container"]);

  bodyContainer.appendChild(postBody);

  return bodyContainer;
};

const buildAddCommentButton = function (data) {
  const button = createHtmlElement(
    "button",
    ["add-comment-button"],
    {},
    "Add Comment"
  );

  button.addEventListener("click", function (event) {
    if (getPostTitle(event) === data.title) {
      console.log(data);
      buildAddCommentForm();
    }
  });

  const buttonContainer = createHtmlElement("div", ["button-container"]);

  buttonContainer.appendChild(button);

  return buttonContainer;
};
