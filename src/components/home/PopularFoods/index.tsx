import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import PopularFoodsItem from "./PopularFoodsItem";

type Props = {};

const PopularFoods = (props: Props) => {
  return (
    <section className="pt-2 mt-8">
      <div>
        <TitleTextWithSeeMore title="POPULAR FOODS" />
        <p>This are all our popular foods</p>
      </div>
      <PopularFoodsItem />
    </section>
  );
};

export default PopularFoods;
