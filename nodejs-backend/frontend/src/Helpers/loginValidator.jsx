export const loginValidator = (email, isFetchingLogin, password) => {
  if (
    email?.replace(/ /g, "")?.length < 6 ||
    password?.replace(/ /g, "")?.length < 6
  ) {
    return false;
  }

  if (isFetchingLogin) {
    return false;
  }

  return true;
};
