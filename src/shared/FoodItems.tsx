import Rating from "@/components/home/PopularFoods/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
type Props = {
  imageSource: string;
  foodDiscount: number;
  foodPrice: number;
  foodName: string;
  foodRatingStar: number;
};

const FoodItems = ({
  foodRatingStar,

  imageSource,
  foodDiscount,
  foodPrice,
  foodName,
}: Props) => {
  return (
    <div className="w-auto whitespace-nowrap mb-2 cursor-pointer">
      <div className="relative w-56 flex flex-col mx-4 whitespace-normal bg-itemBackgrondColor rounded-md">
        <div className="flex justify-center items-center absolute w-7 h-7 right-3 top-2 bg-lineThroughtColor p-1 rounded-full text-white">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <img src={imageSource} alt="" className="rounded-md h-36 md:h-44" />
        <div className="p-2">
          <p className="flex justify-between font-bold">
            <span className="text-priceColor ">
              <span
                className={`${
                  foodDiscount !== 0
                    ? "line-through decoration-lineThroughtColor"
                    : ""
                }`}
              >
                ${foodPrice}
              </span>
              <span className="ml-2">
                {foodDiscount !== 0
                  ? `$${foodPrice - (foodPrice * foodDiscount) / 100}`
                  : ""}
              </span>
            </span>
            <span>{foodDiscount === 0 ? "" : `${foodDiscount}% Off`}</span>
          </p>
          <Rating rating={foodRatingStar} />
          <p className="text-sm mt-2 hover:underline">{foodName}</p>
        </div>
        <button
          type="button"
          className="bg-appBarBackgroundColor py-1 mt-2 mb-5 mx-4 rounded-md"
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default FoodItems;
