import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import guests from "./pages/guests";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Jumbotron from "./components/jumbotron"
import home from "./pages/home";
import registry from "./pages/registry";
import toDo from "./pages/toDo";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import axios from "axios";
import './App.css';


class App extends Component {
  state = {
    signedIn: false,
    username: null,
    redirectTo: null
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     signedIn: false,
  //     username: null, 
  //     redirectTo: null
  //   }

  //   this.getUser = this.getUser.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  //   this.updateUser = this.updateUser.bind(this)
  // }

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

  updateUser = (userObject) => {
    this.setState(userObject);
  }

  getUser = () => {
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

  handleSignout = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.fullname}, you clicked the Sign Out button!`);
    axios.get("/signout").then(response => {

      console.log("response was");
      console.log(response);
      // this.props.updateUser({
      //   loggedIn: false,
      //   username: null
      // });

      this.setState({
        redirectTo: "/signin",
        signedIn: false
      })
      window.location.reload();
    })
  };

  render() {
    if (this.state.redirectTo) {
      //   if(!this.state.signedIn) {
      return (
        <Router>
          <Redirect
            path="/signin"
            component={SignIn}
          // render={() =>
          //   <SignIn
          //     updateUser={this.updateUser}
          //   />}
          // <Redirect to = {{ pathname: "/signin"}}
          />
        </Router>
      )

    }
    else {
      //   if (this.state.redirectTo) {
      //     return (
      //       <Router>
      //         <Redirect
      //             to={{
      //                 pathname: this.state.redirectTo,
      //                 state: 
      //                     {
      //                         username: this.state.username
      //                         // ,
      //                         // fullname: this.state.fullname
      //                     }
      //                 ,
      //             }}
      //         />
      //         </Router>
      //     );
      // }
      return (
        <Router>
          <div>
            <Navbar updateUser={this.updateUser} signedIn={this.state.signedIn} />
            {/* greet user if logged in: */}
            {this.state.signedIn ? "Signed In" : "Not Signed in"}
            {console.log("this.state.loggedIn is " + this.state.signedIn)}
            {this.state.signedIn &&
              <p>Welcome, {this.state.username}!</p>
            }
            {this.state.signedIn &&
              <p><button onClick={this.handleSignout}>Sign Out</button></p>
            }
            <Wrapper>
              <Switch>
                <Route exact path="/" render={() =>
                  <SignIn
                    updateUser={this.updateUser}
                  />}
                />
                <ProtectedRoute auth={this.state.signedIn} exact path="/guests" component={guests} />
                <Route exact path="/registry" component={registry} />
                <Route exact path="/toDo" component={toDo} />
                <Route exact path="/signup" component={SignUp} />
                {/* <Route exact path="/signin" component={SignIn} /> */}
                <Route
                  path="/signin"
                  // component={SignIn}
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
}

export default App;

function ProtectedRoute({ component: Component, auth, ...rest }) {
  console.log("PROTECTED ROUTE: ", auth)
  return <Route {...rest} render={()=> auth ? <Component /> : <Redirect to="/signin" />} />
}
