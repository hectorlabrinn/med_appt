import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctorSearch() {

  const [speciality, setSpeciality] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!speciality) {
      alert("Please enter a speciality");
      return;
    }

    
    navigate(`/search?speciality=${speciality}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search doctors by speciality"
        value={speciality}
        onChange={(e) => setSpeciality(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default FindDoctorSearch;
