import React from "react";
import "./auth.css";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
const Login = () => {
  return (
    <section className=" container auth">
      <div className="img">
        <img src={loginImg} alt="Login" width="400px" />
      </div>
      <Card>
        <div className="form">
          <h2>Login</h2>

          <form action="">
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>

          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" />
            Login With Google
          </button>
          <span className="register">
            <p>Don't have an account ? </p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
