import { homePageViewInfor } from "@/assets/homePageViewInfor/homePageViewInfor";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "@/Providers/ThemeProvider";

const HomeViewInfor = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section className="mt-10">
      {homePageViewInfor.map((items) => (
        <div
          key={items.id}
          className="mb-10 lg:flex xl:flex gap-8 lg:mt-0 xl:mt-0 items-start"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
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
            className="lg:w-1/2"
          >
            <img src={items.image} alt="" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
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
            className="lg:w-full"
          >
            <p
              className={`${
                theme === "light" ? "" : "text-textColorForDarkMode"
              } text-lg font-bold mt-2 lg:mt-0`}
            >
              {t("our_service")}
            </p>
            <p
              className={`${
                theme === "light" ? "" : "text-textColorForDarkMode"
              } text-sm mt-2 lg:mt-0 xl:mt-0`}
            >
              {items.description}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default HomeViewInfor;
