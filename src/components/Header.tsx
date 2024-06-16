import IMAGES from "./Images";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
import VerticalLine from "./VerticalLine";
import "../styles/Header.scss";

type PropsType = {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ font, setFont, dropdown, setDropdown }: PropsType) => {
  const fontFamilies: { [key: string]: string } = {
    inter: "Sans Serif",
    lora: "Serif",
    inconsolata: "Mono",
  };
  return (
    <header>
      <img src={IMAGES.logo} alt="logo.svg" />
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
