import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Forget.css"

const Forget = () => {
    const a = useNavigate();

    const handlelforget = (e) => {
        e.preventDefault();
        alert("Password reset link has been sent to your email address.");
        a("/login");
      };

    const backtologin = () => {
        a("/login");
      };
  return (
    
    <>
      <button onClick={backtologin} className="backbutton">
        &#8592; Back to Login
      </button>
      <div className="forget-section">
        <div className="forget-container">
          <span className="forget-heading">Did you forget your password</span>
          <div className="forget-form-container">
            <h1 className="forget-text">No worries</h1>
            <form className="forget-form" onSubmit={handlelforget} action="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Reset</button>
            </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Forget