import TitleText from "@/shared/TitleText";
import { motion } from "framer-motion";
import FoodItem from "./FoodItem";

const ProductItems = () => {
  return (
    <section className="mb-8 mt-8">
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
        <TitleText title={"FIND YOUR FAVORITE FOODS"} />
      </motion.div>
      <FoodItem />
    </section>
  );
};

export default ProductItems;
