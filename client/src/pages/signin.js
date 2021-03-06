
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../App";


class signin extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            signedIn: false,
            redirectTo: null
        };
    }

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

                if (response.status === 200) {

                    //update App.js state
                    this.props.updateUser({
                        signedIn: true,
                        username: response.data.username,
                        fullname: response.data.fullname
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
        if (this.state.redirectTo) {
            return (
                <Redirect
                    to={{
                        pathname: this.state.redirectTo,
                        state:
                        {
                            username: this.state.username
                            // ,
                            // fullname: this.state.fullname
                        }
                        ,
                    }}
                />
            );
        }
        return (
            <div>
                <div className="card" id="signInForm">
                    <div className="card-header">
                        Sign In
                    </div>
                    <div className="card-body">
                        <form>
                    <div className="container">

                        {/* <p>Username: {this.state.username}</p>
                        <p>Password: {this.state.password}</p> */}
                        <div className="row">
                            <div className="col-md-4">
                                <div class="input-group">Username:
                                <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div class="input-group">
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
                    </div>
                    <button className="btn btn-lg btn-primary" onClick={this.handleFormSubmit}>Enter</button>
                </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default signin;