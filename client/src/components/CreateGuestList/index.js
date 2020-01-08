import React from "react";
import "./style.css";

function CreateGuestList() {
    return (

        <div class="container">
            <form>
                <h1>Create Your Guest List</h1>
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="name" class="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="name" class="form-control" id="lastName" placeholder="Last Name" />
                </div>
              
                    <div class="form-group">
                        <label for="rsvpStatus">RSVP Status</label>
                        <select class="form-control" id="rsvpStatus">
                            <option>Attending</option>
                            <option>Cannot Attend</option>
                            <option>Needs to RSVP</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="plusOne">Is he or she bringing a plus one?</label>
                        <select multiple class="form-control" id="plusOne">
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <button type="button" id="addBtn" class="btn btn-success">Add Guest</button>
            </form>
            </div>


                );
            }
            
            export default CreateGuestList;
            
              //first name , last name 
              //attending (dropdown, 3 options [cannot attend, attending, needs to RSVP])
              //plus one? boolean (yes/no)
