import React from "react"
import "./FlashSales.css";
import Clock from "./Clock.js"
import RightArrow from "../assets/icons/arrowMove-icon.png";
import List from "./List.js"





function flashSales(){
return(
    <section className="flash__section border">
        <div className="flash__description">
            <span className="orange__color"></span> 
            <span className="orange__color__text">Today`s</span>
        </div>
        <div className ="left__align"><h1 className="clockHeading">Flash Sales</h1>
    <Clock></Clock>
    <div className="arrows__move">
    
        <img src={RightArrow} alt="Left arrow" className="arrow __left"></img>
        <img src={RightArrow} alt="Right arrow" className="arrow"></img>
        </div>
    
        </div>
        <List></List>
        <button className="all__products__btn">View All Products</button>
        
    </section>

)

}




export default flashSales;