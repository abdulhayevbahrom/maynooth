import React from "react";
import "./Banner.css"
import imgback from "../../Img/Background.png"
import imgprice from "../../Img/low-price.png"


function Banner() {
     return(
          <div className="Banner">
               <div className="value">
                    <h1>Your Best Value Products</h1>     
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  facere </p>
                    <button>Shop Now</button><br />
                    <img src={imgback} alt="" />
                    <img src={imgprice} alt="" className="imgPrice" />
               </div>               
          </div>
     )
}

export default Banner