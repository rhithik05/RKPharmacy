import React, { useEffect, useState } from "react";
import "./Products.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useNavigate } from "react-router-dom";

const productList = [
  {
    id: 1,
    imgSrc: "51am-Ok25vL.jpg",
    title: "Jhonsons's Baby skincare wipes for babies",
    oldPrice: "₹500",
    newPrice: "₹200",
  },
  {
    id: 2,
    imgSrc: "4_3b591577-9065-4590-b330-735fabd69be9.webp",
    title: "Himalaya's gentle baby soap with low PH",
    oldPrice: "₹300",
    newPrice: "₹199",
  },
  {
    id: 3,
    imgSrc: "B07SRT5B9W.MAIN__88624.jpg",
    title: "Panteen Lively clean anti dandruff shampoo",
    oldPrice: "₹450",
    newPrice: "₹300",
  },
  {
    id: 4,
    imgSrc: "1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.webp",
    title: "The Skin Story keratin Shampoo",
    oldPrice: "₹900",
    newPrice: "₹799",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [loggedin, setloggedin] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedin"));
    setloggedin(user);
  }, []);

  const taketoproductspage = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  const handleclick = (product) => (e) => {
    e.preventDefault();

    if (!loggedin || !loggedin.email) {
      alert("Please log in to add items to cart.");
      return;
    }

    const userEmail = loggedin.email;
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};

    if (!cartItems[userEmail]) {
      cartItems[userEmail] = [];
    }

    const existingProduct = cartItems[userEmail].find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems[userEmail].push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Added to cart successfully!");
  };
  return (
    <>
      <div id="products" className="product-container">
        <div className="product-section">
          <div className="p-section">
            <div className="p-heading">
              <span className="p-heading1">Our Choice</span>
              <a onClick={taketoproductspage} href="" className="p-heading2">
                view all products &#8594;
              </a>
            </div>
            <div className="products-holder">
              {productList.map((product) => (
                <div className="product-card" key={product.id}>
                  <img className="p-card-img" src={product.imgSrc} alt="" />
                  <span className="p-card-title">{product.title}</span>
                  <div className="p-card-price">
                    <span className="slashed">{product.oldPrice}</span>
                    <span className="notslashed">{product.newPrice}</span>
                  </div>
                  <button className="p-card-button" onClick={handleclick(product)}>Add to cart</button>
                </div>
              ))}
            </div>
          </div>
          <div className="g-section">
            <div className="g-card">
              <LocalShippingIcon className="g-logo" sx={{ fontSize: 50 }} />
              <span className="g-head">All India shipping</span>
              <span className="g-body">
                Your orders are shipped seamlessly to any state in India.
              </span>
            </div>
            <div className="g-card">
              <AddModeratorIcon className="g-logo" sx={{ fontSize: 50 }} />
              <span className="g-head">30 Days Warranty</span>
              <span className="g-body">
                You have the right to return the damaged items within 30 days.
              </span>
            </div>
            <div className="g-card">
              <CreditScoreIcon className="g-logo" sx={{ fontSize: 50 }} />
              <span className="g-head">Secure payment</span>
              <span className="g-body">
                Your payments are secure with our private security network.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
