import Rating from "@/components/home/PopularFoods/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { addFoodToCart } from "@/Redux-Cart/AddToCart";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { addToFavorite } from "@/Redux-Cart/AddToFavorite";

type Props = {
  imageSource: string;
  foodDiscount: number;
  foodPrice: number;
  foodName: string;
  foodRatingStar: number;
  id: number;
  theme: string;
  rating: number;
};

const FoodItems = ({
  foodRatingStar,
  imageSource,
  foodDiscount,
  foodPrice,
  foodName,
  id,
  theme,
  rating,
}: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const [seeQuantity, setSeeQuantity] = useState<boolean>(false);

  const dispatch = useDispatch();
  function handleAddToCart() {
    //setSeeQuantity(false);
    dispatch(
      addFoodToCart({
        name: foodName,
        price: foodPrice - (foodPrice * foodDiscount) / 100,
        quantity: quantity,
        image: imageSource,
        id: id,
      })
    );
    toast.success(
      `${quantity > 1 ? `${t("success_added")}` : `${"sucess_add"}`}`
    );
  }

  const [quantity, setQuantity] = useState(1);

  function showQuntityOption() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function removeQuntity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  const handleAddFoodToFavorite = () => {
    dispatch(
      addToFavorite({
        id: id,
        image: imageSource,
        name: foodName,
        price: foodPrice - (foodPrice * foodDiscount) / 100,
        quantity: 1,
        rating: rating,
      })
    );
    toast.success("Food added to favorite!");
  };

  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <motion.div variants={childVariant}>
      <div className="w-auto whitespace-nowrap cursor-pointer">
        <div
          className={`${
            theme === "light"
              ? "bg-itemBackgrondColor"
              : "bg-itemeBackgroundColorForDark"
          } relative text-[12px] w-auto md:text-sm lg:text-[14px] xl:text-[16px] h-auto flex flex-col whitespace-normal  rounded-md`}
        >
          <div className="flex justify-center items-center absolute w-7 h-7 right-3 top-2 bg-lineThroughtColor p-1 rounded-full text-white">
            <button type="button" onClick={handleAddFoodToFavorite}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <button
            onClick={() => setSeeQuantity(true)}
            type="button"
            className={`absolute right-3 w-6 h-6 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]`}
          >
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: "14px" }} />
          </button>
          <Quantity
            seeQuantity={seeQuantity}
            quantity={quantity}
            removeQuntity={removeQuntity}
            showQuntityOption={showQuntityOption}
          />
          <div
            onClick={() =>
              navigate(`/view-food-detail/${encodeURIComponent(foodName)}`)
            }
          >
            <img
              src={imageSource}
              alt=""
              className="rounded-md h-36 md:h-44 bg-cover object-cover w-full"
            />

            <div className="p-2">
              <p className="flex justify-between font-bold">
                <span
                  className={`${theme === "light" ? "text-priceColor" : ""}`}
                >
                  <span
                    className={`${
                      foodDiscount !== 0
                        ? "line-through decoration-lineThroughtColor"
                        : ""
                    }`}
                  >
                    ${(foodPrice * quantity).toFixed(2)}
                  </span>
                  <span className="ml-2">
                    {foodDiscount !== 0
                      ? `$${(
                          (foodPrice - (foodPrice * foodDiscount) / 100) *
                          quantity
                        ).toFixed(2)}`
                      : ""}
                  </span>
                </span>
                <span>{foodDiscount === 0 ? "" : `${foodDiscount}% Off`}</span>
              </p>
              <Rating rating={foodRatingStar} />
              <p
                className={`${
                  theme === "light" ? "" : "text-textColorForDarkMode"
                } mt-2 hover:underline line-clamp-4`}
              >
                {foodName}
              </p>
            </div>
          </div>
          <button
            type="button"
            className={` ${
              theme === "light"
                ? "bg-appBarBackgroundColor"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } py-2 mt-2 mb-5 mx-4 rounded-md font-bold`}
            onClick={handleAddToCart}
          >
            {t("add_to_cart")}
          </button>
          <ToastContainer />
        </div>
      </div>
    </motion.div>
  );
};

export default FoodItems;
