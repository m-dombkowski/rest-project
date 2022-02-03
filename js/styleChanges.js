export const addHide = function (parentElement) {
  parentElement.classList.add("hide");
};

export const removeHide = function (parentElement) {
  parentElement.classList.remove("hide");
};

export const capitalizeFirstLetters = function (string) {
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(" ");
};
