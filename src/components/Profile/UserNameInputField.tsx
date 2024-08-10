import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  theme: string;
};

const UserNameInputField = ({ theme }: Props) => {
  const { t } = useTranslation();
  const inputUserNameRef = useRef<HTMLInputElement>(null);
  const clearUserName = () => {
    if (inputUserNameRef.current) {
      inputUserNameRef.current.value = "";
      inputUserNameRef.current.focus();
    }
  };
  return (
    <div>
      <label
        htmlFor="username"
        className="block text-sm md:text-lg font-medium leading-6"
      >
        {t("user_name")}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm md:text-lg">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <input
          id="username"
          name="username"
          type="text"
          required
          ref={inputUserNameRef}
          className={`${
            theme === "light" ? "" : "text-[#134b70]"
          } block w-full rounded-md border-0 py-1.5 md:py-3 pl-8 pr-8 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-lg sm:leading-6`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center text-sm md:text-lg">
          <button type="button" onClick={clearUserName}>
            <FontAwesomeIcon icon={faXmark} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNameInputField;
