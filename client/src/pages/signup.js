
import React from "react";
import axios from "axios";

class signup extends React.Component {

    state = {
        username: "",
        password: "",
        fullname: "",
        email: ""
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
            fullname: this.state.fullname,
            email: this.state.password,
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log("This is response:");
                console.log(response);
                if (response.data) {
                    console.log("successful signup");
                    this.setState({
                        redirectTo: "/login"
                    })
                }
                else {
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
                    <div className="container">
                        <p>Full name: {this.state.fullname}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Username: {this.state.username}</p>
                        <p>Password: {this.state.password}</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div>Full name: <input
                                    type="text"
                                    placeholder="Full name"
                                    name="fullname"
                                    value={this.state.fullname}
                                    onChange={this.handleInputChange}
                                />
                                </div>
                                {/* <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                    /> */}
                                <div>
                                    Email Address:

                                <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
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
export default signup;