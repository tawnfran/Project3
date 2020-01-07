import React from "react";
import "./style.css";

function CreateGuestList() {
    return (

        // <div class="container">
        //     <h1>Create Guest List</h1>
        //     <div className="row">
        //         <div className="col-10">

        //             <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
        //             <input className="form-control" type="text" placeholder="Default input" />
        //             <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
        //         </div>
        //     </div>
        // </div>

        <div class="container">
            <form>
                <h1>Create Your Guest List</h1>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            </div>
            

            );
        }
        
        export default CreateGuestList;
        
          //first name , last name 
          //attending (dropdown, 3 options [cannot attend, attending, needs to RSVP])
          //plus one? boolean (yes/no)
