import { useState, useContext } from "react";
import { VideoContext } from "./components/VideoContext/VideoContext";


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
  const [idVideoSeleccionado, setIdVideoSeleccionado] = useState(null)

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

        <VideoContext.Provider value={[setIdVideoSeleccionado, togglePlayerVisible, toggleModalVisible]}>

          <Banner/>

          <Videos/>

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

        </VideoContext.Provider>

        {newVideoVisible && (
          <NuevoVideo
            toggleNewVideoVisible={toggleNewVideoVisible}
          ></NuevoVideo>
        )}
     </div>
  );
}

export default App;
