import { foodMenuItems } from "@/assets/foodmenuimagecarousel/items";
import { Link } from "react-router-dom";

const FoodMenuItemsCarousel = () => {
  return (
    <div className=" mt-5 flex w-full md:h-52 h-[200px] overflow-x-scroll overflow-y-hidden">
      {foodMenuItems.map((items, index) => (
        <div key={items.id} className="w-auto whitespace-nowrap ">
          <Link to={`/food-menu/${encodeURIComponent(items.name)}`}>
            <div className="flex flex-col mx-4 w-56 gap-1 md:gap-2">
              <img
                className="rounded-md object-cover h-40"
                src={items.image}
                alt=""
              />
              <p className="text-center">
                {items.name} {index + 1}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FoodMenuItemsCarousel;
