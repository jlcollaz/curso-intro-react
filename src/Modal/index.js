import React from "react";
import "./Modal.css";
import renderPortal from "react-dom";

const Modal = ({ children }) => {
  return renderPortal.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
