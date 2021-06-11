import React from "react";
import "./Services.css";
import fluorideImg from "../../../images/fluoride.png";
import cavityImg from "../../../images/cavity.png";
import teethimg from "../../../images/teeth.png";
import ServicesDetail from "./ServicesDetail/ServicesDetail";

const serviceData = [
  {
    title: "Fluoride Treatment",
    image: fluorideImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis.",
  },
  {
    title: "Cavity filling",
    image: cavityImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis.",
  },
  {
    title: "Teath Whitening",
    image: teethimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, omnis.",
  },
];
const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5>Our Services</h5>
        <h2>Services We provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((serviceData) => (
            <ServicesDetail service={serviceData}></ServicesDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
