import {
  commentsContainer,
  doubleParent,
} from "../generalFunctions/general.js";
import {
  addHide,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import { postList, userForms } from "../generalFunctions/variables.js";
import { getPostTitle } from "../users/gettingUserData.js";
import { showPostComments } from "../users/showingUserData.js";
import { buildAddCommentForm } from "./createAddCommentForm.js";
import { createHtmlElement } from "./rendering.js";

export const buildPostList = function (data) {
  const postTitle = buildPostTitle(data);
  const postBody = buildPostBody(data);
  const postButton = buildCommentsButtons(data);
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

export const buildCommentsButtons = function (data) {
  const showCommentsButton = createHtmlElement(
    "button",
    ["show-comments-button"],
    {},
    "Show Comments"
  );

  showCommentsButton.addEventListener("click", function (event) {
    const postContainers = document.querySelectorAll(".post-container");
    showSpinner();

    postContainers.forEach((postContainer) => {
      addHide(postContainer);
      removeHide(doubleParent(event));
      addHide(showCommentsButton);
    });

    const goBackButton = createHtmlElement(
      "button",
      ["go-back-to-posts"],
      {},
      "Go Back"
    );

    goBackButton.addEventListener("click", function (event) {
      const commentsContainers =
        document.querySelectorAll(".comment-container");
      event.preventDefault();
      addHide(goBackButton);
      removeHide(showCommentsButton);
      addHide(addCommentButton);

      commentsContainers.forEach((commentContainer) => {
        commentContainer.parentNode.removeChild(commentContainer);
      });

      postContainers.forEach((postContainer) => {
        removeHide(postContainer);
      });

      goBackButton.parentNode.removeChild(goBackButton);
      addCommentButton.parentNode.removeChild(addCommentButton);
    });

    const addCommentButton = createHtmlElement(
      "button",
      ["add-comment-button"],
      {},
      "Add Comment"
    );

    addCommentButton.addEventListener("click", function (event) {
      const commentsContainers =
        document.querySelectorAll(".comment-container");
      if (getPostTitle(event) === data.title) {
        commentsContainers.forEach((commentContainer) => {
          addHide(commentContainer);
        });
        console.log(data);
        buildAddCommentForm(data);
        addHide(postList);
        removeHide(userForms);
        addHide(addCommentButton);
        addHide(goBackButton);
      }
    });

    showPostComments(data, event, commentsContainer(event));
    doubleParent(event).appendChild(goBackButton);
    doubleParent(event).appendChild(addCommentButton);
  });

  const buttonContainer = createHtmlElement("div", ["button-container"]);

  buttonContainer.appendChild(showCommentsButton);

  return buttonContainer;
};

const buildCommentContainer = function () {
  const commentContainer = createHtmlElement("div", ["all-comments-container"]);

  return commentContainer;
};
