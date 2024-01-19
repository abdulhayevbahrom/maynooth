import React from "react";
import "./Header.css"
import img from "../../Img/Logo-Maynooth-Option1 1.png"
import { IoCart } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Header() {
     return(
          <div className="Header">
               <div className="nav">
                    <ul>
                    <img src={img} alt="" />
                    </ul>
               <ul className="ul2" >
                    <li>LIVING ROOM</li>
                    <li>BEDROOM</li>
                    <li>KITCHEN & DINNING</li>
                    <li>CONTACT</li>
               </ul>
               <ul className="ul3">
                    < IoCart className="icon" />
                    <MdAccountCircle className="icon2"  />
                    <FaSearch className="icon3" />
               </ul>
               </div>
          </div>
     )
}

export default Header