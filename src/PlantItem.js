import React  from "react";

function PlantItem({plant}){



    return(
        <div className="plant-card" key={plant.id}>
         <img src={plant.image} alt='Plant'/>
             <div className="plant-info">
                <h2>{plant.name}</h2>
                <p>Sunlight : {plant.sunlight}</p>
                <p>Water : {plant.water}</p>
                <label>
                Last watered on: 
                <select name="date">
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
                </select>
            </label>
                </div>                       
        </div> 
    )
}
export default PlantItem