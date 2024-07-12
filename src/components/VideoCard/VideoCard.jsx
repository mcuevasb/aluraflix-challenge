import styles from "./VideoCard.css"
import videocard1 from "../../img/videocard1.png"
import trash from "../../img/trash.png"
import edit from "../../img/edit.png"

const VideoCard = () =>{
    return(
        <div class="video-card">
            <div>
                <img class="img-card" src={videocard1} alt="video" />
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