import "../styles/Expression.scss";
import ExpressionWord from "./ExpressionWord";

type Propstype = {
  expression: string;
  words: string[];
  handleSearch: (word: string) => Promise<void>;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const Expression = ({
  expression,
  words,
  handleSearch,
  setWord,
}: Propstype) => {
  return (
    <div className="expressionBox">
      <h4>{expression}</h4>
      <div>
        {words.map((word, index) => {
          return (
            <ExpressionWord
              key={index}
              word={word}
              handleSearch={handleSearch}
              setWord={setWord}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Expression;
