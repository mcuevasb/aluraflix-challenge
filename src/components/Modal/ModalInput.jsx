import styles from "./ModalInput.css"
import data from "../../data/db.json"

const ModalInput = (props) => {

    const {value, nombre, titulo, tipo, placeholder, selected } = props

    
    let modalInput = ""



    switch (tipo) {
        case "text":
            modalInput = <input name={nombre} class="modal-input" type={tipo} value={value} placeholder={placeholder}/>
            break
        case "textarea":
            modalInput = <textarea name={nombre} class="modal-input" rows="5" value={value} placeholder={placeholder} />
            break
        case "select":
            modalInput = <select name={nombre} class="modal-input" placeholder={placeholder}>
                   <option value=""  >Selecciona una categoría</option>
                   {data.categorias.map( (categoria)  => { return <option value={categoria.id}>{categoria.nombre}</option>})}                                      
            </select>
            break

    }

    return (
        <div class="input-container">
            <div class="titulo">{titulo + selected}</div>
            <div>
                {modalInput}
            </div>
        </div>
    )
}

export default ModalInput