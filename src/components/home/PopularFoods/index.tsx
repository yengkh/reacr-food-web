import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import PopularFoodsItem from "./PopularFoodsItem";
type Props = {
  theme: string;
};

const PopularFoods = ({ theme }: Props) => {
  return (
    <section className="pt-2 mt-8">
      <div>
        <TitleTextWithSeeMore title="POPULAR FOODS" theme={theme} />
        <p
          className={`${
            theme === "light" ? "" : "text-textColorForDarkMode"
          } mx-2`}
        >
          This are all our popular foods
        </p>
      </div>
      <PopularFoodsItem theme={theme} />
    </section>
  );
};

export default PopularFoods;
