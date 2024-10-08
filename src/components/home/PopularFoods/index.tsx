import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import PopularFoodsItem from "./PopularFoodsItem";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ThemeContext from "@/Providers/ThemeProvider";
const PopularFoods = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section className="pt-2 mt-8">
      <div>
        <TitleTextWithSeeMore title={t("popular_foods")} theme={theme} />
        <p
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } mx-2`}
        >
          {t("this_are_all_our_popular_foods")}
        </p>
      </div>
      <PopularFoodsItem theme={theme} />
    </section>
  );
};

export default PopularFoods;
