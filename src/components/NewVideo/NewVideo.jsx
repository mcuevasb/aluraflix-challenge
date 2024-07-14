import { useState } from "react"
import aluraflixlogo from "../../img/aluraflix-logo.png"
import cross from "../../img/cross.png"
import data from "../../data/db.json"
import styles from "./NewVideo.css"

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
            <div class="nv-overlay"></div>
            <img class="nv-close-overlay" src={cross} onClick={ props.toggleNewVideoVisible} />
            <div class="nv-container">
                <div>
                    <h1>Nuevo Video</h1>
                    <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
                    <h2>Crear Tarjeta</h2>
                </div>
                <form>
                    <div>
                        <h3>Título</h3>
                        <input class="nv-input" type="text" name="titulo" placeholder="Ingrese el título del video" required onChange={actualizarTitulo}></input>
                        <h3>Categoría</h3>
                        <select class="nv-input" name="categoria" required onChange={actualizarCategoria}>
                            <option value="" disabled selected>Seleccione una categoría</option>
                            {data.categorias.map((categoria) => { return <option value={categoria.id}>{categoria.nombre}</option> })}
                        </select>
                        <h3>Imagen</h3>
                        <input class="nv-input" type="text" name="imagen" placeholder="Ingrese enlace a la imagen" required onChange={actualizarImagen}></input>
                        <h3>Video</h3>
                        <input class="nv-input" type="text" name="video" placeholder="Ingrese enlace al video" required onChange={actualizarVideo}></input>
                        <h3>Descripción</h3>
                        <input class="nv-input" type="text" name="descripción" placeholder="Ingrese la descripción del video" required onChange={actualizarDescripcion}></input>
                    </div>
                    <div>
                        <button class="nv-button" name="guardar" onClick={insertaVideo}>Guardar</button>
                        <input class="nv-button" type="reset" name="limpiar"></input>
                    </div>
                </form>
                <center>
                    <img src={aluraflixlogo}></img>
                </center>
            </div>

        </>
    )
}

export default NuevoVideo