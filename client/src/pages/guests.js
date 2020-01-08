
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
            display: {
                view: false,
                create: false
            }
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
        this.setState({ display: { view: !this.state.display.view, create: false } })
    }

    createGuestList() {
        console.log("changing state!!")
        this.setState({ display: { view: false, create: !this.state.display.create } })
    }

    componentDidMount() {
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
        return (
            <div className="container">

                <Jumbotron
                    showGuestList={() => this.showGuestList()}
                    createGuestList={() => this.createGuestList()}
                />

                {this.state.display.view && <ViewGuestList />}
                {this.state.display.create && <CreateGuestList />}

            </div>
        )
    }

}


export default Guests
