import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import guests from "./pages/guests";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import home from "./pages/home";
import registry from "./pages/registry";
import toDo from "./pages/toDo";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import axios from "axios";
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      signedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    console.log("this.state is");
    console.log(this.state);
    console.log("componentDidMount ran");
    this.getUser();
  }

  // componentWillMount(){
  //   console.log("componentWillMount ran");
  //   this.getUser();
  // }

  updateUser (userObject) {
    this.setState(userObject);
  }

  getUser() {
    console.log("getuser() ran");


    
    axios.get("/user").then(response => {

      console.log("response was");
      console.log(response);

      console.log("************");
      
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.username !== "Not signed in") {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          signedIn: true,
          username: response.data.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          signedIn: false,
          username: null
        })
      }
    })
  }

render() {
  return (
    <Router>
      <div>
      <Navbar updateUser={this.updateUser} signedIn={this.state.signedIn} />
        {/* greet user if logged in: */}
        {this.state.signedIn ? "Signed In" : "Not Signed in" }
        {console.log("this.state.loggedIn is " + this.state.signedIn)}
        {this.state.signedIn &&
          <p>Welcome, {this.state.username}!</p>
        }
        <Wrapper>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/guests" component={guests} />
            <Route exact path="/registry" component={registry} />
            <Route exact path="/toDo" component={toDo} />
            <Route exact path="/signup" component={SignUp} />
            {/* <Route exact path="/signin" component={SignIn} /> */}
            <Route
          path="/signin"
          render={() =>
            <SignIn
              updateUser={this.updateUser}
            />}
        />
          </Switch>          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;