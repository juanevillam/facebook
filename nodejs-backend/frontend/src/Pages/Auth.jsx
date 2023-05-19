// ** React
import { useState } from "react";

// ** Styles
import "../Styles/Auth.css";
import "../Styles/Animations.css";
import "react-toastify/dist/ReactToastify.css";

// ** Custom Components
import { Language } from "../Components/Language";

// ** React Toastify
import { ToastContainer, toast } from "react-toastify";

// ** React Redux
import { useDispatch, useSelector } from "react-redux";

// ** Helpers
import { login } from "../Helpers/login";
import { loginValidator } from "../Helpers/loginValidator";
import { CreateAccount } from "../Components/CreateAccount";

// ** Icons
import { CloseIcon, FacebookLogoAuth, LoadingIcon } from "../Icons/index";

export const Auth = () => {
  // ** Hooks
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openCreateAccount, setOpenCreateAccount] = useState(false);
  const { isFetchingLogin } = useSelector((state) => state.AuthReducer);

  // ** Methods
  const loginHandler = (e) => login(dispatch, e, email, password, toast);

  const loginValidatorHandler = () =>
    loginValidator(email, isFetchingLogin, password);

  return (
    <>
      <ToastContainer
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
      />
      <div className="bg-white block h-screen md:hidden w-screen">
        <div className="flex bg-blue-900 h-44 items-center justify-center mb-2 w-screen">
          <FacebookLogoAuth />
        </div>
        <Language />
        <div className="mx-auto w-11/12">
          <div className="Auth__InputWrap mb-3">
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
            <label className="Auth__InputWrap__Label">Email Address</label>
            {email?.replace(/ /g, "")?.length >= 2 && (
              <CloseIcon
                className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
                onClick={() => setEmail("")}
                strokeWidth={1.2}
              />
            )}
          </div>
          <div className="Auth__InputWrap mb-4">
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
            {password?.replace(/ /g, "")?.length >= 2 && (
              <CloseIcon
                className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 h-9 hover:bg-gray-200 p-1.5 right-1 rounded-full text-black top-2 transition w-9 z-10"
                onClick={() => setPassword("")}
                strokeWidth={1.2}
              />
            )}
          </div>
          <button
            className={`animate__animated animate__fadeIn bg-thunder-200 bg-opacity-60 disabled:cursor-not-allowed duration-300 flex font-semibold items-center justify-center mb-3 p-2.5 rounded-md text-center text-white text-xl transition w-full ${
              loginValidatorHandler() &&
              "bg-opacity-100 cursor-pointer hover:bg-thunder-300"
            }`}
            disabled={!loginValidatorHandler()}
            onClick={loginHandler}
          >
            {isFetchingLogin ? "Loading" : "Log In"}
            {isFetchingLogin && <LoadingIcon />}
          </button>
          <p className="text-center text-gray-400 text-sm mb-3">Or</p>
          <div
            className="animate__animated animate__fadeIn bg-green-1100 cursor-pointer duration-300 font-semibold hover:bg-green-1200 mb-2.5 mx-auto pb-2.5 pl-5 pr-5 pt-2.5 rounded-md text-white transition w-max"
            onClick={() => setOpenCreateAccount(true)}
          >
            Create new Account
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeIn h-screen hidden items-center lg:pl-0 lg:pr-0 max-w-2xl md:flex md:max-w-4xl mx-auto pl-4 pr-4 space-x-2 xl:max-w-5xl">
        <div className="bg-transparent flex-grow -mt-16 space-y-5 w-7/12">
          <img
            alt=""
            className="animate__animated animate__fadeIn h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          />
          <h1 className="animate__animated animate__fadeIn text-black text-2xl">
            The Facebook Clone helps you connect and share with the people in
            your life.
          </h1>
        </div>
        <form className="mt-8 w-5/12" onSubmit={loginHandler}>
          <div className="bg-white h-max p-3 rounded-lg shadow-md space-y-4 w-full">
            <input
              className="animate__animated animate__fadeIn bg-white border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-3 placeholder-gray-500 pl-4 pr-4 pt-3 rounded-lg transition w-full"
              name="email"
              minLength="6"
              maxLength="200"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              type="email"
              value={email}
            />
            <input
              className="animate__animated animate__fadeIn bg-white border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-thunder-200 hover:bg-gray-200 pb-3 placeholder-gray-500 pl-4 pr-4 pt-3 rounded-lg transition w-full"
              name="password"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              type="password"
              value={password}
            />
            <button
              className={`animate__animated animate__fadeIn bg-thunder-200 bg-opacity-60 disabled:cursor-not-allowed duration-300 flex font-semibold items-center justify-center pb-2.5 pl-10 pr-10 pt-2.5 rounded-md text-center text-white text-xl transition w-full ${
                loginValidatorHandler() &&
                "bg-opacity-100 cursor-pointer hover:bg-thunder-300"
              }`}
              disabled={!loginValidatorHandler()}
              onClick={loginHandler}
            >
              {isFetchingLogin ? "Loading" : "Log In"}
              {isFetchingLogin && <LoadingIcon />}
            </button>
            <hr className="bg-gray-400 mb-3.5 mt-3 mx-auto w-full" />
            <div
              className={`animate__animated animate__fadeIn bg-green-1100 cursor-pointer duration-300 font-semibold mb-2.5 mx-auto pb-2.5 pl-5 pr-5 pt-2.5 rounded-lg text-white transition w-max ${
                isFetchingLogin && "bg-opacity-60 cursor-not-allowed"
              } ${!isFetchingLogin && "hover:bg-green-1200"}`}
              onClick={() => {
                if (isFetchingLogin) return;
                setOpenCreateAccount(true);
              }}
            >
              Create new Account
            </div>
          </div>
          <br />
        </form>
      </div>
      <CreateAccount
        dispatch={dispatch}
        openCreateAccount={openCreateAccount}
        setOpenCreateAccount={setOpenCreateAccount}
        toast={toast}
        useSelector={useSelector}
      />
    </>
  );
};
