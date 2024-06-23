import "../styles/Source.scss";
import IMAGES from "./Images";
import { data } from "../api/fetchData";
type PropsType = {
  data: data;
};
const Source = ({ data }: PropsType) => {
  return (
    <>
      <div className="source-box">
        <p>
          Source
          <span>
            <a className="text" target="_blank" href={data.sources[0]}>
              {data.sources[0]}
              <img src={IMAGES.icon_new_window} alt="" />
            </a>
          </span>
        </p>
      </div>
    </>
  );
};
export default Source;
