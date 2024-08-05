import { imageCarouselData } from "@/assets/carouselImages/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ImageCarousel = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === imageCarouselData.length - 1 ? 0 : slide + 1);
  };

  const previoseSlide = () => {
    setSlide(slide === 0 ? imageCarouselData.length - 1 : slide - 1);
  };
  return (
    <div className="lg:w-[90%] mx-auto flex justify-center items-center h-44 md:h-80 lg:h-96 xl:h-[480px] relative">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="absolute text-white w-2 h-2 md:w-5 md:h-5 lg:w-6 lg:h-6 left-1 bg-appBarBackgroundColor p-2 rounded-full cursor-pointer"
        onClick={previoseSlide}
      />
      {imageCarouselData.map((items, index) => {
        return (
          <img
            src={items.image}
            alt=""
            key={items.id}
            className={
              slide === index
                ? "h-full xl:w-[90%] w-5/6 rounded-md"
                : "h-full xl:w-[90%] w-5/6 hidden"
            }
          />
        );
      })}
      <FontAwesomeIcon
        icon={faChevronRight}
        className="absolute  md:w-5 md:h-5 h-2 w-2 lg:w-6 lg:h-6 right-1 bg-appBarBackgroundColor p-2 text-white rounded-full cursor-pointer"
        onClick={nextSlide}
      />
      <span className="absolute flex bottom-5 gap-2">
        {imageCarouselData.map((_, index) => {
          return (
            <button
              type="button"
              key={index}
              className={
                slide === index
                  ? "h-2 w-2 md:h-3 md:w-3 bg-white rounded-full"
                  : "h-2 w-2 md:h-3 md:w-3 bg-appBarBackgroundColor rounded-full"
              }
              onClick={() => setSlide(index)}
            />
          );
        })}
      </span>
    </div>
  );
};

export default ImageCarousel;
