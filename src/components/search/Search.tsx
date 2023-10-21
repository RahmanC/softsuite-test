import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import style from "./Search.module.scss";
import { SearchProps } from "types";

const Search = ({ placeholder, customClass }: SearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    searchInput && alert(JSON.stringify(searchInput));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${style.app_search} ${customClass}`}
    >
      <div className={style.app_search_icon}>
        <SearchIcon />
      </div>
      <input
        type="search"
        value={searchInput}
        onChange={handleChange}
        placeholder={placeholder}
        className={style.app_search_input}
      />
    </form>
  );
};

export default Search;
