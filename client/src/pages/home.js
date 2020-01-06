
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../App";


class homePage extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      fullname: ""
    }

    this.getUser();
    
  }
  


  getUser() {
  axios.get("/user/").then(response => {
    console.log('Get user response: ')
    console.log(response.data)
  })
}




   
  //   axios.get("/api/signin", {
  //     username: this.state.username,
  //     password: this.state.password
  // })
  //     .then(response => {
  //       console.log(response);

  //   this.props.getUser();
  //     })


  //   this.setState({
  //     username: this.state.username,
  //     password: this.state.password
  //   })
  // }

  // // handle any changes to the input fields
  // handleInputChange = event => {
  //   // Pull the name and value properties off of the event.target (the element which triggered the event)
  //   const { name, value } = event.target;

  //   // Set the state for the appropriate input field
    // this.setState({
    //   [name]: value
    // });


  // };
  




  render() {

    return (
      <div>
        <form>
          <div className="container">
            <p>Full name: {this.state.fullname}</p>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>

          </div>
        </form>
      </div>
    );
  }
}


export default homePage;





// import React from "react";

// function home() {
//   return (
//     <div>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
//       consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
//       parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
//       sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
//       gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
//       turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
//       tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
//       quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
//       volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
//       mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
//       tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
//     </div>
//   );
// }

// export default home;
