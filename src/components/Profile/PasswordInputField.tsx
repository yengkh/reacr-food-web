import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

type Props = {
  theme: string;
  title: string;
};

const PasswordInputField = ({ theme, title }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleshowPassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordInputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label
        htmlFor={`userpassword${title}`}
        className="block text-sm font-medium leading-6 md:text-lg"
      >
        {title}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm md:text-lg">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>
        <input
          id={`userpassword${title}`}
          name={`userpassword${title}`}
          type={showPassword === false ? "password" : "text"}
          required
          ref={passwordInputRef}
          className={`${
            theme === "light" ? "" : "text-[#134b70]"
          } block w-full md:text-lg rounded-md border-0 py-1.5 md:py-3 pl-9 pr-8 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center text-sm md:text-lg">
          <button type="button" onClick={handleshowPassword}>
            {showPassword === true ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordInputField;
