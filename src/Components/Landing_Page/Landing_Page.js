import React from "react";
import "./LandingPage.css";
import DoctorCard from "../DoctorCard/DoctorCard";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";

function Landing_Page({ setShowNotification, setNotificationMessage }) {
  return (
    <div className="container">

      {/* HERO */}
      <div className="hero-section">
        <h1 className="text-gradient">Welcome to StayHealthy</h1>
        <p>Your health companion</p>
      </div>

      {/* SEARCH */}
      <div className="search-section">
        <FindDoctorSearch />
      </div>

      {/* DOCTORS */}
      <div className="doctors-section">
        <h2>Available Doctors</h2>

        <div className="doctors-container">

          <DoctorCard
            name="Dr. Juan Pérez"
            speciality="Cardiologist"
            experience={10}
            ratings="⭐⭐⭐⭐"
            setShowNotification={setShowNotification}
            setNotificationMessage={setNotificationMessage}
          />

          <DoctorCard
            name="Dr. Ana López"
            speciality="Dermatologist"
            experience={8}
            ratings="⭐⭐⭐⭐⭐"
            setShowNotification={setShowNotification}
            setNotificationMessage={setNotificationMessage}
          />

        </div>
      </div>

    </div>
  );
}

export default Landing_Page;