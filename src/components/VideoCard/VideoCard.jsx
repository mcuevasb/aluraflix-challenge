import styles from "./VideoCard.css"
import trash from "../../img/trash.png"
import edit from "../../img/edit.png"
import { useState } from "react"

const VideoCard = (props) => {

    const setModal = () => {
        
        props.setIdVideoSeleccionado(props.id)
        props.toggleModalVisible(true)
    }

    const setPlayer = () => {
        props.setIdVideoSeleccionado(props.id)
        props.togglePlayerVisible(true)
    }

    const borraVideo = () => {

        const url = "http://localhost:5000/videos/" + props.id

        fetch(url, {
            method: 'DELETE'
        })
            .then(response => {})
            .catch(error => {});
    }

    return (
        <div class="video-card">
            <div>
                <a   ><img class="img-card" src={props.imagen} alt={props.imagen} onClick={setPlayer}/></a>
            </div>
            <div class="card-text">
                <div class="inner-text" onClick={borraVideo}>
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