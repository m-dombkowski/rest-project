import { headers } from "./variables.js";

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
  if (response.status === 201) {
    console.log(userObject);
  }
  if (response.status === 422) {
    console.log("czegos brak albo cos zajete");
  }
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

  return response.json();
};

export const editUser = async function (url, id, userObject) {
  const response = await fetch(`${url}/users/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(userObject),
  });
  return response.json();
};

// export const getUserByID = async function (url, id) {
//   const response = await fetch(`${url}/users/${id}`, {
//     method: "GET",
//     headers: headers,
//   });

//   return response.json();
// };
