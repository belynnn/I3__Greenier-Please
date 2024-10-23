import styles from "./About.module.css";

const About = () => {

    return (
        <>
            <h2 className={styles.subtitle}>About</h2>
            <h2 className={styles.subjectname}>Team</h2>

            <section className={styles.firstsection}>
                <div className={styles.membercards}>
                    <h3>Luna</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Alex</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Gweny</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Béné</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Debby</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Audrey</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
                <div className={styles.membercards}>
                    <h3>Audrey</h3>
                    <p>IMAGE/DESSIN/BLIBLOU</p>
                </div>
            </section>
        </>
    );
};
export default About;