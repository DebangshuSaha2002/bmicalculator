import React from "react";

const CalcFunc = ({ name, weight, height }) => {
  return (
    <>
      <div className="container list-group ">
        <div className="row  alert alert-info">
          <div className="col-md ">
            <div className="d-flex justify-content-between">
              <p> Name: {name} </p>
              <p> Weight: {weight} </p>
              <p> Height: {height} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalcFunc;
