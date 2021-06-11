import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    description: "Broklayn, NY 1008#90, USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+12347890",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((infoData) => (
          <InfoCard info={infoData}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
