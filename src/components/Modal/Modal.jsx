import ModalInput from "./ModalInput"
import styles from "./Modal.css"
import cross from "../../img/cross.png"
import data from '../../data/db.json'

const Modal = (props) => {


    const id = props.idVideoSeleccionado



       
    const [videoSeleccionado] = data.videos.filter((video) => { return video.id == id })

    

    
    const { titulo, categoria, imagen, video, descripcion} = videoSeleccionado


    console.log(props)
    


    return (
        <div class="modal-container">
            <div class="modal-title">
                <p>Editar Card:</p>
                <img src={cross} onClick={props.toggleModalVisible} />
            </div>

            <div>
                <form>
                    <ModalInput value={titulo} name="titulo" tipo="text" titulo="Título" placeholder="Agrega el título del video" />
                    <ModalInput name="categoria" tipo="select" selected={categoria} titulo="Categoría" placeholder="Agrega la categoría del video" />
                    <ModalInput value={imagen} name="imagen" tipo="text" titulo="Imagen" placeholder="Agrega la url de la imagen" />
                    <ModalInput value={video} name="video" tipo="text" titulo="Video" placeholder="Agrega la url del video" />
                    <ModalInput value={descripcion} name="descripcion" tipo="textarea" titulo="Descripción" placeholder="Agrega una descripción para el video" />
                </form>
            </div>
            <div class="modal-buttons">
                <button class="modal-button">GUARDAR</button>
                <button class="modal-button">LIMPIAR</button>
            </div>
        </div>
    )
}

export default Modal