import React, { useState, useEffect } from "react";
import Music from "./Music";
import Card from "./Card";

import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

import "../Style/App.css";


import { images } from "../import.js";

function Game() {
  //CARTAS
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [counter, setCounter] = useState(0);
  const [Stargame, setStargame] = useState(true);
  //VERIFICAR
  //UNFLIPPED ES DONDE SE RESETEA EL JUEGO

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

  // aqui se debe implementar el reinicio del juego
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
      //VOLTEA LA MISMA CARTA
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
  // PUNTAJE
  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    ubgradePuntaj();

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

  //Puntaje
  const ubgradePuntaj = () => {
    setCounter(counter + 100);
  };

  const startgame = () => {
    setStargame(false);
  };

  const resetGame = () => {
    setCounter(0);
    resetCards();
    setStargame(true);

    //window.location.reload(true);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (counter === 600) {
      setShowModal(true);
    }
  }, [counter]);

  const handleModalOk = () => {
    resetGame();
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <div className="row ">
        <div className="row Izquierda">
          <div className="col Barra_sup">
            <div>
              <button
                className="btn"
                type="primary"
                size="large"
                onClick={resetGame}
              >
                Reiniciar
              </button>
            </div>

            <div className="row Barra_sup">Puntaje: {counter}</div>

            <div className="Game1">
              <Music />
            </div>
          </div>
        </div>
        <div className="container-pri">
          {Stargame && (
            <div className="Start">
              <button onClick={startgame} className="btn_start" ghost>
                <PlayCircleOutlined />
              </button>
            </div>
          )}
          <div className="cards-container">
            {!Stargame &&
              cards.map((card, index) => (
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
      </div>
      <Modal
        visible={showModal}
        title="¡Terminaste el juego!"
        onCancel={handleModalCancel}
        footer={[
          <Button key="restart" type="primary" onClick={handleModalOk}>
            Reiniciar
          </Button>,
        ]}
        wrapClassName="transparent-modal" // Agrega esta línea para aplicar estilos personalizados
        bodyStyle={{ fontSize: "20px" }} // Ajusta el tamaño de las letras en el modal
      >
        <p style={{ fontSize: "24px" }}>Tu puntuación final: {counter}</p> {/* Ajusta el tamaño de la puntuación final */}
      </Modal>
    </div>
  );
}

export default Game;
