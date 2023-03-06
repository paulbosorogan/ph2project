import React from "react";

function Plants({plants}){
   
    return(
        <div>
            {plants.map((plant)=> (
                <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt='Plant'/>
                    <h2>Name:{plant.name}</h2>
                    <p>Sunlight need:{plant.sunlight}</p>
                    <p>Water need:{plant.water}</p>
                </div>
            ))}
        </div>
    )
}
export default Plants