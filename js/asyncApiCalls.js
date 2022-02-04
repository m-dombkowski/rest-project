import { headers } from "./variables.js";

export const getUsers = async function (url) {
  const response = await fetch(`${url}/users`, {
    method: "GET",
    headers: headers,
  });
  // resolvingResponseStatus(response);
  return response.json();
};

export const createUser = async function (url, userObject) {
  const response = await fetch(`${url}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userObject),
  });

  resolvingCreateUserResponseStatus(response);
  return response.json();
};

export const deleteUserREST = async function (url, id) {
  await fetch(`${url}/users/${id}`, {
    method: "DELETE",
    headers: headers,
  });
};

export const getToDos = async function (url) {
  const response = await fetch(`${url}/todos`, {
    method: "GET",
    headers: headers,
  });

  resolvingResponseStatus(response);
};

export const editUser = async function (url, id, userObject) {
  const response = await fetch(`${url}/users/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(userObject),
  });
  resolvingResponseStatus(response);
};

export const getUserPosts = async function (url, userID) {
  const response = await fetch(`${url}/users/${userID}/posts`, {
    method: "GET",
    headers: headers,
  });
  resolvingResponseStatus(response);
};

export const getUserComments = async function (url) {
  const response = await fetch(`${url}/posts/1236/comments`, {
    method: "GET",
    headers: headers,
  });
  resolvingResponseStatus(response);
};

export const createUserPost = async function (url, userID, userPostObject) {
  const response = await fetch(`${url}/users/${userID}/posts`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userPostObject),
  });
  resolvingResponseStatus(response);
};

export const createUserComment = async function (url) {
  const response = await fetch(`${url}/posts/1236/comments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: "hevra",
      email: "asd@kapusniak.cc",
      body: "kapusta",
    }),
  });
  resolvingResponseStatus(response);
};

// const resolveCreateUserResponseStatus = function (response) {
//   if (response.status === 200) {
//     console.log("nice");
//   }
// };

// export const getUserByID = async function (url, id) {
//   const response = await fetch(`${url}/users/${id}`, {
//     method: "GET",
//     headers: headers,
//   });

//   return response.json();
// };
