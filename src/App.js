import React from 'react';
import Home from './Home';
import Plants from './Plants'
import NavBar from "./NavBar"
import { Route, Switch } from 'react-router-dom';
import NewPlant from './NewPlant';
import { plants } from './db.json'

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/plants">
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
