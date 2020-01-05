
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../App";


class Guests extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     username: "",
        //     fullname: ""
        // }

        // this.getUser();

    }

/*

TODO: 
have componentwillmount call an axios route to get a specific user
the response from that call will contain all user information
then store response data into states

*/

componentWillMount() {
    this.getUser();
}



    getUser() {
        axios.get("/user/").then(response => {
            console.log('Get user response: ')
            console.log(response.data)
        })
    }



render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <div className="container">
                                {/* <p>Full name: {this.props.location.state.fullname}</p> */}
                                {console.log(this.props)}
                                {/* <p>Username: {this.props.location.state.username}</p> 
                                */}
                                <p>Username: {this.state.username}</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> lorem  </div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

}


export default Guests