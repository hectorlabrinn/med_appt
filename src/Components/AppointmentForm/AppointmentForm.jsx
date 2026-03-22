import React, { useState } from "react";

function AppointmentForm({ onSubmit }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({ name, phone, date, time });

    setName("");
    setPhone("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">
        Book Appointment
      </button>

    </form>
  );
}

export default AppointmentForm;
