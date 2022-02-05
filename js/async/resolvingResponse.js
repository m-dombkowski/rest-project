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
    console.log(successMessage);
  } else {
    console.log(failMessage);
  }
};
