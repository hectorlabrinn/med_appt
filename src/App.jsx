import React, { useState } from "react";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";
import Notification from "./Components/Notification/Notification";

function App() {

  // 🔔 ESTADO GLOBAL DE NOTIFICACIÓN
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  return (
    <BrowserRouter>

      <Navbar />

      {/* 🔥 NOTIFICACIÓN GLOBAL */}
      <Notification 
        show={showNotification} 
        message={notificationMessage} 
      />

      <Routes>

        {/* 👇 PASAMOS PROPS A LANDING */}
        <Route 
          path="/" 
          element={
            <Landing_Page 
              setShowNotification={setShowNotification}
              setNotificationMessage={setNotificationMessage}
            />
          } 
        />

        <Route path="/search" element={<FindDoctorSearch />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<ReportsLayout />} />
        <Route path="/profile" element={<ProfileCard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
