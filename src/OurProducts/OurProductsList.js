import React from "react"
 import Product from "./OurProductsProducts.js" 
import Star from "../assets/icons/star.png"

function List() {
    const products = [
      {
        image: 'Product photos/dogFood.png',
        stars: {Star},
        name: 'Breed Dry Dog Food',
        price: "$100",
        numOfReviews: "35"
      },
      {
        image: 'Product photos/Camera.png',
        stars: {Star},
        name: 'CANON EOS DSLR Camera',
        price: "$360",
        discountedPrice: "",
        numOfReviews: "95"
      },
      {
        image: 'Product photos/Laptop.png',
        stars: {Star},
        name: 'ASUS FHD Gaming Laptop',
        discountedPrice: "",
        price: "$700",
        numOfReviews: "325"
      },
      {
        image: 'Product photos/Curology.png',
        stars: {Star},
        name: 'Curology Product Set  ',
        price: "$500",
        discountedPrice: "",
        numOfReviews: "145"
      },
      {
        image: 'Product photos/Car.png',
        stars: {Star},
        name: 'Kids Electric Car',
        price: "$960",
        discountedPrice: "",
        numOfReviews: "67"
      },
      {
        image: 'Product photos/Cleats.png',
        stars: {Star},
        name: 'Jr. Zoom Soccer Cleats ',
        price: "$320",
        discountedPrice: "",
        numOfReviews: "32"
      },

      {
        image: 'Product photos/Gamepad.png',
        stars: {Star},
        name: 'GP11 Shooter USB Gamepad',
        price: "$210",
        discountedPrice: "",
        numOfReviews: "78"
      },

      {
        image: 'Product photos/Quilted.png',
        stars: {Star},
        name: 'Quilted Satin Jacket ',
        price: "$599",
        discountedPrice: "",
        numOfReviews: "91"
      }
/* 
      {
        image: '.png',
        stars: {Star},
        name: ' ',
        price: "$",
        discountedPrice: "",
        numOfReviews: ""
      }, */


    ];
  
    return (
        <div className="carousel">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            stars={Star}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
            numOfReviews={product.numOfReviews}
          />
        ))}
      </div>
    );
  }
  
export default List;