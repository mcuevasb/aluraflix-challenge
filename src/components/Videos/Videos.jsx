import VideosCategory from "../VideosCategory/VideosCategory.jsx"
import data from "../../data/db.json"
import styles from "./Videos.module.css"

const Videos = (props) =>{

    return(
        <section>
            <div className={styles.videos}>
            
            {data.categorias.map((categoria)=>{return <VideosCategory toggleModalVisible={props.toggleModalVisible} togglePlayerVisible={props.togglePlayerVisible} setIdVideoSeleccionado={props.setIdVideoSeleccionado} {...categoria}></VideosCategory>})}

            </div>
        </section>
    )
}

export default Videos