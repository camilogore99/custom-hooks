import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
   return (
      <Router>
         <div>

            <NavBar/>
            <div className="container">
               <Switch>
                  <Route path="/about" component={ AboutScreen } />
                  <Route path="/login" component={ LoginScreen } />

                  <Route path="/" component={ HomeScreen } />
                  
                  {/* Si no encuentra la ruta se puede manejar de estas dos formas  */}
                  {/* <Route component={ HomeScreen } /> */}
                  <Redirect to="/" component={ HomeScreen } />

               </Switch>
            </div>
         </div>
      </Router>
   )
}
