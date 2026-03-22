import React, { useState } from "react";
import "./Login.css";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e)=>{
    e.preventDefault();

    if(!email || !password){
      alert("Enter email and password");
      return;
    }

    try{
      const response = await fetch("http://localhost:8181/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if(data.authtoken){
        alert("Login successful");

        sessionStorage.setItem("auth-token", data.authtoken);
        sessionStorage.setItem("email", email);

        window.location.href = "/";
      }else{
        alert("Invalid credentials");
      }

    }catch(error){
      console.error(error);
      alert("Server error");
    }
  }

  return(

    <div className="container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
        Login
        </button>

      </form>

    </div>

  );
}

export default Login;
