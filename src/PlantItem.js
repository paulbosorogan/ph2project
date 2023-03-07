import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

function PlantItem({plant}){
    const [date, setDate] = useState(new Date())
    const [isDate, setIsDate] = useState(true)

    
    function onChange(date){
     setDate(date)
     setIsDate((isDate)=> !isDate)
    }

    return(
        <div className="plant-card" key={plant.id}>
         <img src={plant.image} alt='Plant'/>
             <div className="plant-info">
                <h2>{plant.name}</h2>
                <p>Sunlight : {plant.sunlight}</p>
                <p>Water : {plant.water}</p>
                <Calendar  onChange={onChange} value={date}/>
                { isDate ? "" : <p>Last watered on: <b>{date.toDateString()}</b></p>}
                
            </div>                       
        </div> 
    )
}
export default PlantItem