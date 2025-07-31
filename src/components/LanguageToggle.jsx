// LanguageContext.jsx (arba LanguageToggle.jsx, jei nori viską viename)

import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Sukuriam context
export const LanguageContext = createContext();

// 2. Provider komponentas
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang === "lt" || storedLang === "en") {
      setLanguage(storedLang);
    } else {
      localStorage.setItem("language", "en");
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "lt" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Toggle komponentas
export const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed z-1000 max-sm:hidden top-5 right-16 px-3 py-1 border rounded border-primary text-primary hover:bg-primary/20 transition"
      aria-label="Toggle language"
    >
      {language === "en" ? "LT" : "EN"}
    </button>
  );
};
