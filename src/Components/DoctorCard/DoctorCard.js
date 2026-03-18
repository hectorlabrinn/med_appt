import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

function DoctorCard({ name, speciality, experience, ratings }) {

  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (isBooked) {
      // Cancelar cita
      setIsBooked(false);
      setShowForm(false);
    } else {
      // Mostrar formulario
      setShowForm(true);
    }
  };

  const handleFormSubmit = () => {
    setIsBooked(true);
    setShowForm(false);
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

      {/* Mostrar formulario */}
      {showForm && <AppointmentForm onSubmit={handleFormSubmit} />}

      {/* Confirmación */}
      {isBooked && <p>Appointment Booked!</p>}

    </div>
  );
}

export default DoctorCard;