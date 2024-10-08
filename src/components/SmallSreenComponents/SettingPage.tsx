import {
  faXmark,
  faSun,
  faMoon,
  faEarthAfrica,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import English from "@/assets/flags/United_Kingdom.webp";
import Khmer from "@/assets/flags/Flag_of_Cambodia.png";
import China from "@/assets/flags/Flag_of_the_People's_Republic_of_China.png";
import { useTranslation } from "react-i18next";

type Props = {
  setting: boolean;
  setSetting: (value: boolean) => void;
  selectedTheme: string;
  handleThemeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SettingPage = ({
  setting,
  setSetting,
  selectedTheme,
  handleThemeChange,
}: Props) => {
  const [selectLanguage, setSelectlanguage] = useState(
    localStorage.getItem("select_language") || "english"
  );

  useEffect(() => {
    localStorage.setItem("select_language", selectLanguage);
  }, [selectLanguage]);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectlanguage(event.target.value);
  };

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`${setting === false ? "hidden" : ""} ${
        selectedTheme === "light"
          ? "bg-appBarBackgroundColor"
          : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
      } w-[50%] md:w-[300px]  z-20 bg-appBarBackgroundColor fixed h-[100%] top-10 right-0 pt-12`}
    >
      <div className="flex justify-end pr-6">
        <button type="button" onClick={() => setSetting(false)}>
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px" }} />
        </button>
      </div>
      <p className="text-center font-bold"> {t("setting")} </p>
      {/* Theme Mode */}
      <p className="px-3 font-bold mt-5">
        {" "}
        <span>
          <FontAwesomeIcon icon={faPalette} />
        </span>{" "}
        {t("theme_mode")}
      </p>
      <div className="mt-3 px-3 w-5/6 mx-auto text-sm flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <label htmlFor="light-theme">
            <span>
              <FontAwesomeIcon icon={faSun} />
            </span>{" "}
            {t("light_mode")}
          </label>
          <input
            type="radio"
            id="light-theme"
            name="theme-mode"
            value="light"
            checked={selectedTheme === "light"}
            onChange={handleThemeChange}
          />
        </div>
        <div className="flex justify-between items-start">
          <label htmlFor="dark-theme">
            <span>
              <FontAwesomeIcon icon={faMoon} />
            </span>{" "}
            {t("dark_theme")}
          </label>
          <input
            type="radio"
            id="dark-theme"
            name="theme-mode"
            value="dark"
            checked={selectedTheme === "dark"}
            onChange={handleThemeChange}
          />
        </div>
      </div>

      {/* Languages */}
      <p className="mx-3 mt-5 font-bold">
        {" "}
        <span>
          <FontAwesomeIcon icon={faEarthAfrica} />
        </span>{" "}
        {t("languages")}
      </p>
      <div className="mt-3 px-3 w-5/6 mx-auto text-sm flex flex-col gap-3">
        <div className="flex justify-between">
          <label htmlFor="uk-language" className="flex gap-2">
            {" "}
            <span>
              <img src={English} alt="" className="h-6 w-10" />
            </span>{" "}
            {t("english")}
          </label>
          <input
            type="radio"
            id="uk-language"
            name="language"
            value={"english"}
            checked={selectLanguage === "english"}
            onChange={handleLanguageChange}
            onClick={() => changeLanguage("en")}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="khmer-language" className="flex items-center gap-2">
            {" "}
            <span>
              <img src={Khmer} alt="" className="h-6 w-10" />
            </span>{" "}
            {t("khmer")}
          </label>
          <input
            type="radio"
            id="khmer-language"
            name="language"
            value={"khmer"}
            checked={selectLanguage === "khmer"}
            onChange={handleLanguageChange}
            onClick={() => changeLanguage("km")}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="china-language" className="flex gap-2">
            {" "}
            <span>
              <img src={China} alt="" className="h-6 w-10" />
            </span>{" "}
            {t("chiness")}
          </label>
          <input
            type="radio"
            id="china-language"
            name="language"
            value={"china"}
            checked={selectLanguage === "china"}
            onChange={handleLanguageChange}
            onClick={() => changeLanguage("zh")}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
