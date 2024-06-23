import "../styles/Switch.scss";
type PropsType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
const Switch = ({ theme, setTheme }: PropsType) => {
  const checked: string | null = theme === "dark" ? "true" : "false";
  document.querySelector(".js-toggle-theme")?.setAttribute("checked", checked);
  return (
    <label className="switch">
      <input
        className="js-toggle-theme"
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        type="checkbox"
        checked={theme === "dark"}
      />

      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
