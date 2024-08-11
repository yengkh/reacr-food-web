import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./RatingStar";
import { motion } from "framer-motion";
import Quantity from "../ProductItems/Quantity";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFoodToCart } from "@/Redux-Cart/AddToCart";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { addToFavorite } from "@/Redux-Cart/AddToFavorite";
type Props = {
  image: string;
  price: number;
  discount: number;
  rating: number;
  name: string;
  id: number;
  theme: string;
};

const PopularFoodItems = ({
  image,
  price,
  discount,
  name,
  rating,
  id,
  theme,
}: Props) => {
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
  const [seeQuantity, setSeeQuantity] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(
      addFoodToCart({
        name: name,
        price: price - (price * discount) / 100,
        quantity: quantity,
        image: image,
        id: id,
      })
    );
    toast.success(
      `${quantity > 1 ? `${t("success_added")}` : `${t("sucess_add")}`}`
    );
  }

  function handleAddToFavorite() {
    dispatch(
      addToFavorite({
        name: name,
        id: id,
        price: price - (price * discount) / 100,
        image: image,
        rating: rating,
        quantity: 1,
      })
    );
    toast.success("Food added to favorite!");
  }

  function showQuntityOption() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function removeQuntity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <motion.div
      variants={childVariant}
      className="w-auto whitespace-nowrap mb-2 cursor-pointer"
    >
      <div
        className={`${
          theme === "light"
            ? "bg-itemBackgrondColor"
            : "bg-itemeBackgroundColorForDark"
        } relative text-[12px] w-44 md:w-[300px] md:text-sm lg:w-64 lg:text-md xl:text-[16px] xl:w-72 h-auto flex flex-col whitespace-normal rounded-md`}
      >
        <button
          type="button"
          className="flex justify-center items-center absolute w-7 h-7 right-3 top-2 bg-lineThroughtColor p-1 rounded-full text-white"
          onClick={handleAddToFavorite}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
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
            navigate(`/view-food-detail/${encodeURIComponent(name)}`)
          }
        >
          <img
            src={image}
            alt=""
            className="rounded-md h-36 md:h-44 object-cover w-full"
          />
          <div className="p-2">
            <p className="flex justify-between font-bold">
              <span
                className={`${theme === "light" ? "text-priceColor" : ""} `}
              >
                <span
                  className={`${
                    discount !== 0
                      ? "line-through decoration-lineThroughtColor"
                      : ""
                  }`}
                >
                  ${(price * quantity).toFixed(2)}
                </span>
                <span className="ml-2">
                  {discount !== 0
                    ? `$${(
                        (price - (price * discount) / 100) *
                        quantity
                      ).toFixed(2)}`
                    : ""}
                </span>
              </span>
              <span>{discount === 0 ? "" : `${discount}% Off`}</span>
            </p>
            <Rating rating={rating} />
            <p
              className={`${
                theme === "light" ? "" : "text-textColorForDarkMode"
              } mt-2 hover:underline line-clamp-4`}
            >
              {name}
            </p>
          </div>
        </div>
        <button
          type="button"
          className={`${
            theme === "light"
              ? "bg-appBarBackgroundColor"
              : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
          }  py-2 mt-2 mb-5 mx-4 rounded-md font-bold`}
          onClick={handleAddToCart}
        >
          {t("add_to_cart")}
        </button>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default PopularFoodItems;
