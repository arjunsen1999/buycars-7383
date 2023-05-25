import {
  auth_isError,
  auth_isLoading,
  auth_isReset,
  auth_isSuccess,
  auth_logout,
} from "./auth.actionType";

const auth =
  JSON.parse(localStorage.getItem("secretKey-buycars-7383")) || false;

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  auth,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case auth_isSuccess:
      if (payload.auth) {
        localStorage.setItem(
          "secretKey-buycars-7383",
          JSON.stringify(payload.auth)
        );
      }

      return {
        ...state,
        isSuccess: true,
        message: payload.message ? payload.message : "",
        auth: payload.auth ? payload.auth : false,
      };
    case auth_isError:
      return {
        ...state,
        isError: false,
        message: payload.message,
      };
    case auth_isLoading:
      return {
        ...state,
        isLoading: payload.loading,
      };

    case auth_logout:
      localStorage.removeItem("secretKey-buycars-7383");
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
        auth: false,
      };

    case auth_isReset:
      return {
        ...state,
        isSuccess: false,
        isError: false,
        message: "",
      };

    default:
      return state;
  }
};
