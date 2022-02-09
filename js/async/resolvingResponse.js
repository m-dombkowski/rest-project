import { displayResponseMessage } from "../buildingHTML/rendering.js";
import { responseMessageModal } from "../generalFunctions/variables.js";

export const resolveResponse = function (
  response,
  successMessage,
  failMessage
) {
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    displayResponseMessage(successMessage);
  } else {
    displayResponseMessage(failMessage);
    responseMessageModal.style.color = "red";
  }
};
