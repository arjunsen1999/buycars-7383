import { auth_isLoading, auth_isSuccess } from "./auth.actionType";
import axios from "axios";
import notification from "../../Toast";

export const signupAction = (formData) => async (dispatch) => {
  dispatch({ type: auth_isLoading, payload: { isLoading: true } });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
      formData
    );
    dispatch({ type: auth_isLoading, payload: { isLoading: false } });
    dispatch({ type: auth_isSuccess, payload: { auth: false } });
    notification("success", data.message);
  } catch (error) {
    dispatch({ type: auth_isLoading, payload: { isLoading: false } });
    notification("error", error.response.data.message);
  }
};

 export const loginAction = (formData) => async (dispatch) =>{
  dispatch({ type: auth_isLoading, payload: { isLoading: true } });
 try {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
    formData
  );
  dispatch({ type: auth_isLoading, payload: { isLoading: false } });
  dispatch({ type: auth_isSuccess, payload: { auth: data.data } });
  notification("success", data.message);
 } catch (error) {
  dispatch({ type: auth_isLoading, payload: { isLoading: false } });
  notification("error", error.response.data.message);
 }
 }