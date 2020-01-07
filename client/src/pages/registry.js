import React from "react";

class Registry extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Registry</h1>
        <div className="input-group mb-3" id="registryInput">
        <input type="text" className="form-control" placeholder="Add Gifts" aria-label="Add Gifts" aria-describedby="button-addon2"/>
        <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    </div>
    <div>
      <h2>Your Gifts</h2>
      <ul class="list-group">
    <li class="list-group-item active">Silverware Set</li>
    <li class="list-group-item">Grill</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    </div>
      
      </div>
    );
  }
}

  export default Registry;
  