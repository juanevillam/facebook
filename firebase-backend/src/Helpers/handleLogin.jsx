import { startLoginWithEmailPassword } from "../Actions/auth";

export const handleLogin = (
  e,
  email,
  password,
  dispatch,
  setError,
  removeError
) => {
  e.preventDefault();

  dispatch(startLoginWithEmailPassword(email, password));
};
