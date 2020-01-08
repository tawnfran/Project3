
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/jumbotron";
import ViewGuestList from "../components/ViewGuestList"
import CreateGuestList from "../components/CreateGuestList"
import "../App";


class Guests extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            fullname: "",
            guestname: "",
            id: null,
            display: {
                view: false,
                create: false
            }
        }

    }

    showGuestList() {
        console.log("changing state")
        this.setState({ display: { view: !this.state.display.view, create: false } })
    }

    createGuestList() {
        console.log("changing state!!")
        this.setState({ display: { view: false, create: !this.state.display.create } })
    }

   
    /*
    
    TODO: 
    have componentwillmount call an axios route to get a specific user
    the response from that call will contain all user information
    then store response data into states
    
    */

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleGuestAdd = event => {
        event.preventDefault();
        console.log("handleGuestAdd, guestname:");
        console.log(this.state.guestname);
        console.log("this.state.id is ");
        console.log(this.state.id);

        axios.post("/api/guestlist", {

            //front end needs to modify the below and the state in order to get (and therefore send below) firstName, lastName, RSVP, meal, and plusOne. Remove "guests", and "whoseList" stays the same.

            guests: this.state.guestname,
            whoseList: this.state.id
        }).then(response => {
            console.log("This is the response:");
            console.log(response);
        }).catch(error => {
            console.log("Sign up server error:");
            console.log(error);
        })


    }

    componentWillMount() {
        this.getUser();
    }



    getUser() {
        axios.get("/user/").then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            this.setState({
                username: response.data.username,
                fullname: response.data.fullname,
                id: response.data.id

            }, () => console.log(this.state));
        })
    }

    getGuestlist() {
        axios.get("/api/retrieveGuests").then(response => {
            console.log("getGuestlist() response is: ");
            console.log(response);
        })

    }




    render() {
        // if (this.state.redirectTo) {
        //     return (
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
        //     );
        // }
        return (

            

            <div className="container">

                <Jumbotron
                    showGuestList={() => this.showGuestList()}
                    createGuestList={() => this.createGuestList()}
                />

                {this.state.display.view && <ViewGuestList />}
                {this.state.display.create && <CreateGuestList />}

                {/* <h1 className="header">Your Guests</h1>
                <div className="row">
                    <div className="col-6">
                        <div>Guest Name:
                                <input
                                type="text"
                                placeholder="Guest's Name"
                                name="guestname"
                                value={this.state.guestname}
                                onChange={this.handleInputChange}
                            />
                        </div>



                        <button onClick={this.handleGuestAdd}>Add Guest</button>
                    </div>


                    <div className="col-6">
                        <h2>Attending</h2>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">guestname<button className="button muted-button">Edit</button></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Meal Chosen: </div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Plus One: </div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> lorem  </div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2>Cannot Attend</h2>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">guestname<button className="button muted-button">Edit</button></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"></div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> lorem  </div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2>Needs to RSVP</h2>
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">guestname<button className="button muted-button">Edit</button></a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">guestname<button className="button muted-button">Edit</button></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <div className="container">
                                    {/* <p>Full name: {this.props.location.state.fullname}</p> */}
                                    {/* {console.log("this.props is")}
                                    {console.log(this.props)} */}
                                    {/* <p>Username: {this.props.location.state.username}</p>  */}

                                    {/* <p>Username: {this.props.location.state.username}</p> */}
                                {/* </div>
                            </div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> lorem  </div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                        </div>
                    </div>
                </div>
 */} 

            </div>
        )
    }

}


export default Guests;
