// ** Polished
import { rgba } from "polished";

// ** React
import { useState } from "react";

// ** Styled Components
import styled from "styled-components";

// ** Material UI
import { Fade, Modal } from "@mui/material";

// ** Icons
import { LoadingIcon } from "../Icons/index";
import { XIcon } from "@heroicons/react/solid";

// ** Helpers
import { register } from "../Helpers/register";
import { registerValidator } from "../Helpers/registerValidator";
import { CreateAccountMobile } from "../Components/CreateAccountMobile";

export const OpenCreateAccountOverlay = styled.div`
  background: ${rgba("black", 0.65)};
  height: 5000px;
  left: 0;
  opacity: ${(props) => (props.openCreateAccount ? 1 : 0)};
  position: fixed;
  top: 0;
  transition-duration: 0.3s;
  transition-property: visibility opacity;
  visibility: ${(props) => (props.openCreateAccount ? "visible" : "hidden")};
  width: 5000px;
  z-index: 29;
`;

export const OpenCreateAccountDialog = styled.div`
  background-color: none;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  transition: transform 0.3s;
  transform: translateX(${(p) => (p.openCreateAccount ? 0 : "100%")});
  z-index: 30;
`;

export const CreateAccount = ({
  dispatch,
  openCreateAccount,
  setOpenCreateAccount,
  toast,
  useSelector,
}) => {
  // ** Hooks
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isFetchingRegister } = useSelector((state) => state.AuthReducer);

  // ** Methods
  const registerHandler = (e) =>
    register(
      confirmPassword,
      dispatch,
      e,
      email,
      firstName,
      password,
      surname,
      toast,
      username
    );

  const registerValidatorHandler = () =>
    registerValidator(
      confirmPassword,
      email,
      firstName,
      isFetchingRegister,
      password,
      surname,
      username
    );

  return (
    <>
      <div className="bg-white flex h-screen md:hidden w-screen">
        <OpenCreateAccountOverlay openCreateAccount={openCreateAccount} />
        <OpenCreateAccountDialog openCreateAccount={openCreateAccount}>
          <div className="bg-white h-full relative w-full">
            <CreateAccountMobile
              confirmPassword={confirmPassword}
              email={email}
              firstName={firstName}
              isFetchingRegister={isFetchingRegister}
              password={password}
              registerHandler={registerHandler}
              registerValidatorHandler={registerValidatorHandler}
              setConfirmPassword={setConfirmPassword}
              setEmail={setEmail}
              setFirstName={setFirstName}
              setOpenCreateAccount={setOpenCreateAccount}
              setPassword={setPassword}
              setSurname={setSurname}
              setUsername={setUsername}
              surname={surname}
              username={username}
            />
            )
          </div>
        </OpenCreateAccountDialog>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="hidden items-center justify-center md:flex"
        closeAfterTransition
        onClose={() => setOpenCreateAccount(false)}
        open={openCreateAccount}
      >
        <Fade in={openCreateAccount}>
          <div className="bg-white pb-2.5 pl-4 pr-4 pt-2.5 w-100 max-w-md outline-none rounded-xl">
            <div className="flex">
              <div className="flex-grow mb-2 mt-1 space-y-0.5">
                <h1 className="bouncing font-medium text-4xl">Sign Up</h1>
                <p className="bouncing text-gray-600">It's quick and easy.</p>
              </div>
              <XIcon
                className="bouncing hover:bg-gray-200 cursor-pointer duration-300 h-9 -mr-1 p-1.5 rounded-full text-gray-500 transition w-9"
                onClick={() => setOpenCreateAccount(false)}
              />
            </div>
            <hr className="text-gray-400" />
            <div className="flex mb-2.5 mt-2.5 space-x-3">
              <div>
                <label className="ml-px text-gray-400 text-sm">
                  First Name
                </label>
                <input
                  className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                  name="firstName"
                  minLength="2"
                  maxLength="40"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="E.g. Juan"
                  required
                  type="text"
                  value={firstName}
                />
              </div>
              <div>
                <label className="ml-px text-gray-400 text-sm">Surname</label>
                <input
                  className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                  name="surname"
                  minLength="2"
                  maxLength="40"
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="E.g. Villa"
                  required
                  type="text"
                  value={surname}
                />
              </div>
            </div>
            <div className="mb-2.5">
              <label className="ml-px text-gray-400 text-sm">
                Email Address
              </label>
              <input
                className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                name="email"
                minLength="6"
                maxLength="100"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E.g. juanestebanvilla@gmail.com"
                required
                type="email"
                value={email}
              />
            </div>
            <div className="mb-2.5">
              <label className="ml-px text-gray-400 text-sm">Username</label>
              <input
                className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                name="username"
                minLength="2"
                maxLength="100"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="E.g. juanevillam"
                required
                type="text"
                value={username}
              />
            </div>
            <div className="mb-2.5">
              <label className="ml-px text-gray-400 text-sm">Password</label>
              <input
                className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                name="password"
                minLength="6"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
                type="password"
                value={password}
              />
            </div>
            <div className="mb-2.5">
              <label className="ml-px text-gray-400 text-sm">
                Confirm Password
              </label>
              <input
                className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full"
                name="confirmPassword"
                minLength="6"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Same as the previous password"
                required
                type="password"
                value={confirmPassword}
              />
            </div>
            <div className="mb-2.5 mt-4 mx-auto w-max">
              <button
                className={`animate__animated animate__fadeIn bg-green-1100 bg-opacity-60 disabled:cursor-not-allowed duration-300 flex font-semibold items-center pb-2.5 pl-10 pr-10 pt-2.5 rounded-md text-center text-white text-xl transition w-full ${
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
          </div>
        </Fade>
      </Modal>
    </>
  );
};
