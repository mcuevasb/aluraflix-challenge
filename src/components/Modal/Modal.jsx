import ModalInput from "./ModalInput"
import cross from "../../img/cross.png"
import data from '../../data/db.json'
import styles from "./Modal.module.css"
import { useState } from "react"

const Overlay = () => {
    return <div class="overlay"></div>
}

const Modal = (props) => {

    const id = props.idVideoSeleccionado

    const [videoSeleccionado] = data.videos.filter((video) => { return video.id == id })

    const [titulo, setTitulo] = useState(videoSeleccionado.titulo)
    const [categoria, setCategoria] = useState(videoSeleccionado.categoria)
    const [imagen, setImagen] = useState(videoSeleccionado.imagen)
    const [video, setVideo] = useState(videoSeleccionado.video)
    const [descripcion, setDescripcion] = useState(videoSeleccionado.descripcion)


    const updateData = (event) => {

        const url = "http://localhost:5000/videos/" + id

        event.preventDefault()

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, titulo, categoria, imagen, video, descripcion })
        })
            .then(response => { })
            .catch(error => { });

        props.toggleModalVisible(false)
    }


    const resetData = (event) =>{

        //event.preventDefault()

        const [resetVideo] = data.videos.filter((video) => { return video.id == id })
            setTitulo(resetVideo.titulo)
            setCategoria(resetVideo.categoria)
            setImagen(resetVideo.imagen)
            setVideo(resetVideo.video)
            setDescripcion(resetVideo.descripcion)
        }

    return (
        <>
            <Overlay />
            <div className={styles.modal_container}>
                <div className={styles.modal_title}>
                    <p>Editar Card:</p>
                    <img src={cross} className={styles.close_modal} onClick={props.toggleModalVisible} />
                </div>
                <form>

                    <div>

                        <ModalInput setValor={setTitulo} value={titulo} name="titulo" tipo="text" titulo="Título" placeholder="Agrega el título del video" />
                        <ModalInput setValor={setCategoria} name="categoria" tipo="select" selected={categoria} titulo="Categoría" placeholder="Agrega la categoría del video" />
                        <ModalInput setValor={setImagen} value={imagen} name="imagen" tipo="text" titulo="Imagen" placeholder="Agrega la url de la imagen" />
                        <ModalInput setValor={setVideo} value={video} name="video" tipo="text" titulo="Video" placeholder="Agrega la url del video" />
                        <ModalInput setValor={setDescripcion} value={descripcion} name="descripcion" tipo="textarea" titulo="Descripción" placeholder="Agrega una descripción para el video" />

                    </div>
                    <div className={styles.modal_buttons}>
                        <button className={styles.modal_button} onClick={updateData}>Guardar</button>
                        <input type="reset" className={styles.modal_button} onClick={resetData}></input>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Modal