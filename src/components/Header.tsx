import IMAGES from "./Images";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
import VerticalLine from "./VerticalLine";
import { data } from "../api/fetchData";
import "../styles/Header.scss";

type PropsType = {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<data | null>>;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({
  font,
  setFont,
  dropdown,
  setDropdown,
  setData,
  setWord,
  setError,
  setEmpty,
}: PropsType) => {
  const fontFamilies: { [key: string]: string } = {
    inter: "Sans Serif",
    lora: "Serif",
    inconsolata: "Mono",
  };
  const handleHomepage = () => {
    setData(null);
    setWord("");
    setError(false);
    setEmpty(false);
  };
  return (
    <header>
      <button onClick={() => handleHomepage()}>
        <img src={IMAGES.logo} alt="logo.svg" />
      </button>
      <div>
        <div className="dropdown">
          <button onClick={() => setDropdown(!dropdown)}>
            <h3 style={{ fontFamily: `${font}, Arial` }}>
              {fontFamilies[font]}
            </h3>
            <img src={IMAGES.icon_arrow_down} alt="icon-arrow-down.svg" />
          </button>
          {dropdown ? (
            <Dropdown setFont={setFont} setDropdown={setDropdown} />
          ) : null}
        </div>
        <VerticalLine />
        <Switch />
        <img src={IMAGES.icon_moon} alt="icon-moon.svg" />
      </div>
    </header>
  );
};
export default Header;
