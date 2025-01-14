// Hero.js
import React from "react";
import "./Hero.css";  // For the styling
import arrowIcon from "../assets/icons/arrow-icon.png"
function Hero() {
  return (
    <section className="hero">
      {/* Left Section */}
      <div className="hero__left">
      <ul>
        <li><a href="/">Women's Fashion</a></li>
        <li><a href="/">Men's Fashion</a></li>
        <li><a href="/">Electronics</a></li>
        <li><a href="/">Home & Kitchen</a></li>
        <li><a href="/">Beauty & Personal Care</a></li>
        <li><a href="/">Sports & Outdoors</a></li>
        <li><a href="/">Toys & Games</a></li>
        <li><a href="/">Health & Wellness</a></li>
        <li><a href="/">Books & Stationery</a></li>
        <li><a href="/">Jewelry & Accessories</a></li>
    </ul>

      </div>

      {/* Right Section */}
      <div className="hero__right">
        <div className="hero__image-container">
          <img src="Product photos/Hero-bg.png" alt="Hero" className="hero__image" />
          <div className="hero__text">Up to 10%  <br></br>off Voucher</div>
          <div className="hero__shop-now">Shop Now {""}
            <img src={arrowIcon} alt="Arrow" className="arrow__icon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
