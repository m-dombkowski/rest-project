export const selectingTarget = function (event) {
  const target = event.target;
  return target.classList;
};

export const singleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement;
  return parent.children;
};

export const doubleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  return parent.children;
};

export const doubleParent = function (event) {
  const target = event.target;
  return target.parentElement.parentElement;
};

export const tripleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement.parentElement;
  return parent.children;
};

export const tripleParent = function (event) {
  const target = event.target;
  return target.parentElement.parentElement.parentElement;
};

export const commentsContainer = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  const children = parent.children;
  console.log(children);

  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("all-comments-container")) {
      return children[i];
    }
  }
};

export const loopForGettingUserName = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].textContent;
    }
  }
};

export const loopForGettingUserID = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].id;
    }
  }
};

export const clearElement = function (parentElement) {
  parentElement.innerHTML = "";
};
