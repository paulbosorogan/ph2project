import React, { useState } from "react";
import Calendar from "react-calendar";
import './index.css'

function PlantItem({plant}){
    const [date, setDate] = useState(new Date())
    const [isDate, setIsDate] = useState(false)
    
    function onChange(date){
     setDate(date)
     setIsDate((isDate)=> !isDate)
    }
    function handleClick(){

     fetch(`http://localhost:3001/plants/${plant.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            lastWatered: date.toDateString()
        })
     })
     .then(r=>r.json())
     .then(updatedKey=> console.log(updatedKey))

     alert('Date has been successfully updated!')

    }
    
    return(
        <div className="plant-card" key={plant.name} >
         <img src={plant.image} alt='Plant'/>
             <div className="plant-info">
                <h2>{plant.name}</h2>
                <p>sunlight level: <b>{plant.sunlight}</b></p>
                <p>water level: <b>{plant.water}</b></p>
                <p>plant was last watered on: <b>{plant.lastWatered}</b></p>
                <Calendar onChange={onChange} value={date}/>
                { !isDate ? "" : <p>watered on: <b>{date.toDateString()}</b></p>}
                <br></br>
                <button className="date-bttn" onClick={handleClick}>Confirm date</button>
            </div>                       
        </div>
    )
}
export default PlantItem