import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
type Props = {
  title: string;
  theme: string;
};

const TitleTextWithSeeMore = ({ title, theme }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between mx-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <span
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } font-bold text-lg md:text-2xl`}
        >
          {title}
        </span>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <span
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } hover:underline cursor-pointer`}
        >
          <span> {t("see_more")}</span> <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </motion.div>
    </div>
  );
};

export default TitleTextWithSeeMore;
