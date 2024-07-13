import styles from "./VideoCard.css"
import trash from "../../img/trash.png"
import edit from "../../img/edit.png"
import { useState } from "react"

const VideoCard = (props) => {

    const setModal = () => {
        
        props.setIdVideoSeleccionado(props.id)
        props.toggleModalVisible(props.categoria)
    }

    return (
        <div class="video-card">
            <div>
                <a   ><img class="img-card" src={props.imagen} alt={props.imagen}/></a>
            </div>
            <div class="card-text">
                <div class="inner-text">
                    <img class="icon-card" src={trash} />
                    <p>BORRAR</p>
                </div>
                <div class="inner-text" onClick={setModal}>
                    <img class="icon-card" src={edit} />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>

    )

}

export default VideoCard