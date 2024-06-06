import Header from "./components/Header";
import Search from "./components/Search";
import Word from "./components/Word";
import Section from "./components/Section";
import HorizontalLine from "./components/HorizontalLine";
import Source from "./components/Source";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Word />
      <Section sectionName="noun" />
      <Section sectionName="verb" />
      <HorizontalLine />
      <Source />
    </div>
  );
}

export default App;
