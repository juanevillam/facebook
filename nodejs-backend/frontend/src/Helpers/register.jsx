// ** Axios
import axios from "axios";

// ** Actions
import {
  registerFailure,
  registerStart,
  registerSuccess,
  setToken,
} from "../Actions/auth";

export const register = async (
  confirmPassword,
  dispatch,
  e,
  email,
  firstName,
  password,
  surname,
  toast,
  username
) => {
  e.preventDefault();

  if (confirmPassword !== password) return;

  dispatch(registerStart({ email, password }));

  const user = {
    email,
    surname,
    password,
    username,
    firstName,
    fullName: `${firstName} ${surname}`,
  };

  await axios
    .post(`${process.env.REACT_APP_API_URL_LOCAL}auth/register`, user)
    .then((response) => {
      dispatch(setToken(response?.data?.token));
      dispatch(registerSuccess(response?.data?.user));
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
      dispatch(registerFailure(error));
    });
};
