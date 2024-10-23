import About from "./Containers/About/About";
import Game from "./Containers/Game/Game";
import Index from "./Containers/Index/Index";
import NotFoundPage from "./Containers/NotFoundPage/NotFoundPage";
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