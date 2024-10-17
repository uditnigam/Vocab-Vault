import "./styles/index.css";

const MeaningBoard = (props) => {
  const { word, isWordOfTheDay } = props;
  if (!word) return;

  return (
    <div className="main-content">
      <div className="word-meaning-cont">
        {isWordOfTheDay ? (
          <h2 className="word-heading">Word Of The Day</h2>
        ) : (
          ""
        )}
        <div className="word-meaning">
          <h1 className="word-name">
            <div>{word?.word}</div>
            <div className="highlight-box">
              {word?.pronunciation?.all ? (
                <div>({word?.pronunciation?.all})</div>
              ) : (
                ""
              )}
            </div>
          </h1>
          <div className="meaning-box">
            {word?.results?.map((e, index) => (
              <div key={index}>
                <div className="highlight-box">
                  {e.partOfSpeech ? <div>{e.partOfSpeech}</div> : ""}
                </div>
                <div className="definition">
                  {e.definition ? <div>{e.definition}</div> : ""}
                </div>
                <div className="examples">
                  {e.examples ? <div>"{e.examples.join(" , ")}"</div> : ""}
                </div>
                <div>
                  {e.synonyms ? (
                    <div>Similar : "{e.synonyms.join(" , ")}"</div>
                  ) : (
                    " "
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeaningBoard;
