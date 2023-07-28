import React, { useContext, useState, useEffect } from "react";
import { MarvelContext } from "../Context/ApiContext.js"
import "../Style-Sheets/Hero.css";


 function Hero() {
  const charactersData  = useContext(MarvelContext);
  const [show, setShow] = useState([]);
  
  useEffect(() => {
    if (charactersData.length > 0) {
      const sortedCharacter = charactersData[
        Math.floor(Math.random() * charactersData.length)
      ];
      setShow(sortedCharacter);
    }
  }, [charactersData]);

  return (
    <div className="hero">
      {show && (
        <div key={show.id} className="hero-container">
        <img
            src={`${show?.thumbnail?.path}.${show?.thumbnail?.extension}`} className="hero-img"alt={show.name}/>
        </div>
      )}
    </div>
  );
}
export default Hero;