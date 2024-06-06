import IMAGES from "./Images";
import "../styles/Word.scss";
const Word = () => {
  return (
    <article>
      <div>
        <h1>Keyboard</h1>
        <p>lorem</p>
      </div>
      <button>
        <img src={IMAGES.icon_play} alt="icon-play.svg" />
      </button>
    </article>
  );
};

export default Word;
