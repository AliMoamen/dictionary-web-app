import Header from "./components/Header";
import Search from "./components/Search";
import Word from "./components/Word";
import Section from "./components/Section";
import HorizontalLine from "./components/HorizontalLine";
import Source from "./components/Source";
import Error from "./components/Error";
import { useState } from "react";
import { data } from "./api/fetchData";
import { fetchData } from "./api/fetchData";

function App() {
  const [font, setFont] = useState(localStorage.getItem("font") || "inter");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dropdown, setDropdown] = useState(false);
  const [word, setWord] = useState(localStorage.getItem("word") || "");
  const [data, setData] = useState<data | null>(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data") as string)
      : null
  );
  const [error, setError] = useState<boolean>(
    localStorage.getItem("error")
      ? localStorage.getItem("error") === "true"
        ? true
        : false
      : false
  );
  const [empty, setEmpty] = useState<boolean>(false);

  document.body.classList.remove(theme === "light" ? "dark" : "light");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);

  const handleSearch = async (word: string) => {
    localStorage.setItem("word", word);
    if (!word.replace(/\s/g, "")) {
      setEmpty(true);
    } else {
      setEmpty(false);
      const data = await fetchData(word);
      localStorage.setItem("data", JSON.stringify(data));
      if (!data) {
        setError(true);
        localStorage.setItem("error", "true");
      } else {
        localStorage.setItem("error", "false");
        setData(data);
        setError(false);
      }
    }
  };
  return (
    <div
      onClick={() => (dropdown ? setDropdown(false) : null)}
      style={{ fontFamily: font }}
      className="app"
    >
      <Header
        font={font}
        setFont={setFont}
        theme={theme}
        setTheme={setTheme}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setData={setData}
        setWord={setWord}
        setError={setError}
        setEmpty={setEmpty}
      />
      <Search
        font={font}
        word={word}
        setWord={setWord}
        handleSearch={handleSearch}
        empty={empty}
      />

      {error ? (
        <Error />
      ) : data ? (
        <>
          <Word data={data} />
          {data["partsOfSpeech"].map((sectionName: string, index: number) => {
            return (
              <Section
                key={index}
                sectionName={sectionName}
                data={data}
                handleSearch={handleSearch}
                setWord={setWord}
              />
            );
          })}
          <HorizontalLine />
          <Source data={data} />
        </>
      ) : null}
    </div>
  );
}

export default App;
