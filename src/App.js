import React, { useState, useEffect} from 'react';
import Home from './Home';
import Plants from './Plants'
import NavBar from "./NavBar"
import { Route, Switch } from 'react-router-dom';
import NewPlant from './NewPlant';

function App() {
  const [plants, setPlants] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
      fetch('http://localhost:3000/plants')
      .then((r=> r.json()))
      .then((data)=> {
          setPlants(data)
          console.log(data)
          setIsLoaded(true)
      })
  },[])

  if(!isLoaded) return <h1>Plants Loading ...</h1>

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/plantcollection">
          <Plants plants={plants}/>
        </Route>
        <Route path="/newplant">
          <NewPlant/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
