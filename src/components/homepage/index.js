import Header from "../header";
import SearchAppBar from "../search";
import { getRandomWord } from "../../utils";
import "./styles/index.css";
import { useEffect, useState } from "react";
import MeaningBoard from "../meaningBoard";
import PreviousSearchedWord from "../previousSearchWord";

const Homepage = () => {
  const [word, setWord] = useState("");
  const [isWordOfTheDay, setIsWordOfTheDay] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const wordOfTheDay = await getRandomWord(false);
      setWord(wordOfTheDay.word);
    }
    fetchData();
  }, []);

  const handleOnClick = async () => {
    const randomWord = await getRandomWord(true);
    setWord(randomWord);
    setIsWordOfTheDay(false);
  };

  return (
    <>
      <div className="homepage">
        <Header />
        <div className="word-search">
          <div className="quote">Find the word, make it yours forever.</div>
          <SearchAppBar
            setWord={setWord}
            setIsWordOfTheDay={setIsWordOfTheDay}
          />
          <div className="random-word" onClick={handleOnClick}>
            Random Word
          </div>
        </div>
        <div className="main-board">
          <MeaningBoard word={word} isWordOfTheDay={isWordOfTheDay} />
          <PreviousSearchedWord
            setWord={setWord}
            setIsWordOfTheDay={setIsWordOfTheDay}
          />
        </div>
      </div>
    </>
  );
};
export default Homepage;
