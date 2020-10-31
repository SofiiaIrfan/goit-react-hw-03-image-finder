<<<<<<< HEAD
import React from 'react';
import './Modal.css';

const Modal = ({ info, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={info} alt="" />
      </div>
    </div>
  );
};

export default Modal;
=======
import React from 'react';
import './Modal.css';

const Modal = ({ info, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={info} alt="" />
      </div>
    </div>
  );
};

export default Modal;
>>>>>>> e032552d71e3a59588ddf32d9a6561dc6ae9c4a6
