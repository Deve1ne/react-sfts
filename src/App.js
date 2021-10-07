import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Music, Tour, Contact, Admin, Login } from "./components";
import clip from './img/intermediaire.mp4';


function App() {
  return (
      <div className="App">

          <video className='fullscreen-bg' autoPlay loop muted >
              <source src={clip} type='video/mp4' />
              <source src={clip} type="video/ogg" />
          </video>

        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/music" exact component={() => <Music />} />
            <Route path="/tour" exact component={() => <Tour />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/admin" exact component={() => <Admin />} />
            <Route path="/login" exact component={() => <Login />} />
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;