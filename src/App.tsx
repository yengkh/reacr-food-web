import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Favorite from "./components/Favorite";
import {
  faHome,
  faHeart,
  faShoppingBasket,
  faBars,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import LinkNavigation from "./components/Links";
import Cart from "./components/Cart";
import useMediaQuery from "./hook/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./components/Profile";
import DetailPage from "./components/detailPage";
import FoodMenuDetail from "./components/foodMenuDetail";
import MenuErrorPage from "./components/errors/MenuErrorPage";
import SettingPage from "./components/SmallSreenComponents/SettingPage";
import FoodMenuComponent from "./components/SmallSreenComponents/FoodMenuComponent";
import ThemeContext from "./Providers/ThemeProvider";
import BottomAppBar from "./components/SmallSreenComponents/BottomAppBar";

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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme_mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme_mode", theme);
    document.body.className = theme; // Optionally apply the theme to the body
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <div
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor"
                : "bg-appBarBackgroundColorForDark text-textColorForDarkMode"
            }  w-full  fixed top-0 left-0 right-0 z-50`}
          >
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
              <BottomAppBar
                settingClick={settingClick}
                selectePage={selectePage}
                setSelectedpage={setSelectedpage}
                theme={theme}
              />
              {/* Setting */}
              <SettingPage
                selectedTheme={theme}
                setSetting={setSetting}
                handleThemeChange={toggleTheme}
                setting={setting}
              />
              {/* Menu */}
              <FoodMenuComponent menu={menu} setMenu={setMenu} theme={theme} />
            </>
          )}
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="cart" element={<Cart theme={theme} />} />
            <Route path="login" element={<Profile />} />
            <Route
              path="/view-food-detail/:foodName"
              element={<DetailPage theme={theme} />}
            />
            <Route
              path="/food-menu/:foodMenuName"
              element={<FoodMenuDetail theme={theme} />}
            />
            <Route path="/page-not-found" element={<MenuErrorPage />} />
          </Routes>
        </Router>
        {ScreenSize ? (
          <button
            type="button"
            className={`${
              theme === "light"
                ? "bg-appBarBackgroundColor"
                : "bg-appBarBackgroundColorForDark"
            } fixed md:right-5 right-12 bottom-24  w-12 h-12 rounded-full flex justify-center items-center border`}
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
          <SettingPage
            handleThemeChange={toggleTheme}
            selectedTheme={theme}
            setting={settingLarg}
            setSetting={setSettingLarg}
          />
        ) : (
          <></>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
