import { popularFoodImages } from "@/assets/popularFoodImages/popularFoodImages";
import { PopularFoodItemsType } from "@/shared/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../home/PopularFoods/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import TitleTextWithSeeMore from "@/shared/TitleTextWithSeeMore";
import CommentPath from "./CommentPath";
import PopularFoods from "../home/PopularFoods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addFoodToCart } from "@/Redux-Cart/AddToCart";

const DetailPage = () => {
  const { foodName } = useParams<{ foodName: string }>();
  const [detail, setDetail] = useState<Array<PopularFoodItemsType>>([]);
  const [quantity, setQuntity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (foodName) {
      const decodeUrlName = decodeURIComponent(foodName);
      const findDetail = popularFoodImages.filter(
        (product) => product.name === decodeUrlName
      );
      if (findDetail.length > 0) {
        setDetail(findDetail);
      } else {
        navigate("/page-not-found");
      }
    }
  }, [foodName, navigate]);

  if (detail.length === 0) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  const handleAddFoodToCart = (
    name: string,
    price: number,
    discount: number,
    image: string,
    id: number
  ) => {
    dispatch(
      addFoodToCart({
        name: name,
        price: price - (price * discount) / 100,
        quantity: quantity,
        image: image,
        id: id,
      })
    );
    toast.success(
      `${
        quantity > 1
          ? "Foods added to cart successfully!"
          : "Food added to cart successfully!"
      }`
    );
  };

  return (
    <div className="py-20 w-5/6 mx-auto">
      {detail.map((item) => (
        <div
          className="flex flex-col md:flex-row md:gap-5 gap-3 py-5"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.name}
            height={600}
            className="object-cover md:w-1/2"
          />
          <div className="flex flex-col gap-3">
            <p>Name: {item.name}</p>
            <p className="flex justify-between font-bold w-48">
              <span className="text-priceColor">
                <span
                  className={`${
                    item.discount !== 0
                      ? "line-through decoration-lineThroughtColor"
                      : ""
                  }`}
                >
                  ${(item.price * quantity).toFixed(2)}
                </span>
                <span className="ml-2">
                  {item.discount !== 0
                    ? `$${(
                        (item.price - (item.price * item.discount) / 100) *
                        quantity
                      ).toFixed(2)}`
                    : ""}
                </span>
              </span>
              <span>{item.discount === 0 ? "" : `${item.discount}% Off`}</span>
            </p>
            <Rating rating={item.rating} />
            <div className="flex gap-10 items-center px-2">
              <p className="text-lg">{quantity}</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-appBarBackgroundColor w-7 h-7 rounded-md flex justify-center items-center text-white"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuntity((pre) => pre - 1);
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ fontSize: "16px" }}
                  />
                </button>
                <button
                  type="button"
                  className="bg-appBarBackgroundColor w-7 h-7 rounded-md flex justify-center items-center text-white"
                  onClick={() => {
                    setQuntity((pre) => pre + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: "16px" }} />
                </button>
              </div>
            </div>
            <div className="flex mx-auto lg:mx-10 gap-12 mt-5">
              <button
                type="button"
                className="btn bg-appBarBackgroundColor py-2 px-3 rounded-md font-bold text-sm"
              >
                {" "}
                Add To Favorite{" "}
              </button>
              <button
                type="button"
                className="btn bg-appBarBackgroundColor py-2 px-3 rounded-md font-bold text-sm"
                onClick={() =>
                  handleAddFoodToCart(
                    item.name,
                    item.price,
                    item.discount,
                    item.image,
                    item.id
                  )
                }
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
          <div className="flex flex-col gap-4 lg:w-5/6 mt-3">
            <CommentPath stars={4.5} />
            <CommentPath stars={3.5} />
            <CommentPath stars={5} />
          </div>
        </div>
      </div>
      <div>
        <PopularFoods />
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailPage;
