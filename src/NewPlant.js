import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css';

//const succulent = "https://i.imgur.com/8epBS7F.jpg"

function NewPlant({onSubmit}){
    const [plantName, setPlantName] = useState('')
    const [plantSunLevel, setPlantSunLevel] = useState('')
    const [plantWaterLevel, setPlantWaterLevel] = useState('')
    const [plantUrl, setPlantUrl] = useState('')

    const history = useHistory()

    function handleSubmit(event){
        event.preventDefault()
        const newPlant = {
            name: plantName,
            sunlight: plantSunLevel,
            water: plantWaterLevel,
            image: plantUrl
        }
       

        fetch(`http://localhost:3001/plants`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        .then(r=>r.json())
        .then(data =>  onSubmit(data))

        history.push("/plantcollection")

    }
    return(
        <div className="top">
         <div className="form-box">
            <h3>Add a new plant to your collection!</h3>
          <form action="" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={plantName} onChange={e=> setPlantName(e.target.value)}/>
            <label>Sunlight needed:</label>
            <input type="text" name="sunlight" value={plantSunLevel} onChange={e=> setPlantSunLevel(e.target.value)}/>
            <label>Water needed:</label>
            <input type="text" name="water" value={plantWaterLevel} onChange={e=> setPlantWaterLevel(e.target.value)}/>
            <label>Image:</label>
            <input type="text" name="image" value={plantUrl} onChange={e=> setPlantUrl(e.target.value)}/>
            <input type="submit" value="Submit"/>
          </form>
         </div>
        </div>
    )
}
export default NewPlant