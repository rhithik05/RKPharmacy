import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Navbar from "./Navbar";``
import Footer from "./Footer";

const Cart = () => {
  const [userCartItems, setUserCartItems] = useState([]);
  const [loggedin, setloggedin] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedin"));
    setloggedin(user);

    if (user && user.email) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
      const userItems = cartItems[user.email] || [];
      setUserCartItems(userItems);
    }
  }, []);

  const a = useNavigate();

  const backtoproducts = () => {
    a("/products");
  };

  const updateCartInStorage = (items) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    cartItems[loggedin.email] = items;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setUserCartItems(items);
  };

  const handleRemove = (id) => {
    const updatedItems = userCartItems.filter((item) => item.id !== id);
    updateCartInStorage(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = userCartItems
      .map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;
          return updatedQuantity > 0
            ? { ...item, quantity: updatedQuantity }
            : null;
        }
        return item;
      })
      .filter((item) => item !== null);
    updateCartInStorage(updatedItems);
  };

  const handleIncrease = (id) => {
    const updatedItems = userCartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartInStorage(updatedItems);
  };

  if (!loggedin || !loggedin.email) {
    return (
      <>
      <Navbar/>
        <button onClick={backtoproducts} className="backbutton">
          &#8592; Back to products
        </button>
        <div className="cart-container">
          <h1>Please log in to view your cart.</h1>
        </div>
        <Footer></Footer>
      </>
    );
  }

  if (userCartItems.length === 0) {
    return (
      <>
      <Navbar/>
        <button onClick={backtoproducts} className="backbutton">
          &#8592; Back to products
        </button>
        <div className="cart-container">
          <h1>Your cart is empty.</h1>
        </div>
      <Footer></Footer>
      </>
    );
  }

  return (
    <>
    <Navbar/>
      <button onClick={backtoproducts} className="backbutton">
        &#8592; Back to products
      </button>
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-items">
          {userCartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.title} />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: {item.newPrice}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => handleDecrease(item.id)}>
                    <RemoveIcon sx={{ fontSize: 15 }} />
                  </button>
                  <button onClick={() => handleIncrease(item.id)}>
                    <AddIcon sx={{ fontSize: 15 }} />
                  </button>
                  <button onClick={() => handleRemove(item.id)}>
                    <DeleteForeverIcon sx={{ fontSize: 15 }} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {userCartItems.length > 0 && (
          <div className="checkout-container">
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
