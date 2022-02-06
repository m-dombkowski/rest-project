import { capitalizeFirstLetters } from "../generalFunctions/styleChanges.js";

export const createUserObject = function (className) {
  const name = document.querySelector(`#${className}-name`).value;
  const email = document.querySelector(`#${className}-email`).value;
  const gender = document.querySelector(`#${className}-gender`).value;
  const status = document.querySelector(`#${className}-status`).value;

  return {
    name: capitalizeFirstLetters(name),
    email: email,
    gender: gender,
    status: status,
  };
};

export const createUserPostObject = function () {
  const titleString = document.querySelector(".form-title").textContent;
  const userName = titleString.split(" ").slice(3).join(" ");
  const title = document.querySelector(".add-post-title-input").value;
  const message = document.querySelector(".add-post-message-input").value;
  return {
    name: userName,
    title: title,
    body: message,
  };
};
