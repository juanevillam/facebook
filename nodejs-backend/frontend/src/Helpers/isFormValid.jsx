import validator from "validator";

export const isFormValid = (email, password) => {
  if (!email || !validator.isEmail(email)) {
    return false;
  }

  if (!password || password.trim().length < 6) {
    return false;
  }

  return true;
};
