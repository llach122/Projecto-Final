import React, { useState } from "react";
import "../Style-Sheets/Modal.css";

const Modal = ({ character, onClose }) => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
    onClose();
  };

  return (
    <div className={`mmodal-container ${modal ? "open" : ""}`}>
      {character && ( 
        <div className="mmodal-overlay">

          <div> 
          <div className="h2-container"><h2 className="mh2">{ character.name }</h2>
          </div>

            <div className="mcontent">
            <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} alt={character.name}/>
            <p>{character.description}</p></div>
            
          </div>
          <div className="mbtn-container">
            <button className="mshut" onClick={toggleModal}>
              Close
            </button>
            <button className="mcomics">View Comics</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;