import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./RatingStar";
import { motion } from "framer-motion";

type Props = {
  image: string;
  price: number;
  discount: number;
  rating: number;
  name: string;
};

const PopularFoodItems = ({ image, price, discount, name, rating }: Props) => {
  const childVariant = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <motion.div
      variants={childVariant}
      className="w-auto whitespace-nowrap mb-2 cursor-pointer"
    >
      <div className="relative text-[12px] w-44 md:w-[300px] md:text-sm lg:w-64 lg:text-md xl:text-[16px] xl:w-72 h-auto flex flex-col whitespace-normal bg-itemBackgrondColor rounded-md">
        <div className="flex justify-center items-center absolute w-7 h-7 right-3 top-2 bg-lineThroughtColor p-1 rounded-full text-white">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <img src={image} alt="" className="rounded-md h-36 md:h-44 bg-cover" />
        <div className="p-2">
          <p className="flex justify-between font-bold">
            <span className="text-priceColor">
              <span
                className={`${
                  discount !== 0
                    ? "line-through decoration-lineThroughtColor"
                    : ""
                }`}
              >
                ${price}
              </span>
              <span className="ml-2">
                {discount !== 0
                  ? `$${(price - (price * discount) / 100).toFixed(2)}`
                  : ""}
              </span>
            </span>
            <span>{discount === 0 ? "" : `${discount}% Off`}</span>
          </p>
          <Rating rating={rating} />
          <p className="mt-2 hover:underline line-clamp-4">{name}</p>
        </div>
        <button
          type="button"
          className="bg-appBarBackgroundColor py-2 mt-2 mb-5 mx-4 rounded-md font-bold"
        >
          Add To Card
        </button>
      </div>
    </motion.div>
  );
};

export default PopularFoodItems;
