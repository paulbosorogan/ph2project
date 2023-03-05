import React from 'react';
import Home from './Home';
import Plants from './Plants'
import NavBar from "./NavBar"
import { Route, Switch } from 'react-router-dom';
import NewPlant from './NewPlant';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/plants">
          <Plants/>
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
