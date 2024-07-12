import aluraflixlogo from "../../img/aluraflix-logo.png"
import styles from "./Header.css"

const Header = () =>{

    return <section>
            <div>
                <img src={aluraflixlogo}></img></div>
            <div class="buttons">
                <button>Home</button>
                <button>Nuevo Video</button>
            </div>
        </section>
}

export default Header