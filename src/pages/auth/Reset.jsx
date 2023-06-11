import React, { useState } from "react";
import "./auth.css";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { auth } from "../../firebase/Config";
import { sendPasswordResetEmail } from "firebase/auth";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("check your email for reset link");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className=" container auth">
        <div className="img">
          <img src={resetImg} alt="reset pssword" width="400px" />
        </div>
        <Card>
          <div className="form">
            <h2>Reset Password</h2>

            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button className="--btn --btn-primary --btn-block" type="submit">
                Reset Password
              </button>
              <div className="links">
                <p>
                  <Link to="/login">-Login</Link>
                </p>
                <p>
                  <Link to="/register">-Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
