import React, { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Date is required.";
    if (!form.time) newErrors.time = "Time is required.";
    if (!form.guests || form.guests < 1)
      newErrors.guests = "Guests must be at least 1.";
    if (!form.occasion) newErrors.occasion = "Please select an occasion.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length === 0) {
      alert("Booking submitted!");
      console.log(form);
    } else {
      setErrors(validation);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="date" onChange={handleChange} />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time</label>
      <input type="time" name="time" id="time" onChange={handleChange} />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests</label>
      <input type="number" name="guests" id="guests" min="1" max="10" onChange={handleChange} />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select name="occasion" id="occasion" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <span role="alert">{errors.occasion}</span>}

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;