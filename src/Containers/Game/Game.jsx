import { useEffect, useState } from 'react';
import DivInfo from '../../Components/DivInfo/DivInfo';
import styles from './Game.module.css';


const Game = () => {

  useEffect(() => {
    startgame();
    const GAME_CANVA = document.querySelector("canvas");
    document.getElementById('toto').appendChild(GAME_CANVA);
    // GAME_CANVA.classList.add("canva");
  }, []);


  return (
    <>
      <div id="toto" className={styles.divgame}></div>
      <section className={styles.infosection}>
        <div className={styles.information}>
          <p>Infos des projets</p>
        </div>
        <DivInfo />
      </section>
    </>
  );
};

export default Game;
