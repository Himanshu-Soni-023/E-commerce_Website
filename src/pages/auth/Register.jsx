import React from "react";
import "./auth.css";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className=" container auth">
      <Card>
        <div className="form">
          <h2>Register</h2>

          <form action="">
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className="register">
            <p>Already have an account ? </p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className="img">
        <img src={registerImg} alt="register" width="400px" />
      </div>
    </section>
  );
};

export default Register;
