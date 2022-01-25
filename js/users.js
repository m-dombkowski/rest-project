import { renderUser } from "./rendering.js";

export const printUsers = function (data) {
  const userArray = data.data;
  console.log(userArray);
  for (let i = 0; i < userArray.length; i++) {
    renderUser(userArray[i]);
  }
};

const getUserName = function (event) {
  const target = event.target;
  const grandParentxD = target.parentElement.parentElement;
  const children = grandParentxD.children;

  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("user-name")) {
      return children[i].textContent;
    }
  }
};

export const getUserData = function (data, event) {
  const userArray = data.data;
  userArray.forEach((userObject) => {
    if (userObject.name === getUserName(event)) console.log(userObject);
  });
};
