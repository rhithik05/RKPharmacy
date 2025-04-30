import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ScrollToHash from "./components/Scrolltohash";
import Productsmain from "./components/Productsmain";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Forget from "./components/Forget";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/products" element={<Productsmain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/forgetpassword" element={<Forget />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
