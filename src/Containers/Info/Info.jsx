import { useEffect } from 'react';
import DivInfo from '../../Components/DivInfo/DivInfo';

const Info = () => {
  useEffect(() => {
    killgame();
    const GAME_CANVA = document.querySelector('canvas');
  }, []);
  return (
    <>
      <DivInfo />
    </>
  );
};
export default Info;
