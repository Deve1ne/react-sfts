import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation, Footer, Home, Music, Tour, Contact} from "./components";


function App() {
    return (
        <div className="App">


            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={() => <Home/>}/>
                    <Route path="/music" exact component={() => <Music/>}/>
                    <Route path="/tour" exact component={() => <Tour/>}/>
                    <Route path="/contact" exact component={() => <Contact/>}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;