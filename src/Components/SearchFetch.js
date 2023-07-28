import React, { useContext, useState } from "react";
import { MarvelContext } from "../Context/ApiContext";
import Modal from "./Modal.js";
import "../Style-Sheets/SearchFetch.css";

const SearchFetch = () => {
  const charactersData = useContext(MarvelContext);
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filtered = !search
    ? charactersData
    : charactersData.filter((item) =>
        item.name.toLowerCase().includes(search)
      );

  return (
    <div>
      <div className="input-container">
        <input
          value={search}
          className="input"
          type="text"
          placeholder="Search"
          onChange={searcher}
        />
      </div>
      <div className="card-container">
        {filtered.map((character) => (
          <div key={character.id}>
            <h2 className="title-cards">{character.name}</h2>
            <div>
              <img className="card-img" src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name}onClick={() => openModal(character)}/>
              <button className="btn-add">Add To Favorite</button>
            </div>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default SearchFetch;
