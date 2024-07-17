import CategoryList from "../CategoryList/CategoryList"
import styles from "./VideosCategory.module.css"

const VideosCategory = (props) => {

    return (
        <div className={styles.videos_cat}>
            <div className={styles.cat_title} style={{backgroundColor:props.color}}>
                {props.nombre}
            </div>
            <div className={styles.video_list} style={{borderColor:props.color}}>
                <CategoryList id={props.id}/>
            </div>
        </div>
    )
}

export default VideosCategory