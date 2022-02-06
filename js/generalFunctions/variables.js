export const token =
  "c397113043321c1304d7fb3a759310dcc61e8ef3fd4b0040dad3eb74b185192f";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ` + token,
};

export const btn = document.querySelector(".btn");
export const deleteU = document.querySelector(".btn-deleteU");
export const btn1 = document.querySelector(".btn1");
export const btn2 = document.querySelector(".btn2");
export const btn3 = document.querySelector(".btn3");
export const BASE_URL = `https://gorest.co.in/public/v1`;
export const spinner = document.querySelector("#spinner");

export const usersList = document.querySelector(".users-list");
export const userDetails = document.querySelector(".user-details-container");
export const userForms = document.querySelector(".user-forms-container");
export const createForm = document.querySelector(".create-form");
export const editForm = document.querySelector(".edit-form");
export const main = document.querySelector(".main");
export const close = document.getElementsByClassName("close-icon");
export const postList = document.querySelector(".user-posts-list");
