export const selectingTarget = function (event) {
  const target = event.target;
  return target.classList;
};

export const doubleParentChildren = function (event) {
  const target = event.target;
  const parent = target.parentElement.parentElement;
  return parent.children;
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

export const loopForGettingUserName = function (element, className) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].textContent;
    }
  }
};

export const loopForGettingUserID = function (element, className) {
  let elementValue;
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains(className)) {
      return element[i].id;
    }
  }
};
