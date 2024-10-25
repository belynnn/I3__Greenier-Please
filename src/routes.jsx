import About from './Containers/About/About';
import Game from './Containers/Game/Game';
import Index from './Containers/Index/Index';
import NotFoundPage from './Containers/NotFoundPage/NotFoundPage';
import App from './App';
import Info from './Containers/Info/Info';

const routes = [
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
