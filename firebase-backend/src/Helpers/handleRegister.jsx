import { startRegisterWithEmailPasswordName } from "../Actions/auth";

export const handleRegister = (
  dayBirthday,
  dispatch,
  e,
  email,
  firstName,
  monthBirthday,
  password,
  setOpenCreateAccount,
  surname,
  yearBirthday
) => {
  e.preventDefault();
  dispatch(
    startRegisterWithEmailPasswordName(
      dayBirthday,
      email,
      firstName,
      monthBirthday,
      password,
      surname,
      yearBirthday
    )
  );
  setOpenCreateAccount(false);
};
