import CarouselSlider from "./CarouselImageSlider";
import FoodMenu from "./FoodMenu";
import PopularFoods from "./PopularFoods";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="mt-14 md:mt-28 z-50 md:w-5/6 md:mx-auto mx-3">
      <CarouselSlider />
      <FoodMenu />
      <PopularFoods />
    </div>
  );
};

export default HomePage;
