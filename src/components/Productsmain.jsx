import React, { useEffect, useState } from 'react';
import "./Productsmain.css";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Productsmain = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productList = [
    {
      id: 1,
      imgSrc: "51am-Ok25vL.jpg",
      title: "Jhonsons's Baby skincare wipes for babies",
      oldPrice: "₹500",
      newPrice: "₹200",
      category: "Baby Care",
    },
    {
      id: 2,
      imgSrc: "4_3b591577-9065-4590-b330-735fabd69be9.webp",
      title: "Himalaya's gentle baby soap with low PH",
      oldPrice: "₹300",
      newPrice: "₹199",
      category: "Baby Care",
    },
    {
      id: 3,
      imgSrc: "B07SRT5B9W.MAIN__88624.jpg",
      title: "Pantene Lively Clean Anti-Dandruff Shampoo",
      oldPrice: "₹450",
      newPrice: "₹300",
      category: "Hair Care",
    },
    {
      id: 4,
      imgSrc: "1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.webp",
      title: "The Skin Story Keratin Shampoo",
      oldPrice: "₹900",
      newPrice: "₹799",
      category: "Hair Care",
    },
    {
      id: 5,
      imgSrc: "pfizer-paracetamol-tablets-osullivans-pharmacy-medicines-health-5391523250047-703256_grande.webp",
      title: "Pfizer Paracetamol 500mg Tablets",
      oldPrice: "₹200",
      newPrice: "₹99",
      category: "tablets",
    },
    {
      id: 6,
      imgSrc: "doxycycline-product-image.jpg",
      title: "Actavis Doxycycline 100mg Tablets",
      oldPrice: "₹400",
      newPrice: "₹299",
      category: "tablets",
    },
    {
      id: 7,
      imgSrc: "005a3248.jpg",
      title: "Bakson's vitamin d plus tablets",
      oldPrice: "₹100",
      newPrice: "₹84",
      category: "tablets",
    },
    {
      id: 8,
      imgSrc: "CRO0022_1.webp",
      title: "crocin cold and flu max tablets",
      oldPrice: "₹70",
      newPrice: "₹50",
      category: "tablets",
    },
    {
      id: 9,
      imgSrc: "inlife-calcium-with-vitamin-d3-supplement-60-tablets-778674.webp",
      title: "inline calcium with vitamin d3 tablets",
      oldPrice: "₹300",
      newPrice: "₹250",
      category: "tablets",
    },
    {
      id: 10,
      imgSrc: "ListingVitaminB12Slide01NewWC.webp",
      title: "healthveda vitamin B12 tablets",
      oldPrice: "₹300",
      newPrice: "₹250",
      category: "tablets",
    },
    
  ];

  const categories = ["All", "Baby Care", "Hair Care","tablets"];

  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((p) => p.category === selectedCategory);

      const navigate = useNavigate();
      const [loggedin, setloggedin] = useState(null);
    
      useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("loggedin"));
        setloggedin(user);
      }, []);

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
      <Navbar />
      <div className="mproducts-page">
        <aside className="sidebar">
          <h3>Filter by Category</h3>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <div className="mproducts-holder">
          {filteredProducts.map((product, idx) => (
            <div className="mproduct-card" key={idx}>
              <img className="mp-card-img" src={product.imgSrc} alt={product.title} />
              <span className="mp-card-title">{product.title}</span>
              <div className="mp-card-price">
                <span className="mslashed">{product.oldPrice}</span>
                <span className="mnotslashed">{product.newPrice}</span>
              </div>
              <button className="mp-card-button" onClick={handleclick(product)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productsmain;
