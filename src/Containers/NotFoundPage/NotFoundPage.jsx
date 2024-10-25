import { useEffect } from "react";

const NotFoundPage = () => {
    useEffect(() => {
        killgame();
    }, []);
    return (
        <>
            <p>Il semblerait qu'il y ait un problème</p>
        </>
    );
};

export default NotFoundPage;