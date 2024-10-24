import DivInfo from '../../Components/DivInfo/DivInfo';
import styles from './Game.module.css';

const Game = () => {
  return (
    <>
      <div className={styles.divgame}></div>

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
