import React, { useEffect, useState } from "react";
import axios from "axios";

//Material UI Imports
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Component Imports
import Results from "./Results";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [toggleTrue, setToggleTrue] = useState(false);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setToggleTrue(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setToggleTrue(true);
  };

  useEffect(() => {
    if (toggleTrue)
      axios
        .get(`${BASE_URL}search/name/${searchValue}`)
        .then((res) => {
          setSearchData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    setToggleTrue(false);
  }, [toggleTrue, searchValue, searchData]);

  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <TextField
          required
          label="Search Heroes and Villains"
          variant="outlined"
          onChange={onChange}
          onKeyDown={onKeyPress}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Search
        </Button>
      </Container>
      <Results searchData={searchData} />
    </div>
  );
};

export default Search;
