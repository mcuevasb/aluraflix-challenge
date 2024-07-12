import styles from "./VideoCard.css"
import trash from "../../img/trash.png"
import edit from "../../img/edit.png"

const VideoCard = (props) => {


    return (
        <div class="video-card">
            <div>
                <img class="img-card" src={props.imagen} alt={props.imagen} />
            </div>
            <div class="card-text">
                <div class="inner-text">
                    <img class="icon-card" src={trash} />
                    <p>BORRAR</p>
                </div>
                <div class="inner-text">
                    <img class="icon-card" src={edit} />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>

    )

}

export default VideoCard