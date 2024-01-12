import React from "react";
import "./Footer.css"
import imglogo from "../../Img/Logo-Maynooth-Option1 1 (1).png"

function Footer() {
     return(
          <div className="Footer">
               <div className="footer_black">
                    <ul>
                         <li>Living Room</li>
                         <li>Bedroom</li>
                         <li>Kitchen & Diving</li>
                    </ul>     
                    <img src={imglogo} alt="" />
                    <ul>
                         <li>About</li>
                         <li>Blog</li>
                         <li>Support</li>
                    </ul>
               </div>               
               
          </div>
     )
}

export default Footer;