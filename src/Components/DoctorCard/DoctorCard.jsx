import React, { useState, useEffect } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentFormIC";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./DoctorCard.css";

function DoctorCard({ 
  name, 
  speciality, 
  experience, 
  ratings,
  setShowNotification,
  setNotificationMessage
}) {

  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(name);
    if (saved) {
      setAppointment(JSON.parse(saved));
      setIsBooked(true);
    }
  }, [name]);

  const handleBooking = () => {
    if (isBooked) {
      setIsBooked(false);
      setAppointment(null);
      localStorage.removeItem(name);
      setShowNotification(false);
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (data) => {
    setAppointment(data);
    setIsBooked(true);
    setShowForm(false);

    localStorage.setItem(name, JSON.stringify(data));

    setNotificationMessage(
      `Appointment booked with ${name} for ${data.name}`
    );
    setShowNotification(true);
  };

  return (
    <div className="doctor-card-container">

      <div className="doctor-card-details-container">
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">
            {experience} years experience
          </div>
          <div className="doctor-card-detail-consultationfees">
            Ratings: {ratings}
          </div>
        </div>
      </div>

      {!showForm && (
        <button onClick={handleBooking}>
          {isBooked ? "Cancel Appointment" : "Book Appointment"}
        </button>
      )}

      {showForm && (
        <AppointmentForm onSubmit={handleFormSubmit} />
      )}

      {isBooked && appointment && (
        <div style={{ marginTop: "10px" }}>
          <p><strong>Name:</strong> {appointment.name}</p>
          <p><strong>Phone:</strong> {appointment.phone}</p>
        </div>
      )}

      <ReviewForm doctorName={name} />

    </div>
  );
}

export default DoctorCard;
