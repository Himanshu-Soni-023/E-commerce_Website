import React, { useState } from "react";
import "./auth.css";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { toast } from "react-toastify";

import Loader from "../../components/loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // from firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login successful...");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login succesfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className=" container auth">
        <div className="img">
          <img src={loginImg} alt="Login" width="400px" />
        </div>
        <Card>
          <div className="form">
            <h2>Login</h2>

            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Login
              </button>
              <div className="links">
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>

            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
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
    </>
  );
};

export default Login;
