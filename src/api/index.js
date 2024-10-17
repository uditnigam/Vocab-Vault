import axios from "axios";

const config = {
  headers: {
    "x-rapidapi-key": "a06f0f2063msh5f2427cd8cc3818p137165jsnf3f37f0cca06",
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  },
};

export const searchedWordApi = async (word) => {
  try {
    const response = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const randomWordApi = async () => {
  try {
    const response = await axios.get(
      "https://wordsapiv1.p.rapidapi.com/words?random=true",
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
