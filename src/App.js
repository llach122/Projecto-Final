import './Style-Sheets/App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import SearchFetch from "./Components/SearchFetch.js"
import Footer from "./Components/Footer.js"
import { MarvelContext } from "./Context/ApiContext.js";

function App() {
  const [charactersData, setCharactersData] = useState([]);

  const fetchCharacters = () => {
    axios
      .get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=adc1667d9c24a81c2f556225f31a1f19&hash=319a77a8eac7e83c1b2592e4a6ee0613n")
      .then(response => {
        const fetchedData = response.data.data.results;
        console.log(fetchedData)
        localStorage.setItem("charactersData", JSON.stringify(fetchedData));
        setCharactersData(fetchedData);
      })
      .catch(error => {
        console.error("Error al obtener los personajes:", error);
      });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("charactersData");
    if (storedData) {
      setCharactersData(JSON.parse(storedData));
    } else {
      fetchCharacters();
    }
  }, []);

  return (
    <div className="App">
      <MarvelContext.Provider value={charactersData}>
        <Header />
        <Hero />
        <SearchFetch />
        <Footer />
      </MarvelContext.Provider>
    </div>
  );
}

export default App;
