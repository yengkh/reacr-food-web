import TitleText from "@/shared/TitleText";
import PromotionPageItem from "./PromotionPageItem";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ThemeContext from "@/Providers/ThemeProvider";

const PromotionPage = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="mt-10">
      <TitleText title={t("Specail_day_for_you")} theme={theme} />
      <PromotionPageItem theme={theme} />
    </div>
  );
};

export default PromotionPage;
