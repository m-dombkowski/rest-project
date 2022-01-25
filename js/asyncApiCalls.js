import { token } from "./variables.js";

export const getUsers = async function () {
  const response = await fetch(
    `
      https://gorest.co.in/public/v1/users`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ` + token,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const getUserByID = async function (id) {
  const response = await fetch(`https://gorest.co.in/public/v1/users/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ` + token,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const createUser = async function (data) {
  const response = await fetch(`https://gorest.co.in/public/v1/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ` + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteUser = async function (id) {
  await fetch(`https://gorest.co.in/public/v1/users/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
  });
};

export const getToDos = async function () {
  const response = await fetch(`https://gorest.co.in/public/v1/todos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
  });
  return response.json();
};
