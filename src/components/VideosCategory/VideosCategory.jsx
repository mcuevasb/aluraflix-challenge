import CategoryList from "../CategoryList/CategoryList"
import styles from "./VideosCategory.css"

const VideosCategory = () => {
    return (
        <div classname="videos-cat">
            <div class="cat-title">
                <p> FRONT END</p>
            </div>
            <div class="video-list">
                <CategoryList />
            </div>
        </div>
    )
}

export default VideosCategory