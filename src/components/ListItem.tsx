import "../styles/ListItem.scss";
const ListItem = ({
  content,
  example,
}: {
  content: string;
  example: string | undefined;
}) => {
  return (
    <li className="text">
      {content}

      {example ? (
        <>
          <br /> <br /> <span>"{example}"</span>
        </>
      ) : null}
    </li>
  );
};
export default ListItem;
