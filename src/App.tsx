import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/pages/Home";
import { AuthorizationModalWindow } from "./components/ui/Authorization-modal-window";

function App() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  function closeModalWindow() {
    setIsActiveModal(false);
  }

  function openModalWindow() {
    setIsActiveModal(true);
  }
  return (
    <>
      <HomePage openModal={openModalWindow} />
      <AuthorizationModalWindow
        isOpend={isActiveModal}
        closeWindow={closeModalWindow}
      />
    </>
  );
}

export default App;
