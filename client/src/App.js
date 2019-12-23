import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import guests from "./pages/guests";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import home from "./pages/home";
import registry from "./pages/registry";
import toDo from "./pages/toDo";
import SignUp from "./pages/signup";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/guests" component={guests} />
            <Route exact path="/registry" component={registry} />
            <Route exact path="/toDo" component={toDo} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>          

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
