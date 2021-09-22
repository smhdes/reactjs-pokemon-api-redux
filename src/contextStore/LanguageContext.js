import React, { useContext } from "react";
import i18next from "i18next";

const LanguageUpdateContext = React.createContext("tr");

// export const useLanguage = () => {
//   return useContext(LanguageContext);
// };

export const useLanguageChange = () => {
  return useContext(LanguageUpdateContext);
};

const LanguageProvider = ({ children }) => {
  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <LanguageUpdateContext.Provider value={changeLanguage}>
      {children}
    </LanguageUpdateContext.Provider>
  );
};

export default LanguageProvider;
