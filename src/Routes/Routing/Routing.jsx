import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Home/Home';

function Routing() {
  return (
    <Router>

      <Switch>

        <Route path='/'>
          <Home />
        </Route>
        
      </Switch>
      
    </Router>
  );
}

export default Routing;
