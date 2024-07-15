import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Videos from "./components/Videos/Videos";
import Modal from "./components/Modal/Modal";
import Player from "./components/Player/Player";
import NuevoVideo from "./components/NewVideo/NewVideo";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [newVideoVisible, setNewVideoVisible] = useState(false);
  const [idVideoSeleccionado, setIdVideoSeleccionado] = useState();

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const togglePlayerVisible = () => {
    setPlayerVisible(!playerVisible);
  };

  const toggleNewVideoVisible = () => {
    setNewVideoVisible(!newVideoVisible);
  };

  return (
    <div>
      <Header toggleNewVideoVisible={toggleNewVideoVisible} />
      <Banner
        setIdVideoSeleccionado={setIdVideoSeleccionado}
        togglePlayerVisible={togglePlayerVisible}
      />
      <Videos
        toggleModalVisible={toggleModalVisible}
        togglePlayerVisible={togglePlayerVisible}
        setIdVideoSeleccionado={setIdVideoSeleccionado}
      />
      {modalVisible && (
        <Modal
          idVideoSeleccionado={idVideoSeleccionado}
          toggleModalVisible={toggleModalVisible}
        />
      )}
      {playerVisible && (
        <Player
          idVideoSeleccionado={idVideoSeleccionado}
          togglePlayerVisible={togglePlayerVisible}
        />
      )}
      {newVideoVisible && (
        <NuevoVideo toggleNewVideoVisible={toggleNewVideoVisible}></NuevoVideo>
      )}
    </div>
  );
}

export default App;
