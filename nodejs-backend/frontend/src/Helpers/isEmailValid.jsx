import validator from "validator";

export const isEmailValid = (email) => {
  if (email.trim().length < 6 && !validator.isEmail(email)) {
    return false;
  }

  return true;
};
