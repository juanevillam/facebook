// ** Styles
import "../Styles/MessengerPreloader.css";

export const MessengerPreloader = () => {
  return (
    <div className="MessengerPreloader">
      <img
        className="animate__animated animate__fadeIn MessengerPreloader__Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
        alt=""
      />
      <p className="animate__animated animate__fadeIn MessengerPreloader__Text">
        from
      </p>
      <h1 className="animate__animated animate__fadeIn MessengerPreloader__Title">
        JUAN VILLA
      </h1>
    </div>
  );
};
