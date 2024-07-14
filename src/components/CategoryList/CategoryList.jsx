import VideoCard from "../VideoCard/VideoCard"
import data from "../../data/db.json"
import styles from "./CategoryList.module.css"

const CategoryList = (props) => {


    const dataCategoria = data.videos.filter((video) => { return video.categoria === props.id })

    return (
        <div className={styles.cat_list}>
            {dataCategoria.map((video) => { return <VideoCard toggleModalVisible={props.toggleModalVisible} togglePlayerVisible={props.togglePlayerVisible} setIdVideoSeleccionado={props.setIdVideoSeleccionado} {...video} ></VideoCard> })}
        </div>
    )
}

export default CategoryList