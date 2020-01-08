import React from "react";
import "./style.css";

function ViewGuestList(props) {
    console.log("from inside ViewGuestList, this is props.guestlist");
    console.log(props.guestlist);

    const attendees = props.guestlist.filter(guest => guest.RSVP!=="No" && guest.RSVP!=="")
    console.log("attendees is");
    console.log(attendees);

    return (
        <div id="container">
        <h1 className="header">Your Guests</h1>
        <div className="row">
            <div className="col-6">
                <h2>Attending</h2>
                 {attendees.map(attending => (
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                        {attending.firstName}
                    </a>
                </div>    
                 ))}  
            </div>
            <div className="col-6">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Plus One? </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Attendance Status: </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <h2>Cannot Attend</h2>
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">guestname<button className="button muted-button">Edit</button></a>
                </div>
            </div>
            <div className="col-6">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"></div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"></div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"></div>
                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <h2>Needs to RSVP</h2>
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">guestname<button className="button muted-button">Edit</button></a>
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
                        </div>
                    </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"> lorem  </div>
                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default ViewGuestList;