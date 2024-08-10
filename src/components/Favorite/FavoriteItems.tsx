import { AddToFavoriteType } from "@/shared/types";
import { t } from "i18next";
import Rating from "../home/PopularFoods/RatingStar";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addFoodToCart } from "@/Redux-Cart/AddToCart";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  updateFoodQuanityInFavorit,
  removeFoodFromFavorite,
} from "@/Redux-Cart/AddToFavorite";

type Props = {
  theme: string;
  data: AddToFavoriteType;
};

const FavoriteItems = ({ theme, data }: Props) => {
  const totalPrice = data.price * data.quantity;
  const dispatch = useDispatch();
  const handleAddFoodToCart = () => {
    dispatch(
      addFoodToCart({
        id: data.id,
        image: data.image,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
      })
    );
    toast.success(
      `${data.quantity > 1 ? `${t("success_added")}` : `${"sucess_add"}`}`
    );
  };
  const handleMinusQuantity = (id: number) => {
    if (data.quantity > 1) {
      dispatch(updateFoodQuanityInFavorit({ id: id, quantity: -1 }));
    }
  };

  const handlePlushQuantity = (id: number) => {
    dispatch(updateFoodQuanityInFavorit({ id: id, quantity: +1 }));
  };

  const handlRemoveFood = (id: number) => {
    dispatch(removeFoodFromFavorite(id));
    toast.success("Food removed from favorite!");
  };
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-itemBackgrondColor"
          : "bg-itemeBackgroundColorForDark"
      } flex flex-col md:flex-row gap-5 mb-8 rounded-md`}
    >
      <div className=" md:w-[380px] lg:w-[500px]">
        <img
          src={data.image}
          alt="product image"
          className="object-cover h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 pb-5">
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {data.name}
        </p>
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {t("price")}: ${totalPrice.toFixed(2)}
        </p>
        <Rating rating={data.rating} />
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          Quauntity: {data.quantity}
        </p>
        <div className="flex gap-5 pl-5 pt-2">
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor text-white"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } p-1 h-7 w-7 flex justify-center items-center rounded-md`}
            onClick={() => handleMinusQuantity(data.id)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor text-white"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } p-1 h-7 w-7 flex justify-center items-center rounded-md`}
            onClick={() => handlePlushQuantity(data.id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="flex gap-7 mt-5 justify-center items-center lg:justify-start lg:items-start">
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor text-white"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } py-2 px-3 rounded-md`}
            onClick={() => handlRemoveFood(data.id)}
          >
            {t("remove")}
          </button>
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor text-white"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } py-2 px-3 rounded-md`}
            onClick={handleAddFoodToCart}
          >
            {t("add_to_cart")}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavoriteItems;
