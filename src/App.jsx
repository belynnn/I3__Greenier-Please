import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
