type PropsType = {
  word: string;
  handleSearch: (word: string) => Promise<void>;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

const ExpressionWord = ({ word, handleSearch, setWord }: PropsType) => {
  const handleExpression = (word: string) => {
    window.scrollTo(0, 0);
    setWord(word);
    handleSearch(word);
  };
  return <a onClick={() => handleExpression(word)}>{word}</a>;
};
export default ExpressionWord;
