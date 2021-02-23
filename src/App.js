import React from "react";
import './App.css';

import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Results from "./page/Results";
import SingleView from "./page/SingleView";
import {AiringProvider} from "./context/AiringContext";
import {PopularProvider} from "./context/Popular";
import {HeaderProvider} from "./components/header/Header";

function App() {
 
  return (
    <AiringProvider>
      <PopularProvider>
      

    <div className="App">
          
          <Router>
            <HeaderProvider/>
             <Switch>
               <Route path="/" exact >
                 <Home />
                </Route>
               <Route path="/results" exact >
                <Results />
                </Route>
               <Route path="/single-view" exact >
                <SingleView />
                </Route>
             </Switch>
             {/* </HeaderProvider> */}
          </Router>

          </div>  
          {/* </HeaderProvider> */}
        </PopularProvider>
     </AiringProvider>    
  );
}

export default App;
