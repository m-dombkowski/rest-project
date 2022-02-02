const createElement = function (
  type,
  classList = [],
  attributes = {},
  textContent = ""
) {
  const element = document.createElement(type);
  if (classList.length > 0) {
    element.classList.add(...classList);
  }
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  if (typeof textContent === "string" && textContent !== "") {
    element.textContent = textContent;
  }
  return element;
};

const createHeader = function () {};
