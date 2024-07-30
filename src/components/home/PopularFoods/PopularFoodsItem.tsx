import { popularFoodImages } from "@/assets/popularFoodImages/popularFoodImages";
import FoodItems from "@/shared/FoodItems";
type Props = {};

const PopularFoodsItem = (props: Props) => {
  return (
    <div className="mt-5 md:mt-10 flex w-full md:h-auto h-auto overflow-x-scroll overflow-y-hidden">
      {popularFoodImages.map((items) => (
        <FoodItems
          key={items.id}
          foodDiscount={items.discount}
          foodName={items.name}
          foodPrice={items.price}
          foodRatingStar={items.rating}
          imageSource={items.image}
        />
      ))}
    </div>
  );
};

export default PopularFoodsItem;
