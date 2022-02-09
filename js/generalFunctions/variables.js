export const token =
  "c397113043321c1304d7fb3a759310dcc61e8ef3fd4b0040dad3eb74b185192f";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ` + token,
};

export const showUsers = document.querySelector(".show-all-users");
export const deleteU = document.querySelector(".btn-deleteU");

export const createUser = document.querySelector(".create-user");

export const BASE_URL = `https://gorest.co.in/public/v1`;
export const spinner = document.querySelector("#spinner");

export const usersList = document.querySelector(".users-list");
export const userListSection = document.querySelector(".user-list-section");
export const userDetails = document.querySelector(".user-details-container");
export const userForms = document.querySelector(".user-forms-container");
export const createForm = document.querySelector(".create-form");
export const editForm = document.querySelector(".edit-form");
export const main = document.querySelector(".main");
export const close = document.getElementsByClassName("close-icon");
export const postList = document.querySelector(".user-posts-list");
export const responseMessageModal = document.querySelector(
  ".response-message-modal"
);
