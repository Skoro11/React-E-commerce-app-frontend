import React from "react"
import "../Flash/FlashSales.css";
import BestSellingList from "./BestSellList.js"




function BestSelling(){
return(
    <section className="flash__section border">
        <div className="flash__description">
            <span className="orange__color"></span> 
            <span className="orange__color__text">This Month</span>
        </div>
        <div className ="left__align"><h1 className="clockHeading">Best Selling Products</h1>
    <div className="arrows__move">
    
    <button className="all__products__btn customized">View All </button>
    </div>
    
        </div>
        <BestSellingList></BestSellingList>

    </section>

)

}




export default BestSelling;