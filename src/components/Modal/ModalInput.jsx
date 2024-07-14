import data from "../../data/db.json"
import styles from "./ModalInput.module.css"

const ModalInput = (props) => {

    const actualizaValor = (event) => (props.setValor(event.target.value))

    const { value, nombre, titulo, tipo, placeholder, selected } = props

    let modalInput = ""

    switch (tipo) {
        case "text":
            modalInput = <input type={tipo} name={nombre} className={styles.modal_input} defaultValue={value} placeholder={placeholder} onChange={actualizaValor} />
            break
        case "textarea":
            modalInput = <textarea name={nombre} className={styles.modal_input} rows="5" defaultValue={value} placeholder={placeholder} onChange={actualizaValor} />
            break
        case "select":
            modalInput = <select name={nombre} className={styles.modal_input} placeholder={placeholder} onChange={actualizaValor}>
                <option value=""  >Selecciona una categoría</option>
                {data.categorias.map((categoria) => { return <option value={categoria.id}>{categoria.nombre}</option> })}
            </select>
            break
    }

    return (
        <div class={styles.input_container}>
            <div className="titulo">{titulo}</div>
            <div>
                {modalInput}
            </div>
        </div>
    )
}

export default ModalInput