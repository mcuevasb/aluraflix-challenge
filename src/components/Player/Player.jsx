import cross from "../../img/cross.png"
import data from "../../data/db.json"
import styles from "./Player.module.css"

const Player = (props) =>{

    const id = props.idVideoSeleccionado

    const [videoSeleccionado] = data.videos.filter((video) => { return video.id == id })

    return(
    <>
        <div className={styles.overlay}></div>
        <iframe width="90%" height="90%" src={videoSeleccionado.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.close_overlay} src={cross} onClick={props.togglePlayerVisible} />        
    </>
    )
}

export default Player