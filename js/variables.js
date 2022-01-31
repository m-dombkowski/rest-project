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
export const BASE_URL = `https://gorest.co.in/public/v1`;

export const usersList = document.querySelector(".users-list");
export const userDetails = document.querySelector(".user-details-container");
export const userCreate = document.querySelector(".user-creation-container");
export const form = document.querySelector(".create-form");
