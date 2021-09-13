import React, { useState, useEffect } from "react";
//import song from "../media/Sound1.mp3";
import Card from "./Card";
import Music from "./Music";
//import Menu from "./Menu.js";
import "../Style/App.css";

import { images } from "../import.js";

function Game() {
  //sound
  //const [isPlay, setIsPlay] = useState(false);

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <div className="app">
      <div className="row ">
        <div className="col Puntaje">Puntaje: </div>
        <div className="col-9 cards-container">
          {cards.map((card, index) => (
            <Card
              name={card.player}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          ))}
        </div>
      </div>
      <div className="row ">
        <div className="col menu">Menu</div>
        <div className="col-3 Juego">
          <div className="row">
            <div className="col-5">
              <img
                src="../images/sub25/2c.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-5">Column</div>

            <div className="col-2">
              <Music />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Game;
