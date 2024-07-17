import { useContext } from "react"

import trash from "../../img/trash.png"
import edit from "../../img/edit.png"
import { useState } from "react"
import styles from "./VideoCard.module.css"

import { VideoContext } from "../VideoContext/VideoContext"

const VideoCard = (props) => {

    const [setIdVideoSeleccionado, togglePlayerVisible, toggleModalVisible] = useContext(VideoContext)

    
    const setModal = () => {
        
        setIdVideoSeleccionado(props.id)
        toggleModalVisible(true)
    }

    const setPlayer = () => {
        setIdVideoSeleccionado(props.id)
        togglePlayerVisible(true)
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
        <div className={styles.video_card}>
            <div>
                <a   ><img className={styles.img_card} src={props.imagen} alt={props.imagen} onClick={setPlayer}/></a>
            </div>
            <div className={styles.card_text}>
                <div className={styles.inner_text} onClick={borraVideo}>
                    <img className={styles.icon_card} src={trash} />
                    <p>BORRAR</p>
                </div>
                <div className={styles.inner_text} onClick={setModal}>
                    <img className={styles.icon_card} src={edit} />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>

    )

}

export default VideoCard