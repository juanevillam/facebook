// ** Actions
import { logOut } from "../Actions/auth";

export const logout = (dispatch, e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("welcomeMessage");
  localStorage.removeItem("token-init-date");
  dispatch(logOut());
};
