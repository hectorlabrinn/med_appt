import DoctorCard from "./Components/DoctorCard/DoctorCard";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <DoctorCard
  name="Dr. Juan Pérez"
  speciality="Cardiologist"
  experience={10}
  ratings="⭐⭐⭐⭐"
/>

<DoctorCard
  name="Dr. Ana López"
  speciality="Dermatologist"
  experience={8}
  ratings="⭐⭐⭐⭐⭐"
/>

      <Routes>

        <Route path="/search" element={<FindDoctorSearch />} />

        <Route path="/instant-consultation" element={<InstantConsultation />} />

        <Route path="/" element={<Landing_Page />} />

        <Route path="/signup" element={<Sign_Up />} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
