import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Checkout = () => {
  const [loggedin, setLoggedin] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const a = useNavigate();
  const backtocart = () => {
    a("/cart");
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedin"));
    setLoggedin(user);

    if (user && user.email) {
      const allCart = JSON.parse(localStorage.getItem("cartItems")) || {};
      setCartItems(allCart[user.email] || []);
    }
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.newPrice.replace("₹", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const handlePlaceOrder = () => {
    const totalPrice = getTotalPrice();

    const orderDetails = {
      email: loggedin.email,
      items: cartItems,
      totalPrice: totalPrice,
      date: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderDetails);
    localStorage.setItem("orders", JSON.stringify(orders));

    const allCart = JSON.parse(localStorage.getItem("cartItems")) || {};
    allCart[loggedin.email] = [];
    localStorage.setItem("cartItems", JSON.stringify(allCart));
    setCartItems([]);

    alert("Order placed successfully!");
    a("/");
  };

  if (!loggedin) {
    return (
      <div className="checkout-container">
        <h2>Please log in to continue with checkout.</h2>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar></Navbar>
        <button onClick={backtocart} className="backbutton">
          &#8592; Back to cart
        </button>
        <div className="checkout-container">
          <h2>Your cart is empty.</h2>
        </div>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <button onClick={backtocart} className="backbutton">
        &#8592; Back to cart
      </button>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.imgSrc} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: {item.newPrice}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Subtotal: ₹
                  {parseFloat(item.newPrice.replace("₹", "")) * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-summary">
          <h3>Total: ₹{getTotalPrice()}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
