import React from "react"
 import Product from "./BestSellProducts.js" 
import Star from "../assets/icons/star.png"

function List() {
    const products = [
      {
        image: 'Product photos/jacket.png',
        stars: {Star},
        name: 'The north coat',
        price: "$260",
        discountedPrice: "$360",
        numOfReviews: "65"
      },
      {
        image: 'Product photos/bag.png',
        stars: {Star},
        name: 'Gucci duffle bag',
        price: "$960",
        discountedPrice: "$1160",
        numOfReviews: "130"
      },
      {
        image: 'Product photos/cooler.png',
        stars: {Star},
        name: 'RGB liquid CPU Cooler',
        price: "$160",
        discountedPrice: "$170",
        numOfReviews: "98"
      },
      {
        image: 'Product photos/shelf.png',
        stars: {Star},
        name: 'Small BookSelf ',
        price: "$360",
        discountedPrice: "",
        numOfReviews: "33"
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
            discountedPrice={product.discountedPrice}
            numOfReviews={product.numOfReviews}
          />
        ))}
      </div>
    );
  }
  
export default List;