import { useEffect, useRef, useState } from 'react';
import data from '../../../GAME/propositions.json';
import styles from './DivInfo.module.css';
const DivInfo = () => {
  //todo : récupérer les infos du json
  const projects = data.projets;
  console.log('clickCount ' + parseInt(localStorage.getItem('clickCount')));

  //todo : récupérer les infos du bouton dans le local storage
  console.log('parseInt: ' + parseInt(localStorage.getItem('clickCount')));
  console.log(Object.keys(localStorage) + ': ' + Object.values(localStorage));
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem('clickCount'));
  });
  //! T____________________________________________T
  window.addEventListener('storage', () => {
    setCount(Object.values(localStorage));
    console.log('count setted: ' + count);
  });
  //! T____________________________________________T

  //? other :
  // function displayDiv() {
  //   localStorage.getItem('clickCount');
  //   setClickCount(clickCount + 1);
  // }

  //   //todone == display divinfos
  //   const displayInfodiv = useRef(false);
  //   function handleClick() {
  //     displayInfodiv.current = !displayInfodiv.current;
  //     console.log('button clicked : ' + displayInfodiv.current);
  //   }
  // //todo : faire un tableau des divinfo
  console.log(projects);
  return (
    <>
      {projects.map((projet, index) => {
        return (
          <div key={'projet' + index} className={styles.infodiv}>
            <h3 className={styles.infotitle}>
              Read more about "{projet.title}"
            </h3>
            <p>{projet.information}</p>
            <a href={projet.link}>
              Source: Institute for Sustainable IT UE 2021
            </a>
          </div>
        );
      })}
    </>
  );
};
export default DivInfo;
