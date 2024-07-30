import NavBarAndBottomBar from "./components/navBarAndBottomBar";
import { useState } from "react";
import { SelectedPage } from "./shared/types";
import HomePage from "./components/home";
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
    </div>
  );
};

export default App;
