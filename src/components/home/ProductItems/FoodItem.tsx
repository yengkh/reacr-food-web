import { popularFoodImages } from "@/assets/popularFoodImages/popularFoodImages";
import FoodItems from "./FoodItems";
import { motion } from "framer-motion";

type Props = {};

const FoodItem = (props: Props) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {popularFoodImages.map((items) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          key={items.id}
          className="mb-10 flex px-2 mx-auto"
        >
          <FoodItems
            imageSource={items.image}
            foodDiscount={items.discount}
            foodPrice={items.price}
            foodName={items.name}
            foodRatingStar={items.rating}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FoodItem;
