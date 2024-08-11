import { useNavigate } from "react-router-dom";
import EmailInputField from "./EmailInputField";
import PasswordInputField from "./PasswordInputField";
import UserNameInputField from "./UserNameInputField";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ThemeContext from "@/Providers/ThemeProvider";
const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      className={` ${
        theme === "light" ? "" : "text-textColorForDarkMode"
      } py-24 min-h-screen w-5/6 md:w-[70%] lg:w-1/2 mx-auto`}
    >
      <p className={`text-center text-xl font-bold md:text-4xl `}>
        {t("login_title")}
      </p>
      <form className="mt-3 flex flex-col gap-2" method="POST">
        <UserNameInputField theme={theme} />
        <EmailInputField theme={theme} />
        <PasswordInputField theme={theme} title={t("password")} />
        <button type="button" className="justify-end underline text-end">
          {t("forgot_password")}
        </button>
        <button
          type="submit"
          className={`${
            theme === "light"
              ? "bg-appBarBackgroundColor"
              : "bg-appBarBackgroundColorForDark"
          } uppercase mt-5 py-2 px-1 rounded-md`}
        >
          {t("log_in")}
        </button>

        <p className="mt-6 text-center">
          {t("donnot_have_account")}{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/sign-up")}
          >
            {t("sign_up")}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Profile;
