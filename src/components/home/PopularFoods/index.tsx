import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import PopularFoodsItem from "./PopularFoodsItem";

const PopularFoods = () => {
  return (
    <section className="pt-2 mt-8">
      <div>
        <TitleTextWithSeeMore title="POPULAR FOODS" />
        <p className="mx-2">This are all our popular foods</p>
      </div>
      <PopularFoodsItem />
    </section>
  );
};

export default PopularFoods;
