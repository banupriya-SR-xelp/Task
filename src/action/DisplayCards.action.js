//Requesting
export function getFeedsRequest() {
  return {
    type: "GET_USER_DETAILS_REQUEST"
  };
}

//success
export function getFeedsSuccess(data) {
  return {
    type: "GET_USER_DETAILS_SUCCESS",
    data
  };
}

//Failure
export function getFeedsFailure(error) {
  return {
    type: "GET_USER_DETAILS_FAILURE",
    error
  };
}
