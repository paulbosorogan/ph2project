import React from "react";
import PlantItem from './PlantItem.js'

function Plants({plants}){
  
    return(
        <div className="top-card">
            <div className="plant-list">
                {plants.map((plant)=> (
                    <PlantItem plant={plant} key={plant.id}/>
                ))}
            </div>
        </div>
    )
}
export default Plants