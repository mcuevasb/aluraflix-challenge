import aluraflixbg from "../../img/aluraflix-bg.png";
import player from "../../img/player.png"
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <img className={styles.bg_img} src={aluraflixbg} />
            <div className={styles.banner_content}>
                <div>
                    <div className={styles.banner_title}>FRONT END</div>
                    <div className={styles.banner_subtitle}>Challenge React</div>
                    <div className={styles.banner_text}>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde
                        podrás comprometerte en la resolución de un problema para poder
                        aplicar todos los conocimientos adquiridos en la formación de React.
                    </div>
                </div>
                <div>
                    <img className={styles.player} src={player} />
                </div>

            </div>
        </section>
    );
};

export default Banner;
