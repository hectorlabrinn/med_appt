import React, { useState } from "react";

function AppointmentForm({ onSubmit }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    // ✅ enviar datos al padre
    if (onSubmit) {
      onSubmit({
        name,
        phone
      });
    }

    alert("Appointment Booked!");
  };

  return (
    <div style={{ marginTop: "20px" }}>

      <h3>Book Appointment</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default AppointmentForm;