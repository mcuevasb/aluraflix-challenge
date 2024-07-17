import aluraflixbg from "../../img/aluraflix-bg.png";
import styles from "./Banner.module.css";
import data from "../../data/db.json"
import { useContext, useEffect, useState } from "react";

import { VideoContext } from "../VideoContext/VideoContext";

const Banner = (props) => {

    const [idVideo, setIdVideo] = useState("1")

    const [videoSeleccionado] = data.videos.filter((video) => { return video.id === idVideo })
    const { titulo, categoria, imagen, video, descripcion } = videoSeleccionado
    const [{ nombre, color }] = data.categorias.filter((cat) => { return cat.id === categoria })

    const [setIdVideoSeleccionado, togglePlayerVisible] = useContext(VideoContext)

    console.log(setIdVideoSeleccionado);


    useEffect(()=>{

        setIdVideo(Math.floor((Math.random() * (data.videos.length-1)+1)).toString())
        
    }, [])

    const setPlayer = () => {
        setIdVideoSeleccionado(idVideo)
        togglePlayerVisible(true)
    }

    return (
        <section className={styles.banner}>
            <img className={styles.banner_background} src={aluraflixbg} />
            <div className={styles.banner_content}>
                <div>
                    <div style={{ backgroundColor: color }} className={styles.banner_title}>{nombre}</div>
                    <div className={styles.banner_subtitle}>{titulo}</div>
                    <div className={styles.banner_text}>{descripcion}</div>
                </div>
                <div>
                    <img className={styles.banner_img} src={imagen} onClick={setPlayer} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
