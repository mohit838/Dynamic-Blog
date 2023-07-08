import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputFormChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitRegForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:7000/api/auth/register`,
        inputValue
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        <h1>Register</h1>
        <form>
          <input
            required
            type="text"
            placeholder="Username*"
            name="username"
            onChange={handleInputFormChange}
          />
          <input
            required
            type="email"
            placeholder="Email*"
            name="email"
            onChange={handleInputFormChange}
          />
          <input
            required
            type="password"
            placeholder="Password*"
            name="password"
            onChange={handleInputFormChange}
          />
          <button onClick={handleSubmitRegForm}>Register</button>
          <p>This is an error!</p>
          <span>
            Already have any account? <Link to="/login">LogIn</Link> ||
            <Link to="/">Homepage</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
