import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={` modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);
  const closeModel = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onclose) {
      props.onclose();
    }
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModel}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onclose: PropTypes.func,
};

export default Modal;
