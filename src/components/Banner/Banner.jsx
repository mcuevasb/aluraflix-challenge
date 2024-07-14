import aluraflixbg from "../../img/aluraflix-bg.png";
import styles from "./Banner.module.css";
import data from "../../data/db.json"
import { useState } from "react";

const Banner = () => {

    const randomId = Math.floor(Math.random()*data.videos.length)

    console.log({randomId})

    const [idVideo, setIdVideo] = useState(randomId.toString())

    const [videoSeleccionado] = data.videos.filter((video) => { return video.id === idVideo })

    const [titulo, setTitulo] = useState(videoSeleccionado.titulo)
    const [categoria, setCategoria] = useState(videoSeleccionado.categoria)
    const [imagen, setImagen] = useState(videoSeleccionado.imagen)
    const [video, setVideo] = useState(videoSeleccionado.video)
    const [descripcion, setDescripcion] = useState(videoSeleccionado.descripcion)

    const [{nombre, color}] = data.categorias.filter((cat) => { return cat.id === categoria})

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
                    <img className={styles.banner_img} src={imagen} />
                </div>

            </div>
        </section>
    );
};

export default Banner;
