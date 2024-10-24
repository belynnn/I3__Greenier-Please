import { Link } from "react-router-dom";
import styles from "./About.module.css";
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        killgame();
    }, []);

    return (
        <>
            <h2 className={styles.subtitle}>About</h2>
            <h2 className={styles.subjectname}>Team</h2>

            <section className={styles.firstsection}>
                <div className={styles.membercards}>
                    <h3>Luna</h3>
                    <p>Game</p>
                    <a className={styles.socialnetwork} href="https://github.com/roze-olifant" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Alex</h3>
                    <p>Game</p>

                    <a className={styles.socialnetwork} href="https://github.com/MamieNuf" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="https://www.linkedin.com/in/amessinapro/" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>

                </div>
                <div className={styles.membercards}>
                    <h3>Gweny</h3>
                    <p>Game</p>
                    <a className={styles.socialnetwork} href="https://github.com/Gweny526" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Béné</h3>
                    <p>Front</p>
                    <a className={styles.socialnetwork} target="blank" href="https://github.com/Blacg13">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-lagasse/" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Debby</h3>
                    <p>Project Chief</p>
                    <a className={styles.socialnetwork} href="https://github.com/belynnn" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="https://www.linkedin.com/in/deborah-clerckx/" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Audrey</h3>
                    <p>UX/UI</p>
                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Inès</h3>
                    <p>ASR</p>
                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Sounia</h3>
                    <p>Front</p>
                    <a className={styles.socialnetwork} href="https://github.com/vickyfrosties" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="https://www.linkedin.com/in/sounia-mhalla-dit-aounallah-64578614b/" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className={styles.membercards}>
                    <h3>Wissal</h3>
                    <p>UX/UI</p>
                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/github-logo.svg" alt="Github Profile" />
                    </a>

                    <a className={styles.socialnetwork} href="" target="blank">
                        <img src="/src/assets/Icons/linkedin-logo.svg" alt="LinkedIn Profile" />
                    </a>
                </div>
                <div>
                    <p>This project has been developed during the Hackathon produced by Interface 3.</p>
                </div>
            </section>
        </>
    );
};
export default About;