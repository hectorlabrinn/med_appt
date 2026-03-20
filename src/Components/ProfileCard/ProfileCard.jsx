import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard() {

  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");

    if (!token) {
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const token = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const res = await fetch(`${API_URL}/auth/user`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Email": email
        }
      });

      const data = await res.json();
      setUserDetails(data);
      setUpdatedDetails(data);

    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = () => setEditMode(true);

  const handleChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    await fetch(`${API_URL}/auth/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Email": email
      },
      body: JSON.stringify(updatedDetails)
    });

    setUserDetails(updatedDetails);
    setEditMode(false);

    alert("Profile Updated");
  };

  return (
    <div className="profile-card">

      {!editMode ? (
        <div>
          <h2>Welcome, {userDetails.name}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <input
            name="name"
            value={updatedDetails.name || ""}
            onChange={handleChange}
          />

          <input
            name="phone"
            value={updatedDetails.phone || ""}
            onChange={handleChange}
          />

          <button type="submit">Save</button>

        </form>
      )}

    </div>
  );
}

export default ProfileCard;