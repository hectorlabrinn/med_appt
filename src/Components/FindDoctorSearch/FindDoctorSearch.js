import React, { useState } from "react";
import "./FindDoctorSearch.css";
function FindDoctorSearch() {
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);

  const specialties = ["Dentist", "Cardiologist", "Dermatologist", "Neurologist"];

  return (
    <div>
      <input
        type="text"
        placeholder="Search doctors by specialty"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
      />

      {showList && (
        <ul>
          {specialties.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FindDoctorSearch;