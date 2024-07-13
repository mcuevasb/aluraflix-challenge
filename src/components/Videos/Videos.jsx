import styles from "./Videos.css"
import VideosCategory from "../VideosCategory/VideosCategory.jsx"
import data from "../../data/db.json"

const Videos = (props) =>{

    return(
        <section>
            <div class="videos">
            
            {data.categorias.map((categoria)=>{return <VideosCategory toggleModalVisible={props.toggleModalVisible} setIdVideoSeleccionado={props.setIdVideoSeleccionado} {...categoria}></VideosCategory>})}

            </div>
        </section>
    )
}

export default Videos