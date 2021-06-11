import React from "react";
// import "./ServicesDetail.css";

const ServicesDetail = ({ service }) => {
  return (
    <div className="services-detail-container col-md-4 text-center">
      <img style={{ height: "50px" }} src={service.image} alt="" />
      <h5 className="mt-3 mb-3">{service.title}</h5>
      <small>{service.description}</small>
    </div>
  );
};

export default ServicesDetail;
