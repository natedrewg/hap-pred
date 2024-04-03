import React, { useState } from "react";
import "./Modal.css"

export default function Modal({Days}) {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return(
    <>
    <button
    onClick={toggleModal}
    className="btn-modal">
      Full Day
    </button>
    
    {modal && (
      <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2><b>Full Day</b></h2>
        <b><div className="dayId"><p>Day:</p>{Days.id}</div></b> 
        <button
        className="close-modal"
        onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
    )}

    

    </>
  )
}