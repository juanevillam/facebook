// ** Icons
import { CloseIcon, LoadingIcon } from "../Icons";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export const CreateAccountMobile = ({
  confirmPassword,
  email,
  firstName,
  isFetchingRegister,
  password,
  registerHandler,
  registerValidatorHandler,
  setConfirmPassword,
  setEmail,
  setFirstName,
  setOpenCreateAccount,
  setPassword,
  setSurname,
  setUsername,
  surname,
  username,
}) => {
  return (
    <>
      <div className="border-b border-gray-300 flex items-center pb-1.5 pl-2 pt-1.5 space-x-4">
        <ArrowLeftIcon
          className="cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 rounded-full text-black transition w-9"
          onClick={() => setOpenCreateAccount(false)}
        />
        <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">
          Create Account
        </h1>
      </div>
      <div className="flex flex-col h-full mt-4 mx-auto space-y-6 w-11/12">
        <div className="mb-2 space-y-1 text-center">
          <h1 className="animate__animated animate__fadeIn font-semibold text-xl">
            Who are you?
          </h1>
          <p className="animate__animated animate__fadeIn text-gray-600">
            Enter the your credentials to start using the Facebook Clone!
          </p>
        </div>
        <div className="Auth__InputWrap">
          <input
            className="Auth__InputWrap__Input"
            minLength="2"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder=" "
            required
            type="text"
            value={firstName}
          />
          <label className="Auth__InputWrap__Label">First Name</label>
          {firstName?.replace(/ /g, "")?.length >= 2 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setFirstName("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <div className="Auth__InputWrap">
          <input
            className="Auth__InputWrap__Input"
            minLength="2"
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
            placeholder=" "
            required
            type="text"
            value={surname}
          />
          <label className="Auth__InputWrap__Label">Last Name</label>
          {surname?.replace(/ /g, "")?.length >= 2 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setSurname("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <div className="Auth__InputWrap">
          <input
            className="Auth__InputWrap__Input"
            minLength="6"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            type="email"
            value={email}
          />
          <label className="Auth__InputWrap__Label">Email</label>
          {email?.replace(/ /g, "")?.length > 6 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setEmail("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <div className="Auth__InputWrap">
          <input
            className="Auth__InputWrap__Input"
            minLength="6"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" "
            required
            type="username"
            value={username}
          />
          <label className="Auth__InputWrap__Label">Username</label>
          {username?.replace(/ /g, "")?.length > 6 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setUsername("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <div className="Auth__InputWrap">
          <input
            className="Auth__InputWrap__Input"
            minLength="6"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
            type="password"
            value={password}
          />
          <label className="Auth__InputWrap__Label">Password</label>
          {password?.replace(/ /g, "")?.length > 6 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setPassword("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <div className="Auth__InputWrap mb-3">
          <input
            className="Auth__InputWrap__Input"
            minLength="6"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" "
            required
            type="password"
            value={confirmPassword}
          />
          <label className="Auth__InputWrap__Label">Confirm Password</label>
          {confirmPassword?.replace(/ /g, "")?.length > 6 && (
            <CloseIcon
              className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
              onClick={() => setConfirmPassword("")}
              strokeWidth={1.2}
            />
          )}
        </div>
        <button
          className={`animate__animated animate__fadeIn bg-green-1100 bg-opacity-60 disabled:cursor-not-allowed duration-300 flex items-center justify-center p-2.5 rounded-md text-white transition w-full ${
            registerValidatorHandler() &&
            "bg-opacity-100 cursor-pointer hover:bg-green-1200"
          }`}
          disabled={!registerValidatorHandler()}
          onClick={registerHandler}
        >
          {isFetchingRegister ? "Creating Account" : "Create Account"}
          {isFetchingRegister && <LoadingIcon />}
        </button>
      </div>
    </>
  );
};
