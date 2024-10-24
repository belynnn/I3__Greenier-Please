import DivInfo from '../../Components/DivInfo/DivInfo';
import styles from './Game.module.css';

const Game = () => {
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
