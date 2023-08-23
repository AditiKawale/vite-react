import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Form from "./components/Form";
import Form2 from "./components/form2";
import APIcall from "./components/APIcall";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message}
      {/* <Navigation />
      <HeroSection /> */}
      {/* <Form2 /> */}
      {/* <APIcall /> */}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Open
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
            onClose={handleButtonClick}
          >
            <h1>This is modal title</h1>
          </Modal>,
          document.body
        )}
      <p>this is behind</p>
    </div>
  );
};

export default App;
