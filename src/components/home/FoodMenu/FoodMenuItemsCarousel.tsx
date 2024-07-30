import { foodMenuItems } from "@/assets/foodmenuimagecarousel/items";
type Props = {};

const FoodMenuItemsCarousel = (props: Props) => {
  return (
    <div className=" mt-5 md:mt-10 flex w-full md:h-52 h-48 overflow-x-scroll overflow-y-hidden">
      {foodMenuItems.map((items) => (
        <div key={items.id} className="w-auto whitespace-nowrap ">
          <div className="flex flex-col mx-4 w-56 gap-1 md:gap-3">
            <img className="rounded-md" src={items.image} alt="" />
            <p className="text-center">{items.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodMenuItemsCarousel;
