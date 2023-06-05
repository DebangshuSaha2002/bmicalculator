import React from "react";
import CalculateButton from "../CalculateButton/CalculateButton";
import "./BMIform.css";
import image1 from "../Images/img1.jpg";
import CalcFunc from "../CalcFunc/CalcFunc";
import { useState } from "react";

const BMIform = () => {
  const [AnsData, SetAnsData] = useState("");
  const [NameData, SetNameData] = useState("");

  const [WeightData, SetWeightData] = useState("");
  const [HeightData, SetHeightData] = useState("");

  const onNameChangeHandler = (event) => {
    SetNameData(event.target.value);
  };

  const onWeightChangeHandler = (event) => {
    SetWeightData(event.target.value);
  };

  const onHeightChangeHandler = (event) => {
    SetHeightData(event.target.value);
  };

  const onCalculateButtonHandler = (event) => {
    if (WeightData && HeightData) {
      let Weight = parseFloat(WeightData);
      let Height = parseFloat(HeightData);
      var BMI = Weight / (Height * Height);
      BMI = BMI.toFixed(4);
      if (BMI < 18.5) {
        SetAnsData("UnderWeight");
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        SetAnsData("Healthy Weight");
      } else if (BMI >= 25 && BMI <= 29.9) {
        SetAnsData("Overweight");
      } else {
        SetAnsData("Obese");
      }
      // SetNameData("");
      // SetWeightData("");
      // SetHeightData("");
    }
  };

  const YesBMIdata = () => (
    <p className="d-flex justify-content-center mt-3">
      <span>
        {NameData} you are {AnsData && AnsData}
      </span>
    </p>
  );

  const NoBMIdata = () => (
    <p className="d-flex justify-content-center mt-3">
      Enter both the weight and height
    </p>
  );

  return (
    <div>
      <section className="img-section">
        <img className="img-arrange" src={image1} alt="" />
      </section>
      <div className="container w-50 decorate-font mt-3">
        <div className="row centerit spacing">
          <div className=" col-md">
            <div className="input-group mb-3">
              <span
                className="input-group-text input-group-addon"
                id="basic-addon1"
              >
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => onNameChangeHandler(event)}
                value={NameData}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text input-group-addon"
                id="basic-addon1"
              >
                Weight (kg)
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Weight"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => onWeightChangeHandler(event)}
                value={WeightData}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text input-group-addon"
                id="basic-addon1"
              >
                Height (m)
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Height"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => onHeightChangeHandler(event)}
                value={HeightData}
              />
              {/* </div>
            {showMessage && <p className="text-center">{message}</p>}
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                {Data.length ? (
                  Data.map((ele, index, arr) => (
                    <CalcFunc
                      name={ele.NameData}
                      weight={ele.WeightData}
                      height={ele.HeightData}
                    />
                  ))
                ) : (
                  <p className="text-center fs-7 fw-medium font-monospace">
                    Enter Weight & Height
                  </p>
                )}
              </div>
              <div className="col-md-4"></div>
            </div> */}
            </div>
          </div>

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
          <div className="container">
            {AnsData ? <YesBMIdata /> : <NoBMIdata />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMIform;
