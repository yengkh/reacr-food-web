import Footer from "../Footer";
import FoodMenu from "./FoodMenu";
import HomeViewInfor from "./HomeViewInfor";
import OurServies from "./OurServices";
import PaginationPage from "./PaginationPage";
import PopularFoods from "./PopularFoods";
import ProductItems from "./ProductItems";
import ImageCarousel from "./ImageCarousel";
import PromotionPage from "./PromotionPage";

const HomePage = () => {
  return (
    <div>
      <div className="mt-20 md:mt-28 z-50 md:w-5/6 md:mx-auto">
        <ImageCarousel />
        <PromotionPage />
        <FoodMenu />
        <PopularFoods />
        <ProductItems />
        <PaginationPage />
        <div className="mx-2">
          <OurServies />
          {/* <Location /> */}
          <HomeViewInfor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
