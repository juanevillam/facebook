import "../Styles/Auth.css";
import { rgba } from "polished";
import "../Styles/Animations.css";
import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Fade from "@material-ui/core/Fade";
import { useForm } from "../Hooks/useForm";
import { CloseIcon } from "../Icons/Close";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { handleLogin } from "../Helpers/handleLogin";
import { removeError, setError } from "../Actions/ui";
import { handleRegister } from "../Helpers/handleRegister";
import { ArrowLeftIcon, XIcon } from "@heroicons/react/solid";

export const OpenCreateAccountOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openCreateAccount ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openCreateAccount ? "visible" : "hidden" };
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
    transform: translateX( ${ p => p.openCreateAccount ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;

const CreateAccountInitialStep = ({ createAccountStep, setCreateAccountStep, setOpenCreateAccount }) => {
    return (
        <>
            <div className="border-b border-gray-300 flex items-center pb-2 pl-3 pt-2 space-x-5">
                <ArrowLeftIcon className="cursor-pointer h-6 text-black w-6" onClick={ () => setOpenCreateAccount( false ) } />
                <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">Create account</h1>
            </div>
            <div className="flex flex-col h-full items-center justify-center mx-auto space-y-6 w-11/12">
                <div className="space-y-3 text-center">
                    <h1 className="font-semibold text-2xl">Join Facebook Clone</h1>
                    <p className="text-gray-600">We'll help you create a new account in a few easy<br /> steps.</p>
                </div>
                <div className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 hover:bg-blue-600 p-2.5 rounded-md text-white transition w-full" onClick={ () => setCreateAccountStep( createAccountStep + 1 ) }>
                    <p className="text-center">Next</p>
                </div>
            </div>
            <div className="absolute bottom-2 w-full">
                <p className="cursor-pointer font-semibold hover:underline mx-auto text-thunder-200 w-max" onClick={ () => setOpenCreateAccount( false ) }>Already have an account?</p>
            </div>
        </>
    );
};

const CreateAccountFirstStep = ({ createAccountStep, firstName, setCreateAccountStep, setFirstName, setOpenCreateAccount, setSurname, surname }) => {
    return (
        <>
            <div className="border-b border-gray-300 flex items-center pb-2 pl-3 pt-2 space-x-5">
                <ArrowLeftIcon className="cursor-pointer h-6 text-black w-6" onClick={ () => setCreateAccountStep( createAccountStep - 1 ) } />
                <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">Name</h1>
            </div>
            <div className="flex flex-col h-full mt-32 mx-auto space-y-6 w-11/12">
                <div className="space-y-3 text-center">
                    <h1 className="animate__animated animate__fadeIn font-semibold text-xl">What's your name?</h1>
                    <p className="animate__animated animate__fadeIn text-gray-600">Enter the name you use in real life.</p>
                </div>
                <div className="flex items-center space-x-4 w-full">
                    <div className="Auth__InputWrap">
                        <input className="Auth__InputWrap__Input" placeholder=" " name="firstName" value={ firstName } onChange={ ( e ) => setFirstName( e.target.value ) } type="text" minLength="4" required />
                        <label className="Auth__InputWrap__Label">First Name</label>
                        { firstName?.replace(/ /g,'')?.length > 2 && <CloseIcon className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer h-7 right-2 text-black top-2.5 w-7 z-10" strokeWidth={ 1.2 } onClick={ () => setFirstName( "" ) } /> }
                    </div>
                    <div className="Auth__InputWrap">
                        <input className="Auth__InputWrap__Input" placeholder=" " name="surname" value={ surname } onChange={ ( e ) => setSurname( e.target.value ) } type="text" minLength="4" required />
                        <label className="Auth__InputWrap__Label">Last Name</label>
                        { surname?.replace(/ /g,'')?.length > 2 && <CloseIcon className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer h-7 right-2 text-black top-2.5 w-7 z-10" strokeWidth={ 1.2 } onClick={ () => setSurname( "" ) } /> }
                    </div>
                </div>
                <div className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 hover:bg-blue-600 p-2.5 rounded-md text-white transition w-full" onClick={ () => setCreateAccountStep( createAccountStep + 1 ) }>
                    <p className="text-center">Next</p>
                </div>
            </div>
        </>
    );
};

const CreateAccountSecondStep = ({ createAccountStep, setCreateAccountStep, setGender }) => {
    return (
        <>
            <div className="border-b border-gray-300 flex items-center pb-2 pl-3 pt-2 space-x-5">
                <ArrowLeftIcon className="cursor-pointer h-6 text-black w-6" onClick={ () => setCreateAccountStep( createAccountStep - 1 ) } />
                <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">Gender</h1>
            </div>
            <div className="flex flex-col h-full mt-32 mx-auto space-y-6 w-11/12">
                <div className="space-y-3 text-center">
                    <h1 className="animate__animated animate__fadeIn font-semibold text-xl">What's your gender?</h1>
                    <p className="animate__animated animate__fadeIn text-gray-600">You can change who sees your gender on your<br /> profile later.</p>
                </div>
                <div className="flex items-center space-x-4 w-full">
                    <label className="border border-gray-900 cursor-pointer flex items-center pb-1.5 pl-2 pr-2.5 pt-1.5 rounded-lg w-6/12" onClick={ () => setGender( "Male" ) }>
                        <p className="flex-grow">Male</p>
                        <input name="gender" type="radio" />
                    </label>
                    <label className="border border-gray-900 cursor-pointer flex items-center pb-1.5 pl-2 pr-2.5 pt-1.5 rounded-lg w-6/12" onClick={ () => setGender( "Female" ) }>
                        <p className="flex-grow">Female</p>
                        <input name="gender" type="radio" />
                    </label>
                </div>
                <div className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 hover:bg-blue-600 p-2.5 rounded-md text-white transition w-full" onClick={ () => setCreateAccountStep( createAccountStep + 1 ) }>
                    <p className="text-center">Next</p>
                </div>
            </div>
        </>
    );
};

const CreateAccountThirdStep = ({ createAccountStep, email, setCreateAccountStep, setEmail }) => {
    return (
        <>
            <div className="border-b border-gray-300 flex items-center pb-2 pl-3 pt-2 space-x-5">
                <ArrowLeftIcon className="cursor-pointer h-6 text-black w-6" onClick={ () => setCreateAccountStep( createAccountStep - 1 ) } />
                <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">Email Address</h1>
            </div>
            <div className="flex flex-col h-full mt-32 mx-auto space-y-6 w-11/12">
                <div className="space-y-3 text-center">
                    <h1 className="animate__animated animate__fadeIn font-semibold text-xl">Enter your email address</h1>
                    <p className="animate__animated animate__fadeIn text-gray-600">Enter the email where you can be reached. You can<br /> hide this from your profile later.</p>
                </div>
                <div className="flex items-center w-full">
                    <div className="Auth__InputWrap">
                        <input className="Auth__InputWrap__Input" placeholder=" " name="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type="email" minLength="8" required />
                        <label className="Auth__InputWrap__Label">Email Address</label>
                        { email?.replace(/ /g,'')?.length > 8 && <CloseIcon className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer h-7 right-2 text-black top-2.5 w-7 z-10" strokeWidth={ 1.2 } onClick={ () => setEmail( "" ) } /> }
                    </div>
                </div>
                <div className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 hover:bg-blue-600 p-2.5 rounded-md text-white transition w-full" onClick={ () => setCreateAccountStep( createAccountStep + 1 ) }>
                    <p className="text-center">Next</p>
                </div>
            </div>
        </>
    );
};

const CreateAccountFourthStep = ({ createAccountStep, password, registerHandler, setCreateAccountStep, setPassword }) => {
    return (
        <>
            <div className="border-b border-gray-300 flex items-center pb-2 pl-3 pt-2 space-x-5">
                <ArrowLeftIcon className="cursor-pointer h-6 text-black w-6" onClick={ () => setCreateAccountStep( createAccountStep - 1 ) } />
                <h1 className="animate__animated animate__fadeIn font-normal text-black text-lg">Password</h1>
            </div>
            <div className="flex flex-col h-full mt-32 mx-auto space-y-6 w-11/12">
                <div className="space-y-3 text-center">
                    <h1 className="animate__animated animate__fadeIn font-semibold text-xl">Choose a password</h1>
                    <p className="animate__animated animate__fadeIn text-gray-600">Create a password with at leat 6 characters. It<br /> should be something others couldn't guess.</p>
                </div>
                <div className="flex items-center w-full">
                    <div className="Auth__InputWrap">
                        <input className="Auth__InputWrap__Input" placeholder=" " name="password" value={ password } onChange={ ( e ) => setPassword( e.target.value ) } type="password" minLength="6" required />
                        <label className="Auth__InputWrap__Label">Password</label>
                        { password?.replace(/ /g,'')?.length > 6 && <CloseIcon className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer h-7 right-2 text-black top-2.5 w-7 z-10" strokeWidth={ 1.2 } onClick={ () => setPassword( "" ) } /> }
                    </div>
                </div>
                <div className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 hover:bg-blue-600 p-2.5 rounded-md text-white transition w-full" onClick={ registerHandler }>
                    <p className="text-center">Create Account</p>
                </div>
            </div>
        </>
    );
};

export const CreateAccountModal = ({ createAccountStep, dispatch, openCreateAccount, setCreateAccountStep, setOpenCreateAccount }) => {
    const [ email, setEmail ] = useState( "" );
    const [ gender, setGender ] = useState( "" );
    const [ surname, setSurname ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ firstName, setFirstName ] = useState( "" );
    const [ dayBirthday, setDayBirthday ] = useState( 0 );
    const [ yearBirthday, setYearBirthday ] = useState( 0 );
    const [ monthBirthday, setMonthBirthday ] = useState( "" );

    const registerHandler = ( e ) => handleRegister( dayBirthday, dispatch, e, email, firstName, monthBirthday, password, setOpenCreateAccount, surname, yearBirthday );
    
    return (
        <>  
            <div className="bg-white flex h-screen md:hidden w-screen">
                <OpenCreateAccountOverlay openCreateAccount={ openCreateAccount } />
                <OpenCreateAccountDialog openCreateAccount={ openCreateAccount }>
                    <div className="bg-white h-full relative w-full">
                        { createAccountStep === 0 && <CreateAccountInitialStep createAccountStep={ createAccountStep } setCreateAccountStep={ setCreateAccountStep } setOpenCreateAccount={ setOpenCreateAccount } /> }
                        { createAccountStep === 1 && <CreateAccountFirstStep createAccountStep={ createAccountStep } firstName={ firstName } setCreateAccountStep={ setCreateAccountStep } setFirstName={ setFirstName } setOpenCreateAccount={ setOpenCreateAccount } setSurname={ setSurname } surname={ surname } /> }
                        { createAccountStep === 2 && <CreateAccountSecondStep createAccountStep={ createAccountStep } setCreateAccountStep={ setCreateAccountStep } setGender={ setGender } /> }
                        { createAccountStep === 3 && <CreateAccountThirdStep createAccountStep={ createAccountStep } email={ email } setCreateAccountStep={ setCreateAccountStep } setEmail={ setEmail } /> }
                        { createAccountStep === 4 && <CreateAccountFourthStep createAccountStep={ createAccountStep } password={ password } registerHandler={ registerHandler } setCreateAccountStep={ setCreateAccountStep } setPassword={ setPassword } /> }
                    </div>
                </OpenCreateAccountDialog>
            </div>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className="hidden items-center justify-center md:flex z-10" open={ openCreateAccount } onClose={ () => setOpenCreateAccount( false ) } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ openCreateAccount }>
                    <div className="bg-white-white pb-2.5 pl-4 pr-4 pt-2.5 w-100 max-w-md outline-none rounded-xl">
                        <div className="flex">
                            <div className="flex-grow mb-2 mt-1 space-y-0.5">
                                <h1 className="bouncing font-medium text-4xl">Sign Up</h1>
                                <p className="bouncing text-gray-600">It's quick and easy.</p>
                            </div>
                            <XIcon className="bouncing cursor-pointer duration-200 h-7 -mr-1 text-gray-500 transition w-7" onClick={ () => setOpenCreateAccount( false ) } />
                        </div>
                        <hr className="text-gray-400" />
                        <div className="flex mb-3 mt-3 space-x-3">
                            <input className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full" name="firstName" minLength="2" maxLength="40" onChange={ ( e ) => setFirstName( e.target.value ) } placeholder="First Name" required type="text" value={ firstName } />
                            <input className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full" name="surname" minLength="2" maxLength="40" onChange={ ( e ) => setSurname( e.target.value ) } placeholder="Surname" required type="text" value={ surname } />
                        </div>
                        <div className="space-y-3.5">
                            <input className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full" name="email" minLength="2" maxLength="40" onChange={ ( e ) => setEmail( e.target.value ) } placeholder="Email Address" required type="text" value={ email } />
                            <input className="animate__animated animate__fadeIn bg-gray-100 border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2.5 placeholder-gray-500 pl-3 pr-3 pt-2.5 rounded-lg transition w-full" name="password" minLength="2" maxLength="40" onChange={ ( e ) => setPassword( e.target.value ) } placeholder="New Password" required type="password" value={ password } />
                        </div>
                        <div className="mt-3 pl-2">
                            <p className="text-sm text-gray-700">Date of birth</p>
                            <div className="flex items-center mb-2 -ml-1 mt-0.5 space-x-2 w-full">
                                <span className="flex border border-gray-900 pb-1.5 pl-2 pr-2 pt-1.5 rounded-lg w-4/12">
                                    <select className="cursor-pointer flex-grow focus:outline-none" id="day" name="day" onChange={ ( e ) => setDayBirthday( e.target.value )  }>
                                        <option>1</option> 
                                        <option>2</option> 
                                        <option>3</option> 
                                        <option>4</option> 
                                        <option>5</option> 
                                        <option>6</option> 
                                        <option>7</option> 
                                        <option>8</option> 
                                        <option>9</option> 
                                        <option>10</option> 
                                        <option>11</option> 
                                        <option>12</option> 
                                        <option>13</option> 
                                        <option>14</option> 
                                        <option>15</option> 
                                        <option>16</option> 
                                        <option>17</option> 
                                        <option>18</option> 
                                        <option>19</option> 
                                        <option>20</option> 
                                        <option>21</option> 
                                        <option>22</option> 
                                        <option>23</option> 
                                        <option>24</option> 
                                        <option>25</option> 
                                        <option>26</option> 
                                        <option>27</option> 
                                        <option>28</option> 
                                        <option>29</option> 
                                        <option>30</option> 
                                        <option>31</option> 
                                    </select>
                                </span>
                                <span className="flex border border-gray-900 pb-1.5 pl-1.5 pr-2 pt-1.5 rounded-lg w-4/12">
                                    <select className="cursor-pointer flex-grow focus:outline-none" id="month" name="month" onChange={ ( e ) => setMonthBirthday( e.target.value ) }>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </span>
                                <span className="flex border border-gray-900 pb-1.5 pl-2 pr-2 pt-1.5 rounded-lg w-4/12">
                                    <select className="cursor-pointer flex-grow focus:outline-none" id="year" name="year" onChange={ ( e ) => setYearBirthday( e.target.value ) }>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>
                                        <option>2002</option>
                                        <option>2001</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                        <option>1990</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 pl-2">
                            <p className="text-sm text-gray-700">Gender</p>
                            <div className="flex items-center mb-2 -ml-1 mt-0.5 space-x-2 w-full">
                                <label className="border border-gray-900 cursor-pointer flex items-center pb-1.5 pl-2 pr-2.5 pt-1.5 rounded-lg w-6/12" onClick={ () => setGender( "Male" ) }>
                                    <p className="flex-grow">Male</p>
                                    <input name="gender" type="radio" />
                                </label>
                                <label className="border border-gray-900 cursor-pointer flex items-center pb-1.5 pl-2 pr-2.5 pt-1.5 rounded-lg w-6/12" onClick={ () => setGender( "Female" ) }>
                                    <p className="flex-grow">Female</p>
                                    <input name="gender" type="radio" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-2.5 mt-4 mx-auto w-max">
                            { ( firstName.replace(/ /g,'').length === 0 ) || ( surname.replace(/ /g,'').length === 0 ) || ( email.replace(/ /g,'').length === 0 ) || ( password.replace(/ /g,'').length === 0 ) || ( dayBirthday === 0 ) || ( monthBirthday === "" ) || ( yearBirthday === 0 ) || ( gender === "" ) ?
                                <div className="animate__animated animate__fadeIn bg-green-1100 bg-opacity-70 cursor-not-allowed duration-300 font-semibold pb-1.5 pl-14 pr-14 pt-1.5 rounded-lg text-lg text-white transition w-max">Sign Up</div>
                                :
                                <button className="animate__animated animate__fadeIn bg-green-1100 cursor-pointer duration-300 font-semibold hover:bg-green-1200 pb-1.5 pl-14 pr-14 pt-1.5 rounded-lg text-lg text-white transition w-max" onClick={ registerHandler }>Sign Up</button>
                            }
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

export const Auth = () => {
    const dispatch = useDispatch();
    const [ createAccountStep, setCreateAccountStep ] = useState( 0 );
    const [ openCreateAccount, setOpenCreateAccount ] = useState( false );
    const [ formValues, handleInputChange ] = useForm({ email: "", password: "" });
    let { email, password } = formValues;

    const loginHandler = ( e ) => handleLogin( e, email, password, dispatch, setError, removeError );

    return (
        <>
            <div className="bg-white block h-screen md:hidden w-screen">
                <div className="flex bg-blue-900 h-44 items-center justify-center mb-2 w-full">
                    <img alt="" className="cursor-pointer h-14" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" />
                </div>
                <p className="mb-4 text-center text-gray-600 text-sm">English</p>
                <div className="mx-auto space-y-5 w-11/12">
                    <div className="space-y-3">
                        <input className="animate__animated animate__fadeIn bg-white-white border-b-2 border-gray-400 duration-300 focus:outline-none focus:border-thunder-200 focus:border-b-2 hover:bg-gray-200 pb-2 placeholder-gray-500 pl-1 pr-1 pt-2.5 transition w-full" name="email" minLength="2" maxLength="40" onChange={ handleInputChange } placeholder="Email address" required type="email" value={ email } />
                        <input className="animate__animated animate__fadeIn bg-white-white border-b-2 border-gray-400 duration-300 focus:outline-none focus:border-thunder-200 focus:border-b-2 hover:bg-gray-200 pb-2 placeholder-gray-500 pl-1 pr-1 pt-2.5 transition w-full" name="password" minLength="2" maxLength="40" onChange={ handleInputChange } placeholder="Password" required type="password" value={ password } />
                    </div>
                    <button className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 font-semibold hover:bg-blue-600 p-2.5 rounded-md text-xl text-white transition w-full" onClick={ loginHandler }>Log In</button>
                    <p className="animate__animated animate__fadeIn text-center text-lg">
                        <small className="cursor-pointer font-semibold hover:underline text-thunder-200">Forgot Password?</small>
                    </p>
                    <div className="animate__animated animate__fadeIn bg-green-1100 cursor-pointer duration-300 font-semibold hover:bg-green-1200 mb-2.5 mx-auto pb-2.5 pl-5 pr-5 pt-2.5 rounded-md text-white transition w-max" onClick={ () => setOpenCreateAccount( true ) }>Create new Account</div>
                </div>
            </div>
            <div className="h-screen hidden items-center lg:pl-0 lg:pr-0 max-w-2xl md:flex md:max-w-4xl mx-auto pl-4 pr-4 space-x-2 xl:max-w-5xl">
                <div className="bg-transparent flex-grow -mt-16 space-y-5 w-7/12">
                    <img alt="" className="animate__animated animate__fadeIn h-12" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" />
                    <h1 className="animate__animated animate__fadeIn text-black text-2xl">The Facebook Clone helps you connect and share with the people in your life.</h1>
                </div>
                <div className="mt-8 w-5/12">
                    <div className="bg-white h-max p-3 rounded-lg shadow-md space-y-4 w-full">
                        <input className="animate__animated animate__fadeIn bg-white border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-3 placeholder-gray-500 pl-4 pr-4 pt-3 rounded-lg transition w-full" name="email" minLength="2" maxLength="40" onChange={ handleInputChange } placeholder="Email address" required type="email" value={ email } />
                        <input className="animate__animated animate__fadeIn bg-white border border-gray-900 duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-3 placeholder-gray-500 pl-4 pr-4 pt-3 rounded-lg transition w-full" name="password" minLength="2" maxLength="30" onChange={ handleInputChange } placeholder="Password" required type="password" value={ password } />
                        <button className="animate__animated animate__fadeIn bg-thunder-200 cursor-pointer duration-300 font-semibold hover:bg-blue-600 p-2.5 rounded-md text-xl text-white transition w-full" onClick={ loginHandler }>Log In</button>
                        <p className="animate__animated animate__fadeIn text-center">
                            <small className="cursor-pointer font-medium hover:underline text-thunder-200">Forgotten Password?</small>
                        </p>
                        <hr className="bg-gray-400 mb-3.5 mt-3 mx-auto w-full" />
                        <div className="animate__animated animate__fadeIn bg-green-1100 cursor-pointer duration-300 font-semibold hover:bg-green-1200 mb-2.5 mx-auto pb-2.5 pl-5 pr-5 pt-2.5 rounded-lg text-white transition w-max" onClick={ () => setOpenCreateAccount( true ) }>Create new Account</div>
                    </div>
                    <br />
                    <p className="animate__animated animate__fadeIn text-center text-sm">
                        <strong className="cursor-pointer hover:underline">Create a Page </strong>  
                        for a celebrity, brand or business.
                    </p>
                </div>
            </div>
                <CreateAccountModal createAccountStep={ createAccountStep } dispatch={ dispatch } openCreateAccount={ openCreateAccount } setCreateAccountStep={ setCreateAccountStep } setOpenCreateAccount={ setOpenCreateAccount } />
        </>
    );
};