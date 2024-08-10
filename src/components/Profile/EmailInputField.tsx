import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

type Props = {
  theme: string;
};

const EmailInputField = ({ theme }: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <label
        htmlFor="useremail"
        className="block text-sm md:text-lg font-medium leading-6"
      >
        {t("email")}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm md:text-lg">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
        <input
          id="useremail"
          name="useremail"
          type="email"
          required
          className={`${
            theme === "light" ? "" : "text-[#134b70]"
          } block w-full rounded-md border-0 md:text-lg py-1.5 md:py-3 pl-9 pr-8 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
};

export default EmailInputField;
