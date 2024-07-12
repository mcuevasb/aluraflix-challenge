import styles from "./CategoryList.css"
import VideoCard from "../VideoCard/VideoCard"

const CategoryList = () =>{
    return(
        <div class ="cat-list">
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
        </div>
    )
}

export default CategoryList