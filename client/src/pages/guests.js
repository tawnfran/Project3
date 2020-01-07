
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
            id: null,
            show: false
        }

    }

    /*
    
    TODO: 
    have componentwillmount call an axios route to get a specific user
    the response from that call will contain all user information
    then store response data into states
    
    */

    showGuestList() {
        console.log("changing state")
        this.setState({ show: true })
    }

    createGuestList() {
        console.log("changing state!!")
        this.setState({ show: true })
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

    vie

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
        if (this.state.show) {
            return (
                <div className="container">

                    <Jumbotron />

                    <ViewGuestList />
                    <CreateGuestList />

                    {/* <viewBtn 
                    onClick={this.ViewGuestList}
                    >
                        
                    </viewBtn> */}

                </div>
            )
        } else {
            return (
                <div className="container">
    
                    <Jumbotron
                        showGuestList={() => this.showGuestList()}
                        createGuestList={() => this.createGuestList()}
                    >
                        </Jumbotron>
                    {/* <viewBtn 
                        onClick={this.ViewGuestList}
                        >
                            
                        </viewBtn> */}

    
                </div>
            )
        }
    }

}


export default Guests
