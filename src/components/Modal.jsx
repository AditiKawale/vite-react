import React from "react";
import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, onClose, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          onClose("The modal exited");
      }}
    >
      <div className="modal">
        <div className="modal-header"></div>
        <p className="close" onClick={() => onClose("The modal was closed")}>
          &times;
        </p>
        <div className="modal-content"></div>
        {children}
        <div className="modal-footer"></div>
        <div className="modal-footer">
          <button
            className="btn btn-submit"
            onClick={() => onSubmit("The submit button was clicked!!")}
          >
            Submit
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => onCancel("Cancel button was clicked!!")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
