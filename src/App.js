import React from "react";
import './App.css';

import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import SingleView from "./page/SingleView";
import {AiringProvider} from "./context/AiringContext";
import {PopularProvider} from "./context/Popular";
import Browse from "./page/Browse";
import Header from "./components/header/Header";
import Random from "./page/random";

function App() {
 
  return (
    <AiringProvider>
      <PopularProvider>
      

    <div className="App">
          
          <Router>
            <Header/>
             <Switch>
               <Route path="/" exact >
                 <Home />
                </Route>
             
                <Route path="/browse">
                  <Browse/>
                </Route>

               <Route path="/random" exact >
                <Random />
                </Route>
             </Switch>
          </Router>

          </div>  

        </PopularProvider>
     </AiringProvider>    
  );
}

export default App;
