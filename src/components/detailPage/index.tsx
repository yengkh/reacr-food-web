import { popularFoodImages } from "@/assets/popularFoodImages/popularFoodImages";
import { PopularFoodItemsType } from "@/shared/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../home/PopularFoods/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import CommentPath from "./CommentPath";
import PopularFoods from "../home/PopularFoods";

const DetailPage = () => {
  const { foodName } = useParams<{ foodName: string }>();
  const [detail, setDetail] = useState<Array<PopularFoodItemsType>>([]);
  const [quantity, setQuntity] = useState(1);
  useEffect(() => {
    if (foodName) {
      const findDetail = popularFoodImages.filter(
        (product) => product.name === decodeURIComponent(foodName)
      );
      if (findDetail.length > 0) {
        setDetail(findDetail);
      } else {
        window.alert("No food found!");
      }
    }
  }, [foodName]);

  if (detail.length === 0) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="py-20 w-5/6 mx-auto">
      {detail.map((item) => (
        <div
          className="flex flex-col md:flex-row md:gap-5 gap-3 py-5"
          key={item.id}
        >
          <img src={item.image} alt={item.name} width={600} height={600} />
          <div className="flex flex-col gap-3">
            <p>Name: {item.name}</p>
            <p>Price : ${item.price}</p>
            <Rating rating={item.rating} />
            <div className="flex gap-10 items-center px-2">
              <p className="text-lg">{quantity}</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-appBarBackgroundColor w-9 h-9 rounded-full flex justify-center items-center"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuntity((pre) => pre - 1);
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ fontSize: "22px" }}
                  />
                </button>
                <button
                  type="button"
                  className="bg-appBarBackgroundColor w-9 h-9 rounded-full flex justify-center items-center"
                  onClick={() => {
                    setQuntity((pre) => pre + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: "22px" }} />
                </button>
              </div>
            </div>
            <div className="flex mx-auto gap-16 mt-5">
              <button
                type="button"
                className="btn bg-appBarBackgroundColor py-2 px-3 rounded-md"
              >
                {" "}
                Add To Favorite{" "}
              </button>
              <button
                type="button"
                className="btn bg-appBarBackgroundColor py-2 px-3 rounded-md"
              >
                {" "}
                Add To Cart{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <div>
          <hr className="h-[2px] bg-appBarBackgroundColor mb-3" />
          <TitleTextWithSeeMore title={"Commments"} />
          <div className="flex flex-col gap-2">
            <CommentPath stars={4.5} />
            <CommentPath stars={3.5} />
            <CommentPath stars={5} />
          </div>
        </div>
      </div>
      <div>
        <PopularFoods />
      </div>
    </div>
  );
};

export default DetailPage;
