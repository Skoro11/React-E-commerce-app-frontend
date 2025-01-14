import React from 'react';
import './FlashSales.css'; // Assuming you have a separate CSS file


const ProductCard = ({ image, stars, name, price, discount, discountedPrice,numOfReviews}) => {
  return (
    

    <div className="carousel__item">
        <img src={image} alt="Joystick"/>
        <span className="sale__percentage">{discount}</span>

        <span className="background">
            <svg className="heart" xmlns="http://www.w3.org/2000/svg">
            <path className="heart__path" fill="white" stroke="black" strokeWidth="1" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </span>

        <span className="background eye__bg">
            <svg  className="eye" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="eye__path" d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path className="eye__path" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    <div className="cart__popup">Add to cart</div>
    <div className="product__description">
        <h3 className="padding__description">{name}</h3>
        <span className="discount ">{price}</span><span className="crossed"><strike>{discountedPrice}</strike></span>
        <div className="padding__description"> 
            <img src={stars} alt="star"/><img src={stars} alt="star"/><img src={stars} alt="star"/><img src={stars} alt="star"/><img src={stars} alt="star"/> <span className="opacity__feedback">({numOfReviews})</span>
        </div>
    </div>

    </div>

  );
};

export default ProductCard;
