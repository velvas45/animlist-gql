import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactDOM from "react-dom";

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalBody,
} from "./modal.styles";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  //   if (!props.show) {
  //     return null;
  //   }

  return ReactDOM.createPortal(
    <ModalContainer
      className={`${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
          <AiOutlineCloseCircle onClick={props.onClose} />
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        {props.haveFooter && (
          <ModalFooter>
            <button onClick={props.onClose} className="btn__close">
              Close
            </button>
            <button className="btn__add" onClick={() => props.onSubmit()}>
              {props.btnTitle}
            </button>
          </ModalFooter>
        )}
      </ModalContent>
    </ModalContainer>,
    document.getElementById("root")
  );
};

export default Modal;
