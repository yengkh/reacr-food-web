import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home";
import Favorite from "./components/Favorite";
import {
  faHome,
  faHeart,
  faShoppingBasket,
  faBars,
  faUser,
  faGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SelectedPage } from "./shared/types";
import LinkNavigation from "./components/Links";
import Cart from "./components/Cart";
import useMediaQuery from "./hook/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./components/Profile";
const App = () => {
  const [selectePage, setSelectedpage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [setting, setSetting] = useState(false);
  const [menu, setMenu] = useState(false);
  const ScreenSize = useMediaQuery("(min-width: 600px)");
  const [settingLarg, setSettingLarg] = useState(false);
  function settingClick() {
    setSetting(!setting);
  }
  function menuClick() {
    setMenu(!menu);
  }
  return (
    <div className="relative">
      <Router>
        <div className="w-full bg-appBarBackgroundColor fixed top-0 left-0 right-0 z-50">
          <div className="flex w-5/6 mx-auto py-5 justify-between items-center">
            <div>
              <p>Logo</p>
            </div>
            {ScreenSize ? (
              <div className="w-5/6 flex justify-between">
                <div className="flex gap-8 items-center">
                  <LinkNavigation
                    changePage={() => setSelectedpage(SelectedPage.Home)}
                    linkTitle={"/"}
                    linkName={SelectedPage.Home}
                    linkIcon={faHome}
                    checkActiveLink={selectePage === SelectedPage.Home}
                  />
                  <LinkNavigation
                    changePage={() => setSelectedpage(SelectedPage.Favorite)}
                    linkTitle={"favorite"}
                    linkName={SelectedPage.Favorite}
                    linkIcon={faHeart}
                    checkActiveLink={selectePage === SelectedPage.Favorite}
                  />
                  <LinkNavigation
                    changePage={() => setSelectedpage(SelectedPage.Cart)}
                    linkTitle={"cart"}
                    linkName={SelectedPage.Cart}
                    linkIcon={faShoppingBasket}
                    checkActiveLink={selectePage === SelectedPage.Cart}
                  />
                </div>
                <div>
                  <LinkNavigation
                    changePage={() => setSelectedpage(SelectedPage.Profile)}
                    linkTitle={"login"}
                    linkName={SelectedPage.Profile}
                    linkIcon={faUser}
                    checkActiveLink={selectePage === SelectedPage.Profile}
                  />
                </div>
              </div>
            ) : (
              <button type="button" onClick={menuClick}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            )}
          </div>
        </div>
        {!ScreenSize && (
          <>
            <div className="bg-appBarBackgroundColor z-50 py-4 flex justify-between px-10 fixed bottom-0 left-0 right-0 border-t-2">
              <Link
                to={"/"}
                className={`${
                  selectePage === SelectedPage.Home ? "text-white" : ""
                }`}
                onClick={() => setSelectedpage(SelectedPage.Home)}
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <Link
                to={"favorite"}
                className={`${
                  selectePage === SelectedPage.Favorite ? "text-white" : ""
                }`}
                onClick={() => setSelectedpage(SelectedPage.Favorite)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link
                to={"cart"}
                className={`${
                  selectePage === SelectedPage.Cart ? "text-white" : ""
                }`}
                onClick={() => setSelectedpage(SelectedPage.Cart)}
              >
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Link>
              <Link
                to={"login"}
                className={`${
                  selectePage === SelectedPage.Profile ? "text-white" : ""
                }`}
                onClick={() => setSelectedpage(SelectedPage.Profile)}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <button type="button" onClick={settingClick}>
                <FontAwesomeIcon icon={faGear} />
              </button>
            </div>
            {/* Setting */}
            <div
              className={`${
                setting === false ? "hidden" : ""
              } w-1/2 z-20 bg-appBarBackgroundColor fixed h-[100%] top-10 right-0 pt-12`}
            >
              <div className="flex justify-end pr-6">
                <button type="button" onClick={() => setSetting(false)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ fontSize: "20px" }}
                  />
                </button>
              </div>
              <p className="text-center">Setting</p>
              <div></div>
            </div>
            {/* Menu */}
            <div
              className={`${
                menu === false ? "hidden" : ""
              } w-1/2 z-20 bg-appBarBackgroundColor fixed h-[100%] top-10 right-0 pt-12 `}
            >
              <div className="flex justify-end pr-6">
                <button type="button" onClick={() => setMenu(false)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ fontSize: "20px" }}
                  />
                </button>
              </div>
              <p className="text-center">Food Menu</p>
            </div>
          </>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Profile />} />
        </Routes>
      </Router>
      {ScreenSize ? (
        <button
          type="button"
          className="fixed md:right-5 right-12 bottom-24 bg-appBarBackgroundColor w-12 h-12 rounded-full flex justify-center items-center border"
          onClick={() => setSettingLarg(true)}
        >
          <FontAwesomeIcon
            icon={faGear}
            style={{ fontSize: "22px", color: "white" }}
          />
        </button>
      ) : (
        <></>
      )}
      {ScreenSize ? (
        <div
          className={`${
            settingLarg === false ? "hidden" : ""
          } fixed right-0 top-10 w-[320px] bg-appBarBackgroundColor z-50 h-[100%] pt-10`}
        >
          <button
            type="button"
            className="fixed right-6"
            onClick={() => setSettingLarg(false)}
          >
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: "22px" }} />
          </button>

          <p className="text-center mt-6">Setting</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
