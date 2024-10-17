import { randomWordApi } from "../src/api/index";

export const getRandomWord = async (isRandom) => {
  if (isRandom) {
    const randomWord = await randomWordApi();
    return randomWord;
  } else {
    let randomWordObject = JSON.parse(localStorage.getItem("randomWordObject"));
    const currentDate = new Date().toLocaleDateString();

    if (!randomWordObject) {
      const wordObject = await randomWordApi();
      randomWordObject = {
        date: currentDate,
        word: wordObject,
      };
      localStorage.setItem(
        "randomWordObject",
        JSON.stringify(randomWordObject)
      );
    } else {
      if (currentDate !== randomWordObject.date) {
        const wordObject = await randomWordApi();
        randomWordObject = {
          date: currentDate,
          word: wordObject,
        };
        localStorage.setItem(
          "randomWordObject",
          JSON.stringify(randomWordObject)
        );
      }
    }
    return randomWordObject;
  }
};

export const savePreviouslySearchedWord = (word) => {
  let storedArray =
    JSON.parse(localStorage.getItem("previouslySearchedWord")) || [];
  storedArray.push(word);
  localStorage.setItem("previouslySearchedWord", JSON.stringify(storedArray));
};

export const getRecentlySearchedWordFromStorage = () => {
  let previouslySearchedWord =
    JSON.parse(localStorage.getItem("previouslySearchedWord")) || [];
  return previouslySearchedWord;
};
