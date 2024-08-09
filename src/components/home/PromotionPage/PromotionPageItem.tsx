import { PromotionImageItems } from "@/assets/promotionImages/promotionimageitems";
import { useTranslation } from "react-i18next";
type Props = {
  theme: string;
};
const PromotionPageItem = ({ theme }: Props) => {
  const { t } = useTranslation();
  return (
    <div className=" mt-5 flex w-full md:h-52 lg:h-72 h-[180px] overflow-x-scroll overflow-y-hidden">
      {PromotionImageItems.map((items) => (
        <div key={items.id} className="w-auto whitespace-nowrap ">
          <div className="mx-2 w-80 md:w-96 lg:w-[480px] gap-1 md:gap-2 relative">
            <img
              className="rounded-md object-cover h-40 md:h-44 lg:h-64 w-full"
              src={items.image}
              alt=""
            />
            <div
              className={`${
                theme === "ligth"
                  ? "bg-appBarBackgroundColor"
                  : "bg-backgrondColorForDarkModePromotionBanner"
              } absolute bottom-0 w-full flex justify-between items-center opacity-85 rounded-b-md text-sm py-3 px-1 md:py-4`}
            >
              <p className="text-sm whitespace-normal basis-[80%] text-white">
                {items.description}
              </p>
              <button type="button" className="bg-white rounded-md px-2 py-1">
                {t("see_more")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotionPageItem;
