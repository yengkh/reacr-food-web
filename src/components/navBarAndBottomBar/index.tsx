import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faBasketShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "@/hook/useMediaQuery";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (values: SelectedPage) => void;
};

const NavBarAndBottomBar = ({ setSelectedPage, selectedPage }: Props) => {
  const ScreenSize = useMediaQuery("(min-width: 600px)");
  return (
    <nav className="w-full z-50">
      {/* TOP */}
      <div className="bg-appBarBackgroundColor py-3 md:py-5 flex fixed  top-0 right-0 left-0 justify-between px-14 text-white">
        <p className="w-1/4">Logo</p>
        {ScreenSize ? (
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="flex justify-between w-full">
              <div className="flex gap-14">
                <Link
                  title="Home"
                  page="Home"
                  iconData={faHouse}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  title="Favorite"
                  page="Favorite"
                  iconData={faHeart}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  title="Cart"
                  page="Cart"
                  iconData={faBasketShopping}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div>
                <Link
                  title="Profile"
                  page="Profile"
                  iconData={faUser}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          </div>
        ) : (
          <button type="button">
            {" "}
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>
        )}
      </div>
      {/* BOTTOM */}
      {!ScreenSize && (
        <div className="bg-appBarBackgroundColor py-4 flex justify-between px-10 fixed bottom-0 left-0 right-0 ">
          <Link
            title="Home"
            iconData={faHouse}
            selectedPage={SelectedPage.Home}
            setSelectedPage={setSelectedPage}
          />

          <Link
            title=""
            iconData={faHeart}
            selectedPage={SelectedPage.Favorite}
            setSelectedPage={setSelectedPage}
          />
          <Link
            title=""
            iconData={faBasketShopping}
            selectedPage={SelectedPage.Cart}
            setSelectedPage={setSelectedPage}
          />
          <Link
            title=""
            iconData={faUser}
            selectedPage={SelectedPage.Profile}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}
    </nav>
  );
};

export default NavBarAndBottomBar;
