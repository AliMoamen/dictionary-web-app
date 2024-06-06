import "../styles/Source.scss";
import IMAGES from "./Images";
const Source = () => {
  return (
    <>
      <div className="source-box">
        <p>
          Source
          <span>
            <a href="">
              lorem
              <img src={IMAGES.icon_new_window} alt="" />
            </a>
          </span>
        </p>
      </div>
    </>
  );
};
export default Source;
