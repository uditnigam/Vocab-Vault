import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import { searchedWordApi } from "../../api/index";
import { savePreviouslySearchedWord } from "../../utils";
import "./styles/index.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  display: "flex",
  cursor: "pointer",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "90ch",
      height: "40px",
    },
  },
}));

const SearchAppBar = (props) => {
  const { setWord, setIsWordOfTheDay } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    const searchedWord = await searchedWordApi(inputValue);
    setWord(searchedWord);
    savePreviouslySearchedWord(inputValue);
    setIsWordOfTheDay(false);
  };

  return (
    <Toolbar className="app-bar">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <hr></hr>
        <Button variant="text" className="search-button" onClick={handleSearch}>
          Search
        </Button>
      </Search>
    </Toolbar>
  );
};
export default SearchAppBar;
