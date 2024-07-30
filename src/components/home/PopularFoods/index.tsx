import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import PopularFoodsItem from "./PopularFoodsItem";

type Props = {};

const PopularFoods = (props: Props) => {
  return (
    <section className="pt-2 md:pt-8 pb-20">
      <div>
        <TitleTextWithSeeMore title="Popular Foods" />
        <p>This are all our popular foods</p>
      </div>
      <PopularFoodsItem />
    </section>
  );
};

export default PopularFoods;
