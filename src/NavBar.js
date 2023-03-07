import React from "react";
import { NavLink } from "react-router-dom"
import './index.css'; 

function NavBar(){
    
return(
    <div className="navbar">
        <ul>
          <li><NavLink
                 to="/"
                  exact>
                  <button className="nav-bttn">Home</button>
             </NavLink></li>
        </ul>
        <ul>
        <li><NavLink
             to="/plantcollection"
             exact>
              <button className="nav-bttn">Plant collection</button>
        </NavLink></li>
        </ul>
        <ul>
        <li><NavLink
                to="/newplant"
                exact>
                <button className="nav-bttn">Add new plant</button>
        </NavLink></li>
        </ul>
    </div> 
    )
}
export default NavBar