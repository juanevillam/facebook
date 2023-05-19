// ** React
import { useState } from "react";

// ** Material UI
import { Fade, Modal } from "@mui/material";

// ** React I18next
import { useTranslation } from "react-i18next";

// ** React Country Flag
import ReactCountryFlag from "react-country-flag";

export const Language = () => {
  // ** Hooks
  const { i18n, t } = useTranslation();
  const [openSelectedLanguage, setOpenSelectedLanguage] = useState(false);

  // ** Vars
  const langObj = {
    es: "Español",
    en: "English",
  };

  // ** Methods
  const languageHandler = (lang) => i18n.changeLanguage(lang);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        className="flex items-center justify-center z-10"
        onClose={() => setOpenSelectedLanguage(false)}
        open={openSelectedLanguage}
      >
        <Fade in={openSelectedLanguage}>
          <div className="bg-light-50 dark:bg-dark-200 m-5 max-w-lg pb-4 pl-5 pr-5 pt-3 outline-none rounded-xl w-96">
            <h1 className="dark:text-light-400 mb-3 text-dark-100 text-center text-xl">
              Choose your language.
            </h1>
            <div
              className="cursor-pointer duration-300 space-x-2 transition w-full"
              onClick={() => languageHandler("en")}
            >
              <ReactCountryFlag className="country-flag" countryCode="us" svg />
              <span className="dark:text-light-400 text-dark-100">
                {t("english")}
              </span>
            </div>
            <div
              className="cursor-pointer duration-300 space-x-2 transition w-full"
              onClick={() => languageHandler("es")}
            >
              <ReactCountryFlag className="country-flag" countryCode="es" svg />
              <span className="dark:text-light-400 text-dark-100">
                {t("spanish")}
              </span>
            </div>
          </div>
        </Fade>
      </Modal>
      <div className="flex items-center justify-center space-x-2">
        <ReactCountryFlag
          svg
          className="country-flag flag-icon"
          countryCode={i18n?.language === "en" ? "us" : i18n?.language}
        />
        <p
          className="text-gray-600 text-sm"
          onClick={() => setOpenSelectedLanguage(true)}
        >
          {langObj[i18n.language]}
        </p>
      </div>
    </>
  );
};
