import { useRef, useState } from 'react';
//todo : récupérer le bouton
const clickChecked = localStorage.getItem('clickCount');
console.log('clickChecked : ' + clickChecked);

//todo : faire un tableau des divinfo

const DivInfo = () => {
  //todone == display divinfos
  const displayInfodiv = useRef(false);
  function handleClick() {
    displayInfodiv.current = !displayInfodiv.current;
    console.log('button clicked : ' + displayInfodiv.current);
  }
  return (
    <>
      <button onClick={handleClick}>CLICK !!!</button>
      <section>
        <div>
          <p>Infos 1ère question</p>
        </div>
        <div>
          <p>Infos 2ème question</p>
        </div>
        <div>
          <p>Infos 3ème question</p>
        </div>
      </section>
    </>
  );
};
export default DivInfo;
