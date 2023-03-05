import React from "react";
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div>
        <NavLink>
            Home
        </NavLink>
        <NavLink>
            Plants
        </NavLink>
        </div> 
    )
}
export default NavBar