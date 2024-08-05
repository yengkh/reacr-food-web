import TitleText from "@/shared/TitleText";
import { motion } from "framer-motion";
import FoodMenuItemsCarousel from "./FoodMenuItemsCarousel";

const FoodMenu = () => {
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
        <TitleText title="All FOODS MENU" />
        <p>All the foods you need are here </p>
      </motion.div>
      <FoodMenuItemsCarousel />
    </section>
  );
};

export default FoodMenu;
