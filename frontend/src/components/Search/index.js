import React from "react";

import "./style.scss";

import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="card-search">
      <div>
        <span>
          <SearchIcon className="icon" />
        </span>
        <input type="text" placeholder="Encontre um usuário no github..." />
      </div>
      <button>Pesquisar</button>
    </div>
  );
};

export default Search;
