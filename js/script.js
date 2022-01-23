const token =
  "c397113043321c1304d7fb3a759310dcc61e8ef3fd4b0040dad3eb74b185192f";
const btn = document.querySelector(".btn");
const deleteU = document.querySelector(".btn-deleteU");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const testBody = {
  name: "Kamil Kowasalski",
  gender: "male",
  email: "kamil1412da44124@mail.com",
  status: "active",
};

btn1.addEventListener("click", function () {
  getUserByID(3934).then((data) => console.log(data));
});

btn.addEventListener("click", function () {
  getUsers().then((data) => console.log(data));
});

deleteU.addEventListener("click", function () {
  deleteUser(3931);
});

btn2.addEventListener("click", function () {
  createUser(testBody).then((data) => console.log(data.data.id));
});

const getUsers = async function () {
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

const getUserByID = async function (id) {
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

const createUser = async function (data) {
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

const deleteUser = async function (id) {
  await fetch(`https://gorest.co.in/public/v1/users/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
  });
};

const getToDos = async function () {
  const response = await fetch(`https://gorest.co.in/public/v1/todos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return response.json();
};
