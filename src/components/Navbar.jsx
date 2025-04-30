import React, { useEffect, useState } from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const a = useNavigate();
  const taketoprofile = () => {
    a("/profile");
  };
  const [loggedin, setloggedin] = useState(null);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedin"));
    setloggedin(user);
  }, []);

  const handleNavClick = (hash) => {
    window.location.href = `/${hash}`;
  };

  const handleclick = () => {
    a("/");
  }

  return (
    <>
      <div className="navbar">
        <div onClick={handleclick} className="logo-section">
          <LocalHospitalIcon className="logo" />
          <div>
            <p className="logotext">
              <span className="logotext1">RK</span>PHARMACY
            </p>
          </div>
        </div>
        <div className="nav-section">
          <a className="nav-link links" onClick={() => handleNavClick("")}>
            Home
          </a>
          <a
            className="nav-link links"
            onClick={() => handleNavClick("#about")}
          >
            About
          </a>
          <a
            className="nav-link links"
            onClick={() => handleNavClick("#products")}
          >
            Products
          </a>
          <a
            className="nav-link links"
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </a>
          <div className="nav-link icons">
            {loggedin ? (
              <div onClick={taketoprofile}>
                <Link
                  className="nav-link icons profile"
                  to="/profile"
                  style={{ paddingRight: "0px" }}
                >
                  <AccountCircleIcon />{" "}
                </Link>{" "}
                <span style={{ paddingLeft: "0px", verticalAlign: "top" }}>
                  {loggedin.firstname}
                </span>
              </div>
            ) : (
              <Link className="nav-link links" to="/login">
                Login
              </Link>
            )}
          </div>
          <Link className="nav-link icons" to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
