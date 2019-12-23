
import React from "react";
import axios from "axios";

class signup extends React.Component {

    state = {
        username: "",
        password: ""
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
        console.log("sign-up-form, username:");
        console.log(this.state.username);
        console.log("sign-up-form, password:");
        console.log(this.state.password);

        axios.post("/user", {
            username: this.state.username,
            password: this.state.password
        })
        .then( response => {
            console.log(response);
            if (response.data) {
                console.log("successful signup");
                this.setState({
                    redirectTo: "/login"
                })
            }
            else{
                console.log("Sign-up error")
            }
        }).catch(error => {
            console.log("Sign up server error:");
            console.log(error);
        })
        // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        // this.setState({ username: "", password: "" });
      };


    render() {
        return (
            <div>
                <form>
                    <p>Username: {this.state.username}</p>
                    <p>Password: {this.state.password}</p>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default signup;