import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (

    <div className="jumbotron">
      <h1 className="display-4">Welcome to your Guestlist!</h1>
      <p className="lead">If you have already created a guestlist on Save The Date, click view to manage to view and edit your list.</p>
      <hr className="my-4" />
      <p>If you are new to our site, click create a guestlist to get started!</p>
      <p className="lead">
        <button className="btn btn-primary btn-lg" id="viewBtn" onClick={props.showGuestList}>View Guestlist</button>
        <span className="divider" />
        <button className="btn btn-primary btn-lg" id="createBtn" onClick={props.createGuestList}>Create New Guestlist</button>
      </p>
    </div>


  );
}

export default Jumbotron;
