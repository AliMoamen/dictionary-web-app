import HorizontalLine from "./HorizontalLine";
import Meaning from "./Meaning";
import "../styles/Section.scss";

type Propstype = {
  sectionName: string;
};

const Section = ({ sectionName }: Propstype) => {
  return (
    <>
      <div className="section">
        <h3>
          <i>{sectionName}</i>
        </h3>
        <HorizontalLine />
      </div>
      <Meaning />
    </>
  );
};

export default Section;
