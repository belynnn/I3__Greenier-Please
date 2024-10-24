import { Link } from "react-router-dom";
import styles from "./Index.module.css";

const Index = () => {

    return (
        <>
            <section className={styles.firstsection}>

                <h1 className={styles.title}>Greenier, Please</h1>

                <div className={styles.explanation}>
                    <p>
                        The player takes on the role of a project manager and receives 1 random contributor from each IT sector. Each participant will have 3 proposals, only 1 of which is “green”. Some proposals are eco-responsible (green) where others are only superficially (red). At any time, one or other of the speakers can spread false information to achieve his or her ends. Every decision taken by the person in charge of projects has an impact on the general mood of the company, filling the interface with rust and raising a thermostat if the carbon footprint explodes.
                    </p>
                </div>

                <Link to="/game" className={styles.btnplay}>
                    <img src="/assets/PlayButton.png" alt="Button Play Game" />
                </Link>

            </section>
        </>
    );
};

export default Index;
