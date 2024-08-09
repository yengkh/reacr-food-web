import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
type Props = {
  theme: string;
};

const Footer = ({ theme }: Props) => {
  const { t } = useTranslation();
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-appBarBackgroundColor"
          : "bg-appBarBackgroundColorForDark"
      } pb-16 pt-5 mt-5 md:pb-5 lg:pb-5 xl:pb-5  w-full`}
    >
      <div className="w-5/6 text-sm mx-auto flex flex-col justify-around gap-2 items-start md:flex-row">
        <div className="basis-[30%]">
          <p
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            } font-bold`}
          >
            Logo
          </p>
          <p
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            }`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            dignissimos quidem omnis autem nam laboriosam.
          </p>
        </div>
        <div className=" md:w-[30%]">
          <p
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            } font-bold`}
          >
            Links
          </p>
          <div
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            }`}
          >
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="mb-2">
          <p
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            } font-bold`}
          >
            {t("contact_us")}
          </p>
          <div
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            } flex gap-2 my-2 flex-col items-start`}
          >
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "30px", color: "white" }}
              />
              <p className="hover:underline">Facebook</p>
            </div>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              <FontAwesomeIcon
                icon={faTelegram}
                style={{ fontSize: "30px", color: "white" }}
                className="cursor-pointer"
              />
              <p className="hover:underline">Telegram</p>
            </div>
          </div>
          <p
            className={`${
              theme === "light" ? "text-white" : "text-textColorForDarkMode"
            }`}
          >
            (+855) 123456789
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
