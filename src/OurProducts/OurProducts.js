import React from "react"
import "../Flash/FlashSales.css";
import OurProductsList from "./OurProductsList.js"




function OurProducts(){
return(
    <section className="flash__section border">
        <div className="flash__description">
            <span className="orange__color"></span> 
            <span className="orange__color__text">Our Products</span>
        </div>
        <div className ="left__align"><h1 className="clockHeading">Explore Our Products</h1>
    <div className="arrows__move">
    
    
    </div>
    
        </div>
        <OurProductsList></OurProductsList>
        <button className="all__products__btn ">View All Products </button>
    </section>

)

}




export default OurProducts;