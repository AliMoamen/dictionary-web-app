import "../styles/Meaning.scss";
import { data, speech } from "../api/fetchData";
import { ReactElement } from "react";
import ListItem from "./ListItem";
type Propstype = {
  sectionName: string;
  data: data;
};
const Meaning = ({ sectionName, data }: Propstype) => {
  const generateList = (data: data) => {
    const list: ReactElement[] = [];
    const dataList = data[sectionName] as speech[];
    dataList.forEach((speech: speech, i) => {
      list.push(
        <ListItem
          key={i}
          content={speech.definition}
          example={speech.example}
        />
      );
    });
    return list.length >= 7 ? list.slice(0, 6) : list;
  };
  return (
    <>
      <h4>Meaning</h4>
      <ul>{data ? generateList(data) : null}</ul>
    </>
  );
};

export default Meaning;
