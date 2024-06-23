type PropsType = {
  setFont: React.Dispatch<React.SetStateAction<string>>;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dropdown = ({ setFont, setDropdown }: PropsType) => {
  const handleChangeFont = (font: string): void => {
    setFont(font);
    localStorage.setItem("font", font);
    setDropdown(false);
  };

  return (
    <div className="dropdown-menu theme-dropdown">
      <button onClick={() => handleChangeFont("inter")}>
        <h3 className="text-dropdown" style={{ fontFamily: "inter, Arial" }}>
          Sans Serif
        </h3>
      </button>
      <button onClick={() => handleChangeFont("lora")}>
        <h3 className="text-dropdown" style={{ fontFamily: "lora, Arial" }}>
          Serif
        </h3>
      </button>
      <button onClick={() => handleChangeFont("inconsolata")}>
        <h3
          className="text-dropdown"
          style={{ fontFamily: "inconsolata, Arial" }}
        >
          Mono
        </h3>
      </button>
    </div>
  );
};

export default Dropdown;
