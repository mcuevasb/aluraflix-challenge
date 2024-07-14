import CategoryList from "../CategoryList/CategoryList"
import styles from "./VideosCategory.module.css"



const VideosCategory = (props) => {

    return (
        <div className={styles.videos_cat}>
            <div className={styles.cat_title} style={{backgroundColor:props.color}}>
                {props.nombre}
            </div>
            <div className={styles.video_list} style={{borderColor:props.color}}>
                <CategoryList toggleModalVisible={props.toggleModalVisible} togglePlayerVisible={props.togglePlayerVisible} setIdVideoSeleccionado={props.setIdVideoSeleccionado} id={props.id}/>
            </div>
        </div>
    )
}

export default VideosCategory