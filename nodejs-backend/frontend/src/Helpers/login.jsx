// ** Axios
import axios from "axios";

// ** Actions
import {
  logInFailure,
  logInStart,
  logInSuccess,
  setToken,
} from "../Actions/auth";

export const login = async (dispatch, e, email, password, toast) => {
  e.preventDefault();
  dispatch(logInStart({ email, password }));

  await axios
    .post(`${process.env.REACT_APP_API_URL_LOCAL}auth/login`, {
      email,
      password,
    })
    .then((response) => {
      dispatch(setToken(response?.data?.token));
      dispatch(logInSuccess(response?.data?.user));
      localStorage.setItem("token-init-date", new Date().getTime());
      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(logInFailure(error));
    });
};
