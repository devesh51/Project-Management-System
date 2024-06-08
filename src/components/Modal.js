import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
const Modal = ({ onCloseModel }) => {
  return ReactDOM.createPortal(
    <div className=" fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-black rounded-md shadow-md">
      <div className="mt-10 flex flex-col rounded-xl px-5 py-5 gap-5 text-black bg-stone-100">
        <h2 className="text-xl font-bold text-stone-700 my-4 text-center">
          Invalid Input
        </h2>
        <p className="text-stone-800 text-center">
          Opps... looks like you forgot to enter value.
        </p>
        <p className="text-stone-800 px-5 py-5">
          please make sure you provide a valid value for every input field.
        </p>
        <Button onClick={onCloseModel}>Okay</Button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
