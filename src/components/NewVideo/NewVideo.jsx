import { useState } from "react"
import aluraflixlogo from "../../img/aluraflix-logo.png"
import cross from "../../img/cross.png"
import data from "../../data/db.json"
import styles from "./NewVideo.module.css"

const NuevoVideo = (props) => {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const actualizarTitulo = (event) => { setTitulo(event.target.value) }
    const actualizarCategoria = (event) => { setCategoria(event.target.value) }
    const actualizarImagen = (event) => { setImagen(event.target.value) }
    const actualizarVideo = (event) => { setVideo(event.target.value) }
    const actualizarDescripcion = (event) => { setDescripcion(event.target.value) }

    const insertaVideo = (event) => {

        const url = "http://localhost:5000/videos"

        event.preventDefault()

        const id = (data.videos.length + 1).toString()

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, titulo, categoria, imagen, video, descripcion })
        })
            .then(response => {props.toggleNewVideoVisible() })
            .catch(error => { });
    }

    return (
        <>
            <div className={styles.nv_overlay}></div>

            <div className={styles.nv_container}>

                <div className={styles.nv_title}>
                    <div >
                        <h1>Nuevo Video</h1>
                        <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
                    </div>
                    <div>
                        <img className={styles.nv_closeoverlay} src={cross} onClick={props.toggleNewVideoVisible} />
                    </div>
                </div>
                <form className={styles.nv_form}>

                        <h2>Crear Tarjeta</h2>
                        <h4>Título</h4>
                        <input className={styles.nv_input} type="text" name="titulo" placeholder="Ingrese el título del video" required onChange={actualizarTitulo}></input>
                        <h4>Categoría</h4>
                        <select className={styles.nv_input} name="categoria" required onChange={actualizarCategoria}>
                            <option value="" disabled selected>Seleccione una categoría</option>
                            {data.categorias.map((categoria) => { return <option value={categoria.id}>{categoria.nombre}</option> })}
                        </select>
                        <h4>Imagen</h4>
                        <input className={styles.nv_input} type="text" name="imagen" placeholder="Ingrese enlace a la imagen" required onChange={actualizarImagen}></input>
                        <h4>Video</h4>
                        <input className={styles.nv_input} type="text" name="video" placeholder="Ingrese enlace al video" required onChange={actualizarVideo}></input>
                        <h4>Descripción</h4>
                        <input className={styles.nv_input} type="text" name="descripción" placeholder="Ingrese la descripción del video" required onChange={actualizarDescripcion}></input>

                    <div className={styles.nv_buttons}>
                        <button className={styles.nv_button} name="guardar" onClick={insertaVideo}>Guardar</button>
                        <input className={styles.nv_button} type="reset" name="limpiar"></input>
                    </div>
                </form>
                <div className={styles.nv_footer}>
                        <img src={aluraflixlogo}></img>
                </div>
            </div>

        </>
    )
}

export default NuevoVideo