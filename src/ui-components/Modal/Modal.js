import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ days }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Full Day
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <h1> Hello </h1>
            <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
        </div>
      )}
    </>
  );
};
export default Modal;
