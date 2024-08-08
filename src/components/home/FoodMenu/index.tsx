import TitleText from "@/shared/TitleText";
import { motion } from "framer-motion";
import FoodMenuItemsCarousel from "./FoodMenuItemsCarousel";
type Props = {
  theme: string;
};

const FoodMenu = ({ theme }: Props) => {
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
        <TitleText title="All FOODS MENU" theme={theme} />
        <p
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } mx-2`}
        >
          All the foods you need are here{" "}
        </p>
      </motion.div>
      <FoodMenuItemsCarousel theme={theme} />
    </section>
  );
};

export default FoodMenu;
