import { popularFoodImages } from "@/assets/popularFoodImages/popularFoodImages";
import PopularFoodItems from "./PopularFoodItems";
import { motion } from "framer-motion";
type Props = {
  theme: string;
};

const PopularFoodsItem = ({ theme }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="mt-5 flex md:h-auto h-auto overflow-x-scroll overflow-y-hidden"
    >
      {popularFoodImages.map((items) => (
        <div className="flex px-1 " key={items.id}>
          <PopularFoodItems
            image={items.image}
            price={items.price}
            discount={items.discount}
            rating={items.rating}
            name={items.name}
            id={items.id}
            theme={theme}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default PopularFoodsItem;
