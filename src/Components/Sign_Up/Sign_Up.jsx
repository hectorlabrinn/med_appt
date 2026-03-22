import React, { useState } from "react";
import "./Sign_Up.css";
import { API_URL } from "../../config";

function Sign_Up() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit pressed");

    if(!name || !email || !phone || !password){
      alert("Please fill all fields");
      return;
    }

    try{

        const response = await fetch("/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,
          email:email,
          phone:phone,
          password:password
        })
      });

      const json = await response.json();

      if(response.ok && json.authtoken){

        sessionStorage.setItem("auth-token",json.authtoken);
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("phone",phone);

        alert("Registration successful");

      }else{
        alert(json.error || "Registration failed");
      }

    }catch(error){
      console.error(error);
      alert("Server error");
    }

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
