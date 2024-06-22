import "../styles/Error.scss";
const Error = () => {
  return (
    <div className="error-box">
      <div>
        <span>&#128532;</span>
        <h2>No definitions Found</h2>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default Error;
