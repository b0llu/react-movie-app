import react, { useState, useEffect, useRef } from "react";

import seachIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  return (
    <Wrapper>
      <Content>
        <img src={seachIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
