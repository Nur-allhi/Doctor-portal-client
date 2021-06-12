import React from "react";
import chair from "../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          Your new smile <br /> starts here
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos
          molestiae culpa maiores animi molestias doloribus assumenda quaerat
          quae porro, laborum nam soluta nisi at ullam expedita necessitatibus
          magni. A.
        </p>
        <button type="button" className="btn btn-info">
          Get Appointment
        </button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
