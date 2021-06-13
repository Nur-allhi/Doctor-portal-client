import React, { useState } from "react";
import SideBar from "./../SideBar/SideBar";
import AppointmentByDate from "./../AppointmentByDate/AppointmentByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const Dashboard = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setselectedDate(date);

    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        console.log(data);
      });
  };

  return (
    <section>
      <div style={containerStyle} className="container-fluid row ">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentByDate appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
