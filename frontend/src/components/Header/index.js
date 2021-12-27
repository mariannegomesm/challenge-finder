import React from "react";

import "./style.scss";

const Header = () => {
  const themeLight = () => {};

  return (
    <header>
      <h3>UserFinder</h3>
      <button onClick={() => themeLight()}>Github</button>
    </header>
  );
};

export default Header;
