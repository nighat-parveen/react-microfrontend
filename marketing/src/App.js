
import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Landing from './components/Landing.js';
import Pricing from './components/Pricing.js';
import { StylesProvider } from '@material-ui/core';
function App() {
  return (
    <StylesProvider>
        <BrowserRouter>
            <Switch>
                <Route 
                    exact
                    path="/"
                    component={Landing}
                />
                <Route 
                    path="/pricing"
                    component={Pricing}
                />
            </Switch>
            
        </BrowserRouter>
    </StylesProvider>
  
  )
}

export default App;
