import ModalInput from "./ModalInput"
import styles from "./Modal.css"

const Modal = () => {
    return (
        <div class="modal-container">
            <div class="modal-title">Editar Card:</div>
            <div>
                <form>
                    <ModalInput tipo="text" titulo="Título" placeholder="Agrega el título del video" />
                    <ModalInput tipo="select" titulo="Categoría" placeholder="Agrega la categoría del video" />
                    <ModalInput tipo="text" titulo="Imagen" placeholder="Agrega la url de la imagen" />
                    <ModalInput tipo="text" titulo="Video" placeholder="Agrega la url del video" />
                    <ModalInput tipo="textarea" titulo="Descripción" placeholder="Agrega una descripción para el video" />
                </form>
            </div>
        </div>
    )
}

export default Modal