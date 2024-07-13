import { useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Videos from "./components/Videos/Videos";
import Modal from "./components/Modal/Modal";

function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [idVideoSeleccionado, setIdVideoSeleccionado] = useState(3)

  
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  return (

    <div>
      <Header />
      <Banner />
      <Videos toggleModalVisible={toggleModalVisible} setIdVideoSeleccionado={setIdVideoSeleccionado}/>
      {modalVisible? <Modal idVideoSeleccionado={idVideoSeleccionado} toggleModalVisible={toggleModalVisible} /> : <></>} 
    </div>
  );
}

export default App;
