import TitleText from "@/shared/TitleText";
import { motion } from "framer-motion";
import FoodMenuItemsCarousel from "./FoodMenuItemsCarousel";
import { useTranslation } from "react-i18next";
type Props = {
  theme: string;
};

const FoodMenu = ({ theme }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="mt-8">
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
        <TitleText title={t("all_foods_menu")} theme={theme} />
        <p
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } mx-2`}
        >
          {t("all_the_foods_you_need_are_here")}{" "}
        </p>
      </motion.div>
      <FoodMenuItemsCarousel theme={theme} />
    </section>
  );
};

export default FoodMenu;
