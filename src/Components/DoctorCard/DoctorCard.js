import React, { useState } from "react";
import "./DoctorCard.css";

function DoctorCard({ name, speciality, experience, ratings }) {

  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(!isBooked);
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

      <button onClick={handleBooking}>
        {isBooked ? "Cancel Appointment" : "Book Appointment"}
      </button>

      {isBooked && <p>Appointment Booked!</p>}

    </div>
  );
}

export default DoctorCard;