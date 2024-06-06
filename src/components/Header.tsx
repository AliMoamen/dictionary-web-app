import IMAGES from "./Images";
import Switch from "./Switch";
import VerticalLine from "./VerticalLine";
import "../styles/Header.scss";
const Header = () => {
  return (
    <header>
      <img src={IMAGES.logo} alt="logo.svg" />
      <div>
        <button>
          <h3>Sans Serif</h3>
          <img src={IMAGES.icon_arrow_down} alt="icon-arrow-down.svg" />
          <div className="dropdown-menu">
            <button>
              <h3 style={{ fontFamily: "inter, Arial" }}>Sans Serif</h3>
            </button>
            <button>
              <h3 style={{ fontFamily: "lora, Arial" }}>Serif</h3>
            </button>
            <button>
              <h3 style={{ fontFamily: "inconsolata, Arial" }}>Mono</h3>
            </button>
          </div>
        </button>
        <VerticalLine />
        <Switch />
        <img src={IMAGES.icon_moon} alt="icon-moon.svg" />
      </div>
    </header>
  );
};
export default Header;
