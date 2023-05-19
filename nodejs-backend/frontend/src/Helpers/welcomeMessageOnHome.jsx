export const welcomeMessageOnHome = (toast, firstName) => {
  if (!localStorage.getItem("welcomeMessage")) {
    toast.success(`Welcome, ${firstName}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    localStorage.setItem("welcomeMessage", true);
  }
};
