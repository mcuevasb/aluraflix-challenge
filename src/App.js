import { useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Videos from "./components/Videos/Videos";
import Modal from "./components/Modal/Modal";
import Player from "./components/Player/Player";

function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [playerVisible, setPlayerVisible] = useState(false)
  const [idVideoSeleccionado, setIdVideoSeleccionado] = useState()

  
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  const togglePlayerVisible = () => {
    setPlayerVisible(!playerVisible)
  }

  return (

    <div>
      <Header />
      <Banner />
      <Videos toggleModalVisible={toggleModalVisible} togglePlayerVisible={togglePlayerVisible} setIdVideoSeleccionado={setIdVideoSeleccionado}/>
      {modalVisible? <Modal idVideoSeleccionado={idVideoSeleccionado} toggleModalVisible={toggleModalVisible} /> : <></>} 
      {playerVisible? <Player idVideoSeleccionado={idVideoSeleccionado} togglePlayerVisible={togglePlayerVisible} /> : <></>} 
      
    </div>
  );
}

export default App;
