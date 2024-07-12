import aluraflixbg from "../../img/aluraflix-bg.png";
import player from "../../img/player.png"

import styles from "./banner.css";

const Banner = () => {
    return (
        <section class="banner">
            <img class="bg-img" src={aluraflixbg} />
            <div class="banner-content">
                <div>
                    <div class="banner-title">FRONT END</div>
                    <div class="banner-subtitle">Challenge React</div>
                    <div class="banner-text">
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde
                        podrás comprometerte en la resolución de un problema para poder
                        aplicar todos los conocimientos adquiridos en la formación de React.
                    </div>
                </div>
                <div>
                    <img class="player" src={player} />
                </div>

            </div>
        </section>
    );
};

export default Banner;
