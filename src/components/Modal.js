import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClick}>
        cancel
      </button>
      <button className="btn" onClick={props.onClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
