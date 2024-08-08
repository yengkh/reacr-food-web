import { imageCarouselData } from "@/assets/carouselImages/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
type Props = {
  theme: string;
};

const ImageCarousel = ({ theme }: Props) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === imageCarouselData.length - 1 ? 0 : slide + 1);
  };

  const previoseSlide = () => {
    setSlide(slide === 0 ? imageCarouselData.length - 1 : slide - 1);
  };
  return (
    <div className="lg:w-[90%] mx-2 flex justify-center items-center h-44 md:h-80 lg:h-96 xl:h-[480px] relative">
      <button type="button">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`${
            theme === "light"
              ? "text-white bg-appBarBackgroundColor"
              : "text-textColorForDarkMode bg-appBarBackgroundColorForDark"
          } absolute  w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 left-1  p-2 rounded-full cursor-pointer`}
          onClick={previoseSlide}
        />
      </button>
      {imageCarouselData.map((items, index) => {
        return (
          <img
            src={items.image}
            alt=""
            key={items.id}
            className={
              slide === index
                ? "h-full w-full rounded-md object-cover"
                : "h-full w-full hidden"
            }
          />
        );
      })}
      <button type="button">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${
            theme === "light"
              ? "bg-appBarBackgroundColor text-white"
              : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
          } absolute  md:w-5 md:h-5 h-4 w-4 lg:w-6 lg:h-6 right-1  p-2  rounded-full cursor-pointer`}
          onClick={nextSlide}
        />
      </button>
      <span className="absolute flex bottom-5 gap-2">
        {imageCarouselData.map((_, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${
                slide === index
                  ? `${
                      theme === "light" ? "bg-white" : "bg-textColorForDarkMode"
                    } h-2 w-2 md:h-3 md:w-3 rounded-full`
                  : `${
                      theme === "light"
                        ? "bg-appBarBackgroundColor"
                        : "bg-appBarBackgroundColorForDark"
                    } h-2 w-2 md:h-3 md:w-3 rounded-full`
              }`}
              onClick={() => setSlide(index)}
            />
          );
        })}
      </span>
    </div>
  );
};

export default ImageCarousel;
