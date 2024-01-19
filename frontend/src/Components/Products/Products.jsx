import React from "react";
import "./Products.css"
import imgins1 from "../../Img/inspiration-1.png"
import imgins2 from "../../Img/inspiration-2.png"
import imgins3 from "../../Img/inspiration-3.png"
import imgins4 from "../../Img/inspiration-4.png"
import imginstr1 from "../../Img/new-in-store.png"
import imginstr2 from "../../Img/new-in-store (1).png"
import imginstr3 from "../../Img/new-in-store (2).png"
import imgbla from "../../Img/Rectangle 6.png"
import imgblas from "../../Img/Rectangle 7.png"

function Products() {
     return (
          <div className="Products">
               <h1 className="h1">Get Some Inspiration From Our Refreshing Ideas</h1>
               <div className="products_four">
                    <img src={imgins1} alt="" />
                    <img src={imgins2} alt="" /><br />
                    <img src={imgins3} alt="" />
                    <img src={imgins4} alt="" />
               </div>


               <div className="look">
                    <h1 className="h1_look" >Looking For What's New In Store ?</h1>
                    <div className="img_three">
                         <div className="img_look">
                              <img src={imginstr1} alt="" />
                              <img src={imginstr2} alt="" />
                              <img src={imginstr3} alt="" />
                         </div>
                    </div>
               </div>


               <div className="bla_sale">
                    <img src={imgbla} alt="" />
                    <div className="bla_h1">
                         <h1 className="h1_cle" >Clearence Sale</h1>
                         <h2 className="h2_dle" >Up 60% off</h2>
                    </div>
               </div>



          </div>
     )
}

export default Products