import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="login">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="Username*" />
          <input required type="email" placeholder="Email*" />
          <input required type="password" placeholder="Password*" />
          <button>Register</button>
          <p>This is an error!</p>
          <span>
            Already have any account? <Link to="/login">LogIn</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
