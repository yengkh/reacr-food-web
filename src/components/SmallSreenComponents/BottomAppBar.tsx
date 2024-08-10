import { SelectedPage } from "@/shared/types";
import {
  faHome,
  faHeart,
  faShoppingBasket,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
  selectePage: SelectedPage;
  setSelectedpage: (value: SelectedPage) => void;
  settingClick: () => void;
  theme: string;
};

const BottomAppBar = ({
  selectePage,
  setSelectedpage,
  settingClick,
  theme,
}: Props) => {
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-appBarBackgroundColor"
          : "bg-appBarBackgroundColorForDark"
      } z-50 py-4 flex justify-between px-10 fixed bottom-0 left-0 right-0 border-t-2`}
    >
      <Link
        to={"/"}
        className={`${
          selectePage === SelectedPage.Home ? "text-textColorForDarkMode" : ""
        }`}
        onClick={() => setSelectedpage(SelectedPage.Home)}
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link
        to={"favorite"}
        className={`${
          selectePage === SelectedPage.Favorite
            ? "text-textColorForDarkMode"
            : ""
        }`}
        onClick={() => setSelectedpage(SelectedPage.Favorite)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link
        to={"cart"}
        className={`${
          selectePage === SelectedPage.Cart ? "text-textColorForDarkMode" : ""
        }`}
        onClick={() => setSelectedpage(SelectedPage.Cart)}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
      </Link>
      <Link
        to={"log-in"}
        className={`${
          selectePage === SelectedPage.Profile
            ? "text-textColorForDarkMode"
            : ""
        }`}
        onClick={() => setSelectedpage(SelectedPage.Profile)}
      >
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <button type="button" onClick={settingClick}>
        <FontAwesomeIcon icon={faGear} />
      </button>
    </div>
  );
};

export default BottomAppBar;
