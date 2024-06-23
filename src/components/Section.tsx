import HorizontalLine from "./HorizontalLine";
import Meaning from "./Meaning";
import "../styles/Section.scss";
import { data, speech } from "../api/fetchData";
import Expression from "./Expression";

type Propstype = {
  sectionName: string;
  data: data;
  handleSearch: (word: string) => Promise<void>;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const Section = ({ sectionName, data, handleSearch, setWord }: Propstype) => {
  let synomns: string[] = [];
  let antonyms: string[] = [];
  const dataList = data[sectionName] as speech[];
  dataList.forEach((speech: speech) => {
    synomns = [...synomns, ...speech["synonyms"]];
    antonyms = [...antonyms, ...speech["antonyms"]];
  });
  synomns = [...new Set(synomns)];
  antonyms = [...new Set(antonyms)];
  return (
    <>
      <div className="section">
        <h3 className="text">
          <i>{sectionName}</i>
        </h3>
        <HorizontalLine />
      </div>
      <Meaning sectionName={sectionName} data={data} />
      {synomns.length > 0 ? (
        <Expression
          expression="Synonyms"
          words={synomns}
          handleSearch={handleSearch}
          setWord={setWord}
        />
      ) : null}
      {antonyms.length > 0 ? (
        <Expression
          expression="Antonyms"
          words={antonyms}
          handleSearch={handleSearch}
          setWord={setWord}
        />
      ) : null}
    </>
  );
};

export default Section;
