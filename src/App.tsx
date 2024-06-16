import Header from "./components/Header";
import Search from "./components/Search";
import Word from "./components/Word";
import Section from "./components/Section";
import HorizontalLine from "./components/HorizontalLine";
import Source from "./components/Source";
import { useState } from "react";

function App() {
  const [font, setFont] = useState(localStorage.getItem("font") || "inter");
  const [dropdown, setDropdown] = useState(false);
  return (
    <div style={{ fontFamily: font }} className="app">
      <Header
        font={font}
        setFont={setFont}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      <Search font={font} />
      <Word />
      <Section sectionName="noun" />
      <Section sectionName="verb" />
      <HorizontalLine />
      <Source />
    </div>
  );
}

export default App;
