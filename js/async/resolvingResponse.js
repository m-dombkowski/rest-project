import { displayResponseMessage } from "../buildingHTML/rendering.js";

export const resolveResponse = function (
  response,
  successMessage,
  failMessage
) {
  console.log(response.status);
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    displayResponseMessage(successMessage);
  } else {
    displayResponseMessage(failMessage);
  }
};
