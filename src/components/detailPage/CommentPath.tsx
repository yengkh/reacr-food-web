import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../home/PopularFoods/RatingStar";

type Props = {
  stars: number;
  theme: string;
};

const CommentPath = ({ stars, theme }: Props) => {
  const currentDate = new Date();
  const dateTime =
    currentDate.getDay() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 bg-appBarBackgroundColor rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div
        className={`${
          theme === "light" ? "" : "text-textColorForDarkMode"
        } w-5/6`}
      >
        <p className="font-bold">
          Fake Name <span>{dateTime}</span>
        </p>
        <Rating rating={stars} />
        <p className="text-sm pl-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          impedit incidunt, esse sapiente deserunt doloribus.
        </p>
      </div>
    </div>
  );
};

export default CommentPath;
