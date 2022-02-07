import {
  commentsContainer,
  doubleParent,
} from "../generalFunctions/general.js";
import { addHide, removeHide } from "../generalFunctions/styleChanges.js";
import { postList, userForms } from "../generalFunctions/variables.js";
import {
  getPostID,
  getPostTitle,
  getUserPostObjects,
} from "../users/gettingUserData.js";
import { showPostComments } from "../users/showingUserData.js";
import { buildAddCommentForm } from "./createAddCommentForm.js";
import { createHtmlElement } from "./rendering.js";

export const buildPostList = function (data) {
  const postTitle = buildPostTitle(data);
  const postBody = buildPostBody(data);
  const postButton = buildAddCommentButton(data);
  const comments = buildCommentContainer();

  const postContainer = createHtmlElement("div", ["post-container"]);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(postButton);
  postContainer.appendChild(comments);

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
  const addCommentButton = createHtmlElement(
    "button",
    ["add-comment-button"],
    {},
    "Add Comment"
  );

  addCommentButton.addEventListener("click", function (event) {
    if (getPostTitle(event) === data.title) {
      console.log(data);
      buildAddCommentForm(data);
      addHide(postList);
      removeHide(userForms);
    }
  });

  const showCommentsButton = createHtmlElement(
    "button",
    ["show-comments-button"],
    {},
    "Show Comments"
  );

  showCommentsButton.addEventListener("click", function (event) {
    const postContainers = document.querySelectorAll(".post-container");
    postContainers.forEach((postContainer) => {
      addHide(postContainer);
      removeHide(doubleParent(event));
    });
    showPostComments(data, event);
  });

  const buttonContainer = createHtmlElement("div", ["button-container"]);

  buttonContainer.appendChild(showCommentsButton);
  buttonContainer.appendChild(addCommentButton);

  return buttonContainer;
};

const buildCommentContainer = function () {
  const commentContainer = createHtmlElement("div", ["all-comments-container"]);

  return commentContainer;
};
