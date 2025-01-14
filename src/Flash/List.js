import React from "react"
import Product from "./Products.js"
import Star from "../assets/icons/star.png"

function List() {
    const products = [
      {
        image: 'Product photos/joystickFlash.png',
        stars: {Star},
        name: 'HAVIT HV-G92 Gamepadv',
        price: "$120",
        discount: "-40%",
        discountedPrice: "$160",
        numOfReviews: "88"
      },
      {
        image: 'Product photos/keyboard.png',
        stars: {Star},
        name: 'AK-900 Wired Keyboard',
        price: "$960",
        discount: "-35%",
        discountedPrice: "$1160",
        numOfReviews: "75"
      },
      {
        image: 'Product photos/monitor.png',
        stars: {Star},
        name: 'IPS LCD Gaming Monitor',
        price: "$370",
        discount: "-30%",
        discountedPrice: "$400",
        numOfReviews: "99"
      },
      {
        image: 'Product photos/chair.png',
        stars: {Star},
        name: 'S-Series Comfort Chair ',
        price: "$375",
        discount: "-25%",
        discountedPrice: "$400",
        numOfReviews: "105"
      },
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
            discount={product.discount}
            discountedPrice={product.discountedPrice}
            numOfReviews={product.numOfReviews}
          />
        ))}
      </div>
    );
  }
  
export default List;