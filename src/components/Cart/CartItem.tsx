import { FoodItem } from "@/Redux-Cart/AddToCart";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

type Props = {
  data: FoodItem;
  onAddQuantity: (id: number) => void;
  onRemoveQuantity: (id: number) => void;
  onRemoveItem: (id: number) => void;
  theme: string;
};
const CartItem = ({
  data,
  onAddQuantity,
  onRemoveQuantity,
  onRemoveItem,
  theme,
}: Props) => {
  const totalPrice = data.price * data.quantity;
  const { t } = useTranslation();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-itemBackgrondColor"
          : "bg-itemeBackgroundColorForDark"
      } flex flex-col md:flex-row gap-5 mb-8 rounded-md`}
    >
      <div className=" md:w-[400px] lg:w-[500px]">
        <img
          src={data.image}
          alt="product image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 pb-5">
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {data.name}
        </p>
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {t("price")}: ${totalPrice.toFixed(2)}
        </p>
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {t("quantity")}: {data.quantity}
        </p>
        <div className="flex gap-5 pl-5 pt-2">
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor text-white"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            } p-1 h-7 w-7 flex justify-center items-center rounded-md`}
            onClick={() => onRemoveQuantity(data.id)}
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
            onClick={() => onAddQuantity(data.id)}
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
            onClick={() => onRemoveItem(data.id)}
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
          >
            {t("check_out")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
