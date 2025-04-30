import React from 'react'
import "./Profile.css"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const a=useNavigate()
    const [loggedin, setloggedin] = useState(null);
    useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem("loggedin"));
      setloggedin(user);
    }, loggedin);
    const handlelogout = (e) => {
      sessionStorage.removeItem("loggedin");
      alert("logged out successfully");
      setloggedin(null);
      a("/")
    };
    const backtohome = () => {
      a("/")
    }
  return (
   <>
   <button onClick={backtohome} className="backbutton">
        &#8592; Back to home
      </button>
    <div className="profile-container">
        <span className="profile-heading">Profile</span>
        {loggedin ? (
          <div className="profile-details">
            <p><strong>Email:</strong> {loggedin.email}</p>
            <p><strong>First Name:</strong> {loggedin.firstname}</p>
            <p><strong>Last Name:</strong> {loggedin.lastname}</p>
            <p><strong>Phone No:</strong> {loggedin.phoneno}</p>
            <button onClick={handlelogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <div className="not-logged-in">
            <p>You are not logged in.</p>
          </div>
        )}
      </div>
   </>
  )
}

export default Profile