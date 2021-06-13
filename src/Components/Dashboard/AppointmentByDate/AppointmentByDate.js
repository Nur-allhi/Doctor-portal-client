import React from "react";

const AppointmentByDate = ({ appointments }) => {
  return (
    <div>
      <h1>AppointmentByDate : {appointments.length}</h1>
      {appointments.map((data) => (
        <li key={data._id}>{data.name}</li>
      ))}
    </div>
  );
};

export default AppointmentByDate;
