import Rating from "@/components/home/PopularFoods/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Quantity from "./Quantity";

type Props = {
  imageSource: string;
  foodDiscount: number;
  foodPrice: number;
  foodName: string;
  foodRatingStar: number;
};

const FoodItems = ({
  foodRatingStar,
  imageSource,
  foodDiscount,
  foodPrice,
  foodName,
}: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const [seeQuantity, setSeeQuantity] = useState<boolean>(false);

  return (
    <motion.div variants={childVariant}>
      <div className="w-auto whitespace-nowrap cursor-pointer">
        <div className="relative text-[12px] w-auto md:text-sm lg:text-[14px] xl:text-[16px] h-auto flex flex-col whitespace-normal bg-itemBackgrondColor rounded-md">
          <div className="flex justify-center items-center absolute w-7 h-7 right-3 top-2 bg-lineThroughtColor p-1 rounded-full text-white">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <button
            onClick={() => setSeeQuantity(true)}
            type="button"
            className={`absolute right-3 w-7 h-7 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]`}
          >
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: "18px" }} />
          </button>
          <img
            src={imageSource}
            alt=""
            className="rounded-md h-36 md:h-44 bg-cover bg-no-repeat"
          />
          <Quantity
            seeQuantity={seeQuantity}
            setSeeQuantity={() => setSeeQuantity(true)}
          />
          <div className="p-2">
            <p className="flex justify-between font-bold">
              <span className="text-priceColor">
                <span
                  className={`${
                    foodDiscount !== 0
                      ? "line-through decoration-lineThroughtColor"
                      : ""
                  }`}
                >
                  ${foodPrice}
                </span>
                <span className="ml-2">
                  {foodDiscount !== 0
                    ? `$${(
                        foodPrice -
                        (foodPrice * foodDiscount) / 100
                      ).toFixed(2)}`
                    : ""}
                </span>
              </span>
              <span>{foodDiscount === 0 ? "" : `${foodDiscount}% Off`}</span>
            </p>
            <Rating rating={foodRatingStar} />
            <p className="mt-2 hover:underline line-clamp-4">{foodName}</p>
          </div>
          <button
            type="button"
            className="bg-appBarBackgroundColor py-2 mt-2 mb-5 mx-4 rounded-md font-bold"
            onClick={() => setSeeQuantity(false)}
          >
            Add To Card
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItems;
