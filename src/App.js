import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import Notification from "./Components/Notification/Notification";

function App() {

  
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  return (
    <BrowserRouter>

      <Navbar />

      {}
      <Notification 
        show={showNotification} 
        message={notificationMessage} 
      />

      <Routes>

        {}
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

      </Routes>

    </BrowserRouter>
  );
}

export default App;
