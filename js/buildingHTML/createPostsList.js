import {
  clearElement,
  commentsContainer,
  doubleParent,
  doubleParentChildren,
  loopForGettingUserName,
} from "../generalFunctions/general.js";
import {
  addHide,
  removeHide,
  showSpinner,
} from "../generalFunctions/styleChanges.js";
import {
  postList,
  userDetails,
  userForms,
  userListSection,
} from "../generalFunctions/variables.js";
import { getPostTitle } from "../users/gettingUserData.js";
import { showPostComments } from "../users/showingUserData.js";
import { buildAddCommentForm } from "./createAddCommentForm.js";
import { createHtmlElement } from "./rendering.js";

export const buildPostList = function (data) {
  // const goBackToDetailsButton = buildGoBackToDetailsButton();

  const postTitle = buildPostTitle(data);
  const postBody = buildPostBody(data);
  const postButton = buildCommentsButtons(data);
  const comments = buildCommentContainer();

  const postContainer = createHtmlElement("li", ["post-container"]);

  // userListSection.prepend(goBackToDetailsButton);
  postList.appendChild(postContainer);
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(postButton);
  postContainer.appendChild(comments);
};

export const buildPostListHeader = function (event) {
  const postListTitle = buildPostListTitle(event);
  const goBackButton = buildGoBackToDetailsButton();

  const headerContainer = createHtmlElement("div", [
    "post-list-header-container",
  ]);

  headerContainer.appendChild(postListTitle);
  headerContainer.appendChild(goBackButton);

  userListSection.prepend(headerContainer);
};

const buildPostListTitle = function (event) {
  const name = loopForGettingUserName(
    doubleParentChildren(event),
    "active-user-name"
  );

  const headerTitle = createHtmlElement(
    "p",
    ["post-list-header-title"],
    {},
    `${name}'s posts`
  );

  return headerTitle;
};

const buildGoBackToDetailsButton = function () {
  const goBackToDetailsButton = createHtmlElement(
    "button",
    ["go-back-to-details", "post"],
    { title: "Go Back" },
    "🠖"
  );

  goBackToDetailsButton.addEventListener("click", function () {
    const postListHeader = document.querySelector(
      ".post-list-header-container"
    );
    clearElement(postList);
    addHide(postList);
    removeHide(userDetails);
    postListHeader.parentNode.removeChild(postListHeader);
    // goBackToDetailsButton.parentNode.removeChild(goBackToDetailsButton);
    // userListSection.children[0].parentNode.removeChild(
    //   userListSection.children[0]
    // );
  });

  return goBackToDetailsButton;
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
    "💬"
  );

  showCommentsButton.addEventListener("click", function (event) {
    const postContainers = document.querySelectorAll(".post-container");
    const commentsButtons = document.querySelector(".button-container");
    showSpinner(commentsButtons);

    postContainers.forEach((postContainer) => {
      addHide(postContainer);
      removeHide(doubleParent(event));
      addHide(showCommentsButton);
    });

    const buttonsContainer = createHtmlElement("div", [
      "comments-buttons-container",
    ]);

    const goBackButton = createHtmlElement(
      "button",
      ["go-back-to-posts"],
      {},
      "🠖"
    );

    goBackButton.addEventListener("click", function (event) {
      const commentsContainers =
        document.querySelectorAll(".comment-container");

      const noCommentMessage = document.querySelector(".no-comment-message");

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
      if (noCommentMessage) {
        noCommentMessage.parentNode.removeChild(noCommentMessage);
      }

      buttonsContainer.parentNode.removeChild(buttonsContainer);
    });

    const addCommentButton = createHtmlElement(
      "button",
      ["add-comment-button"],
      {},
      "📝"
    );

    addCommentButton.addEventListener("click", function (event) {
      const commentsContainers =
        document.querySelectorAll(".comment-container");
      const noCommentMessage = document.querySelector(".no-comment-message");
      if (getPostTitle(event) === data.title) {
        commentsContainers.forEach((commentContainer) => {
          addHide(commentContainer);
        });
        addHide(userListSection);
        buildAddCommentForm(data);
        addHide(postList);
        removeHide(userForms);
        addHide(addCommentButton);
        addHide(goBackButton);
        if (noCommentMessage) {
          noCommentMessage.parentNode.removeChild(noCommentMessage);
        }
      }
    });

    showPostComments(data, event, commentsContainer(event));
    buttonsContainer.appendChild(goBackButton);
    buttonsContainer.appendChild(addCommentButton);

    doubleParent(event).appendChild(buttonsContainer);
  });

  const buttonContainer = createHtmlElement("div", ["button-container"]);

  buttonContainer.appendChild(showCommentsButton);

  return buttonContainer;
};

const buildCommentContainer = function () {
  const commentContainer = createHtmlElement("div", ["all-comments-container"]);

  return commentContainer;
};

export const buildNoCommentsMessage = function () {
  const allCommentsContainer = document.querySelector(
    ".all-comments-container"
  );

  const noCommentMessage = createHtmlElement(
    "p",
    ["no-comment-message"],
    {},
    "There are no comments yet! Click button bellow to add one 😉 !"
  );

  allCommentsContainer.appendChild(noCommentMessage);
};
