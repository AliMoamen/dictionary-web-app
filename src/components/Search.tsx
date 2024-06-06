import "../styles/Search.scss";
import IMAGES from "./Images";
const Search = () => {
  return (
    <div className="search-box">
      <input autoFocus type="text" placeholder="Search any word" />
      <button>
        <img src={IMAGES.icon_search} alt="" />
      </button>
    </div>
  );
};

export default Search;
