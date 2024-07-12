import styles from "./CategoryList.css"
import VideoCard from "../VideoCard/VideoCard"
import data from "../../data/db.json"

const CategoryList = (props) => {


    const dataCategoria = data.videos.filter((video) => { return video.categoria === props.id })

    return (
        <div class="cat-list">
            {dataCategoria.map((video) => { return <VideoCard {...video} ></VideoCard> })}
        </div>
    )
}

export default CategoryList