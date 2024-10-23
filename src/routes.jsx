import About from "./Components/About/About";
import Game from "./Components/Game/Game";
import Index from "./Components/Index/Index";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import App from "./App";

const routes = [
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "game",
                element: <Game />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
];

export default routes;