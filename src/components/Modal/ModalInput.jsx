import styles from "./ModalInput.css"

const ModalInput = (props) => {

    const {titulo, tipo, placeholder} = props

    return(     
        <div class="input-container">
            <div class="titulo">{titulo}</div>
            <div>
                <input type={tipo} placeholder={placeholder}/>
            </div>
        </div>
    )    
}

export default ModalInput