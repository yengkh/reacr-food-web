import { foodMenuItems } from "@/assets/foodmenuimagecarousel/items";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  menu: boolean;
  setMenu: (value: boolean) => void;
  theme: string;
};

const FoodMenuComponent = ({ menu, setMenu, theme }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${menu === false ? "hidden" : ""} ${
        theme === "light"
          ? "bg-appBarBackgroundColor"
          : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
      } w-[60%] z-20 fixed h-[100%] top-10 right-0 pt-12 overflow-y-auto pb-24`}
    >
      <div className="flex justify-end pr-6">
        <button type="button" onClick={() => setMenu(false)}>
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px" }} />
        </button>
      </div>
      <p className="text-center font-bold"> {t("food_menu")} </p>
      {foodMenuItems.map((items) => (
        <Link
          to={`/food-menu/${encodeURIComponent(items.name)}`}
          key={items.id}
          onClick={() => setMenu(false)}
        >
          <div className="flex gap-3 px-3 mb-2 mt-5">
            <img src={items.image} alt="" className="w-[60%] h-16" />
            <p>{items.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FoodMenuComponent;
