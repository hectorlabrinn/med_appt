import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

function DoctorCard({ name, speciality, experience, ratings }) {

  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [appointment, setAppointment] = useState(null); // 👈 NUEVO

  const handleBooking = () => {
    if (isBooked) {
      // Cancelar cita
      setIsBooked(false);
      setAppointment(null); // 👈 limpiar datos
    } else {
      // Mostrar formulario
      setShowForm(true);
    }
  };

  const handleFormSubmit = (data) => {
    setAppointment(data); // 👈 guardar datos
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

      {/* BOTÓN */}
      {!showForm && (
        <button onClick={handleBooking}>
          {isBooked ? "Cancel Appointment" : "Book Appointment"}
        </button>
      )}

      {/* FORMULARIO */}
      {showForm && <AppointmentForm onSubmit={handleFormSubmit} />}

      {/* DATOS DE LA CITA */}
      {isBooked && appointment && (
        <div style={{ marginTop: "10px" }}>
          <p><strong>Name:</strong> {appointment.name}</p>
          <p><strong>Phone:</strong> {appointment.phone}</p>
        </div>
      )}

    </div>
  );
}

export default DoctorCard;