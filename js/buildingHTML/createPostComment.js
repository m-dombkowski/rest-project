import {
  commentsContainer,
  doubleParent,
} from "../generalFunctions/general.js";
import { capitalizeFirstLetters } from "../generalFunctions/styleChanges.js";
import { createHtmlElement } from "./rendering.js";

export const buildCommentContainer = function (data, event, container) {
  const commentName = buildCommentName(data);
  const commentText = buildCommentText(data);

  const commentContainer = createHtmlElement("div", ["comment-container"]);

  commentContainer.appendChild(commentName);
  commentContainer.appendChild(commentText);

  const allCommentsContainer = container;
  allCommentsContainer.appendChild(commentContainer);
};

const buildCommentName = function (data) {
  const name = createHtmlElement(
    "h2",
    ["comment-name"],
    {},
    `${capitalizeFirstLetters(data.name)}`
  );

  const nameContainer = createHtmlElement("div", ["comment-name-container"]);

  nameContainer.appendChild(name);

  return nameContainer;
};

const buildCommentText = function (data) {
  const commentText = createHtmlElement(
    "p",
    ["comment-text"],
    {},
    `${data.body}`
  );

  const commentTextContainer = createHtmlElement("div", [
    "comment-text-container",
  ]);

  commentTextContainer.appendChild(commentText);

  return commentTextContainer;
};
