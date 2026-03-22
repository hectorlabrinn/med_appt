import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ doctorName }) {

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !review || rating === 0) {
      alert("Complete all fields");
      return;
    }

    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="review-card">

      <h4 className="review-title">Review for {doctorName}</h4>

      {/* BOTÓN PARA MOSTRAR FORM */}
      {!submitted && !showForm && (
        <button 
          className="review-btn"
          onClick={() => setShowForm(true)}
        >
          Give Review
        </button>
      )}

      {/* FORMULARIO */}
      {showForm && (
        <form onSubmit={handleSubmit} className="review-form">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Write your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          {/* RATING */}
          <div className="rating-container">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={star <= rating ? "star active" : "star"}
              >
                ★
              </span>
            ))}
          </div>

          {
          <button 
            type="submit" 
            className="review-btn"
            disabled={submitted}
          >
            Submit Review
          </button>

        </form>
      )}

      {/* RESULTADO */}
      {submitted && (
        <div className="review-result">
          <p className="review-name">{name}</p>
          <p className="review-text">{review}</p>
          <p className="review-stars">{"★".repeat(rating)}</p>

          {}
          <p style={{ color: "green", marginTop: "10px" }}>
            Review already submitted
          </p>
        </div>
      )}

    </div>
  );
}

export default ReviewForm;
