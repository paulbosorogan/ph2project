import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

function PlantItem({plant, plants}){
    const [date, setDate] = useState(new Date())
    const [isDate, setIsDate] = useState(true)
    

    function onChange(date){
     setDate(date)
     setIsDate((isDate)=> !isDate)
     updateCard(date)
    }

    function updateCard(id){
     fetch(`http://localhost:3001/plants/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: { 
            ...plants,
            lastWatered: date.toDateString()
        }

     })
     .then(r=>r.json())
     .then(updatedCard => console.log(updatedCard))
    }

    return(
        <div className="plant-card" key={plant.id}>
         <img src={plant.image} alt='Plant'/>
             <div className="plant-info">
                <h2>{plant.name}</h2>
                <p>Sunlight level: <b>{plant.sunlight}</b></p>
                <p>Water level: <b>{plant.water}</b></p>
                <Calendar onClick={updateCard} onChange={onChange} value={date}/>
                { isDate ? "" : <p>Last watered on: <b>{date.toDateString()}</b></p>}
    
            </div>                       
        </div>
    )
}
export default PlantItem