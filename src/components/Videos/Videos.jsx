import styles from "./Videos.css"
import VideosCategory from "../VideosCategory/VideosCategory.jsx"

const Videos = () =>{
    return(
        <section class="videos">
            <VideosCategory></VideosCategory>
            <VideosCategory></VideosCategory>
        </section>
    )
}

export default Videos