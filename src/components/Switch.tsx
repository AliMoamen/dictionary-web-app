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
      {theme === "dark" ? (
        <input
          className="js-toggle-theme"
          onClick={() => {
            setTheme("light");
          }}
          type="checkbox"
          checked
        />
      ) : (
        <input
          className="js-toggle-theme"
          onClick={() => {
            setTheme("dark");
          }}
          type="checkbox"
        />
      )}

      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
