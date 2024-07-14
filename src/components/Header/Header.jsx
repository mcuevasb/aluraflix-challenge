import aluraflixlogo from "../../img/aluraflix-logo.png"
import styles from "./Header.module.css"

const Header = (props) =>{

    return <section>
            <div>
                <img src={aluraflixlogo}></img></div>
            <div className={styles.buttons}>
                <button>Home</button>
                <button onClick={props.toggleNewVideoVisible}>Nuevo Video</button>
            </div>
        </section>
}

export default Header