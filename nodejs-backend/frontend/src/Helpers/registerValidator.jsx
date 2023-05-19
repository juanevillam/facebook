export const registerValidator = (
  confirmPassword,
  email,
  firstName,
  isFetchingRegister,
  password,
  surname,
  username
) => {
  if (
    firstName?.replace(/ /g, "")?.length < 2 ||
    surname?.replace(/ /g, "")?.length < 2 ||
    email?.replace(/ /g, "")?.length < 6 ||
    username?.replace(/ /g, "")?.length < 2 ||
    password?.replace(/ /g, "")?.length < 6 ||
    confirmPassword?.replace(/ /g, "")?.length < 6 ||
    confirmPassword !== password
  ) {
    return false;
  }

  if (isFetchingRegister) {
    return false;
  }

  return true;
};
