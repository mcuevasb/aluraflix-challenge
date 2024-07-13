import CategoryList from "../CategoryList/CategoryList"
import styles from "./VideosCategory.css"



const VideosCategory = (props) => {

    return (
        <div class="videos-cat">
            <div class="cat-title" style={{backgroundColor:props.color}}>
                <p>{props.nombre}</p>
            </div>
            <div class="video-list">
                <CategoryList toggleModalVisible={props.toggleModalVisible} setIdVideoSeleccionado={props.setIdVideoSeleccionado} id={props.id}/>
            </div>
        </div>
    )
}

export default VideosCategory