import VideosCategory from "../VideosCategory/VideosCategory.jsx"
import data from "../../data/db.json"
import styles from "./Videos.module.css"

const Videos = (props) =>{

    return(
        <section>
            <div className={styles.videos}>
            
            {data.categorias.map((categoria)=>{return <VideosCategory {...categoria}></VideosCategory>})}

            </div>
        </section>
    )
}

export default Videos