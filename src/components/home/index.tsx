import CarouselSlider from "./CarouselImageSlider";
import FoodMenu from "./FoodMenu";
import HomeViewInfor from "./HomeViewInfor";
import OurServies from "./OurServices";
import PaginationPage from "./PaginationPage";
import PopularFoods from "./PopularFoods";
import ProductItems from "./ProductItems";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="mt-14 md:mt-10 lg:mt-20 xl:mt-20 z-50 md:w-5/6 md:mx-auto mx-3">
      <CarouselSlider />
      <FoodMenu />
      <PopularFoods />
      <ProductItems />
      <PaginationPage />
      <OurServies />
      <HomeViewInfor />
    </div>
  );
};

export default HomePage;
