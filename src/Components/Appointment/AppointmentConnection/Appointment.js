import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BookAppointment from "../BookAppointment/BookAppointment";
import AppointmentHeader from "./../AppoinmentHeader/AppointmentHeader";

const Appointment = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setselectedDate(date);
  };

  return (
    <div>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment date={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
