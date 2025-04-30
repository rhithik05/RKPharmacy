import React, { useRef } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailref = useRef();
  const passref = useRef();
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const a = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;
    if (users[email]) {
      if (users[email].password === password) {
        alert("login successful");
        sessionStorage.setItem(
          "loggedin",
          JSON.stringify({
            email: email,
            firstname: users[email].firstname,
            lastname: users[email].lastname,
            phoneno: users[email].phoneno,
          })
        );
        a("/");
      } else {
        alert("invalid password");
      }
    } else {
      alert("no user found");
    }
  };

  const backtohome = () => {
    a("/");
  };
  return (
    <>
      <button onClick={backtohome} className="backbutton">
        &#8592; Back to home
      </button>
      <div className="login-section">
        <div className="login-container">
          <span className="login-heading">Welcome Back</span>
          <div className="login-form-container">
            <h1 className="login-text">Login</h1>
            <form className="login-form" onSubmit={handlelogin} action="">
              <input
                ref={emailref}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <input
                ref={passref}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <button type="submit">Login</button>
            </form>
            <Link to="/forgetpassword">Forgot password?</Link>
            <div className="register">
              <span>New to our page</span>
              <Link to="/register" className="register-link">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
