import Footer from "../Footer";
import FoodMenu from "./FoodMenu";
import HomeViewInfor from "./HomeViewInfor";
import OurServies from "./OurServices";
import PaginationPage from "./PaginationPage";
import PopularFoods from "./PopularFoods";
import ProductItems from "./ProductItems";
import ImageCarousel from "./ImageCarousel";
import PromotionPage from "./PromotionPage";
type Props = {
  theme: string;
};

const HomePage = ({ theme }: Props) => {
  return (
    <div>
      <div className="pt-20 md:pt-28 z-50 md:w-5/6 md:mx-auto">
        <ImageCarousel theme={theme} />
        <PromotionPage theme={theme} />
        <FoodMenu theme={theme} />
        <PopularFoods theme={theme} />
        <ProductItems theme={theme} />
        <PaginationPage theme={theme} />
        <div className="mx-2">
          <OurServies theme={theme} />
          <HomeViewInfor theme={theme} />
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default HomePage;
