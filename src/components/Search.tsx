import "../styles/Search.scss";
import IMAGES from "./Images";
type PropsType = {
  font: string;
};
const Search = ({ font }: PropsType) => {
  return (
    <div className="search-box">
      <input
        style={{ fontFamily: font }}
        autoFocus
        type="text"
        placeholder="Search any word"
      />
      <button>
        <img src={IMAGES.icon_search} alt="" />
      </button>
    </div>
  );
};

export default Search;
