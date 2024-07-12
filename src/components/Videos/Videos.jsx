import styles from "./Videos.css"
import VideosCategory from "../VideosCategory/VideosCategory.jsx"
import data from "../../data/db.json"

const Videos = () =>{

    return(
        <section>
            <div class="videos">
            
            {data.categorias.map((categoria)=>{return <VideosCategory {...categoria}></VideosCategory>})}

            </div>
        </section>
    )
}

export default Videos