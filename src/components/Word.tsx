import IMAGES from "./Images";
import "../styles/Word.scss";
import { data } from "../api/fetchData";

type PropsType = {
  data: data;
};
const Word = ({ data }: PropsType) => {
  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };
  return (
    <article>
      <div>
        <h1>{data.word}</h1>
        <p>{data.phonetic}</p>
      </div>
      {data.audio ? (
        <button onClick={() => playAudio(data.audio)}>
          <img src={IMAGES.icon_play} alt="icon-play.svg" />
        </button>
      ) : null}
    </article>
  );
};

export default Word;
