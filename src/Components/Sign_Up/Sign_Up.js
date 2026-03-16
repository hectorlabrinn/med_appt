import React, { useState } from "react";
import "./Sign_Up.css";

function Sign_Up() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !phone || !password){
      alert("Please fill all fields");
      return;
    }

    alert("Sign up successful");
  };

  return (
    <div className="container">

      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
        Register
        </button>

      </form>

    </div>
  );
}

export default Sign_Up;