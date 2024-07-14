import aluraflixlogo from "../../img/aluraflix-logo.png"
import styles from "./Header.css"

const Header = (props) =>{

    return <section>
            <div>
                <img src={aluraflixlogo}></img></div>
            <div class="buttons">
                <button>Home</button>
                <button onClick={props.toggleNewVideoVisible}>Nuevo Video</button>
            </div>
        </section>
}

export default Header