import React, { useState } from "react";

function AppointmentFormIC({ onSubmit }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({ name, phone });

    setName("");
    setPhone("");
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

      <button type="submit">
        Submit
      </button>

    </form>
  );
}

export default AppointmentFormIC;
