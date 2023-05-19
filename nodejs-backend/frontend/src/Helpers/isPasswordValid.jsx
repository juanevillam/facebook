export const isPasswordValid = (password) => {
  if (password && password.trim().length < 6) {
    return false;
  }

  return true;
};
