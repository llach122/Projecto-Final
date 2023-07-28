import React from "react";

const Header = ({ onShowFavorites }) => {
  return (
    <header>
      <h1>Marvel Characters</h1>
      <button onClick={onShowFavorites}>Show Favorites</button>
    </header>
  );
};

export default Header;