import { useEffect, useState } from 'react';
import DivInfo from '../../Components/DivInfo/DivInfo';
import styles from './Game.module.css';
import { useLocation } from 'react-router-dom';

const Game = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/GAME/game.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  return (
    <>
      <div className={styles.divgame}></div>
      <section className={styles.infosection}>
        <DivInfo />
      </section>
    </>
  );
};

export default Game;
