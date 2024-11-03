import "./App.css";
import { useState } from "react";
import { HomePage } from "./pages/home/HomePage";
import { AuthorizationWindow } from "./pages/home/authorization/AuthorizationWindow";

export function App() {
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
      <AuthorizationWindow
        isOpend={isActiveModal}
        closeWindow={closeModalWindow}
      />
    </>
  );
}

export default App;
