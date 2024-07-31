import NavBarAndBottomBar from "./components/navBarAndBottomBar";
import { useState } from "react";
import { SelectedPage } from "./shared/types";
import HomePage from "./components/home";
import Footer from "./components/Footer";
const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app">
      <NavBarAndBottomBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
