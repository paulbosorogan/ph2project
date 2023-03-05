import './index.css';
import React from 'react';
import Home from './Home';
import Plants from './Plants'
import NavBar from "./NavBar"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/plants">
          <Plants/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
