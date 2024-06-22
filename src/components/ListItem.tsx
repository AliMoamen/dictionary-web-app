import "../styles/ListItem.scss";
const ListItem = ({
  content,
  example,
}: {
  content: string;
  example: string | undefined;
}) => {
  return (
    <li>
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
