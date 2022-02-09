import { headers } from "../generalFunctions/variables.js";
import { resolveResponse } from "./resolvingResponse.js";

export const getUsers = async function (url) {
  const response = await fetch(`${url}/users`, {
    method: "GET",
    headers: headers,
  });
  return response.json();
};

export const createUser = async function (url, userObject) {
  const response = await fetch(`${url}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userObject),
  });

  resolveResponse(
    response,
    "User Created Successfully!",
    "Couldn't create user, please check information provided and try again (Remember, there can't be more than 1 user with the same email address, and all informations must be provided!)"
  );
  return response.json();
};

export const deleteUserREST = async function (url, id) {
  const response = await fetch(`${url}/users/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  resolveResponse(
    response,
    "User deleted successfully",
    "Couldn't delete user, please try again"
  );
};

export const editUser = async function (url, id, userObject) {
  const response = await fetch(`${url}/users/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(userObject),
  });
  resolveResponse(
    response,
    "User details edited successfully!",
    "There was an error, please check information provided and try again (Remember, there can't be more than 1 user with the same email address!)"
  );
  return response.json();
};
export const getUserPosts = async function (url, userID) {
  const response = await fetch(`${url}/users/${userID}/posts`, {
    method: "GET",
    headers: headers,
  });
  return response.json();
};

export const getPostComments = async function (url, postID) {
  const response = await fetch(`${url}/posts/${postID}/comments`, {
    method: "GET",
    headers: headers,
  });
  return response.json();
};

export const createUserPost = async function (url, userID, userPostObject) {
  const response = await fetch(`${url}/users/${userID}/posts`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userPostObject),
  });
  resolveResponse(
    response,
    "Post created!",
    "There was an error, please try again."
  );
  return response.json();
};

export const createUserComment = async function (url, postID, commentObject) {
  const response = await fetch(`${url}/posts/${postID}/comments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(commentObject),
  });
  resolveResponse(
    response,
    "Comment added!",
    "There was an error, please try again."
  );
  return response.json();
};

