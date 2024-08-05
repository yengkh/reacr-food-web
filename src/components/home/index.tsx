import Footer from "../Footer";
import FoodMenu from "./FoodMenu";
import HomeViewInfor from "./HomeViewInfor";
import OurServies from "./OurServices";
import PaginationPage from "./PaginationPage";
import PopularFoods from "./PopularFoods";
import ProductItems from "./ProductItems";
import Location from "./Location";
import ImageCarousel from "./ImageCarousel";

const HomePage = () => {
  return (
    <div>
      <div className="mt-28 z-50 md:w-5/6 md:mx-auto mx-3">
        <ImageCarousel />
        <FoodMenu />
        <PopularFoods />
        <ProductItems />
        <PaginationPage />
        <OurServies />
        <Location />
        <HomeViewInfor />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
