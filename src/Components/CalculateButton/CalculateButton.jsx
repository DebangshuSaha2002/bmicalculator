import React from "react";
import "./CalculateButton.css";
import { useState } from "react";

const CalculateButton = () => {
  const onCalculateButtonHandler = () => {
    console.log("CLick is working");
  };
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md">
            <button
              type="button"
              id="space-left"
              className="btn btn-outline-danger btn-sm float-end"
              onClick={onCalculateButtonHandler}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateButton;
