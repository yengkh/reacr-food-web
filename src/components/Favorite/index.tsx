import { RootState } from "@/Redux-Cart";
import { useSelector } from "react-redux";
import FavoriteItems from "./FavoriteItems";
import EmptyProduct from "@/assets/empty-product/product-is-empty-8044872-6430781.webp";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
type Props = {
  theme: string;
};
const Favorite = ({ theme }: Props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { t } = useTranslation();
  const favorites = useSelector((store: RootState) => store.favorite.items);
  if (favorites.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center w-screen h-screen">
        <img src={EmptyProduct} alt="" />
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {t("emty_cart")}
        </p>
      </div>
    );
  }
  return (
    <div className="py-12 min-h-screen">
      <div className="w-5/6 mx-auto mt-14 text-sm lg:w-[70%] xl:w-1/2">
        {favorites.map((items) => (
          <FavoriteItems key={items.id} data={items} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
