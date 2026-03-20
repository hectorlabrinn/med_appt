import React from "react";
import "./Notification.css";

function Notification({ show, message }) {

  if (!show) return null;

  return (
    <div className="notification">
      {message}
    </div>
  );
}

export default Notification;