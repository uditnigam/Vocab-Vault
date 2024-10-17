import { getRecentlySearchedWordFromStorage } from "../../utils";
import "./styles/index.css";
import { searchedWordApi } from "../../api/index";

const PreviousSearchedWord = (props) => {
  const { setWord, setIsWordOfTheDay } = props;
  let recentSearchedWords = getRecentlySearchedWordFromStorage();
  const handleOnClick = async (e) => {
    const searchedWord = await searchedWordApi(e.target.innerText);
    console.log(searchedWord);
    setWord(searchedWord);
    setIsWordOfTheDay(false);
  };
  return (
    <div className="previous-searched-word-cont">
      <h2 className="recent-word-heading">Recently Searched Words</h2>
      <div className="recent-words">
        {recentSearchedWords?.map((e, index) => (
          <p key={index} onClick={handleOnClick} className="recent-word">
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PreviousSearchedWord;
