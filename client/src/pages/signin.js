
import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";


class signin extends React.Component {

    state = {
        username: "",
        password: "",
        signedIn: false
    };

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("sign-in-form, username:");
        console.log(this.state.username);
        console.log("sign-in-form, password:");
        console.log(this.state.password);

        axios.post("/api/signin", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log("Login response:");
                console.log(response);

                if(response.status === 200){

                    //update App.js state
                    this.props.updateUser({
                        signedIn: true,
                        username: response.data.username
                    })
                    //update the state to redirect to guests
                    this.setState({
                        redirectTo: "/guests"
                    })
                }

                // if (response.data) {
                //     console.log("successful signin");
                //     this.setState({
                //         redirectTo: "/login"
                //     })
                // }
                // else {
                //     console.log("Sign-in error")
                // }
            }).catch(error => {
                console.log("Sign in server error:");
                console.log(error);
            })
        // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        // this.setState({ username: "", password: "" });
    };


    render() {
        if (this.state.signedIn) {
            return (
              <Redirect
                to={{
                  pathname: "/guests",
                  state: { from: this.props.location }
                }}
              />
            );
          }
        return (
            <div>
                <form>
                    <div className="container">
                        
                        <p>Username: {this.state.username}</p>
                        <p>Password: {this.state.password}</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div>Username:
                                <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div>
                                    Password:

                                <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default signin;