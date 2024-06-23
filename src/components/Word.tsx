import IMAGES from "./Images";
import "../styles/Word.scss";
import { data } from "../api/fetchData";
import { useRef, useState } from "react";

type PropsType = {
  data: data;
};
const Word = ({ data }: PropsType) => {
  const [active, setActive] = useState<boolean>(false);
  const [playImage, setPlayImage] = useState<string>(IMAGES.icon_play);
  const playAudio = (url: string) => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1500);
    const audio = new Audio(url);
    audio.play();
  };
  return (
    <article>
      <div>
        <h1 className="text">{data.word}</h1>
        <p>{data.phonetic}</p>
      </div>
      {data.audio ? (
        <button style={{ cursor: "initial" }} className="js-play-button">
          <img
            style={active ? { cursor: "initial" } : { cursor: "pointer" }}
            onClick={!active ? () => playAudio(data.audio) : undefined}
            onMouseOver={() => {
              setPlayImage(IMAGES.icon_play_hover);
            }}
            onMouseLeave={() => {
              setPlayImage(IMAGES.icon_play);
            }}
            src={playImage}
            alt="icon-play.svg"
          />
        </button>
      ) : null}
    </article>
  );
};

export default Word;
