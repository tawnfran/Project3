
import React from "react";

function home() {
  return (
    <div className= "container">
      <div class="card-body" id="signinCardbody">
        <form id="signup" name="signin" method="post" action="signin">
          <div class="form-group">
            <h1>Save The Date</h1>
            <h5>Log-In</h5>
            <label for="username">User Name</label>
                    <input name="username" type="text" />
                </div>

                <div class="form-group">
                    <label for="password">Password&nbsp;&nbsp;&nbsp;</label>
                    <input name="password" type="password" />

                </div>

                <span><input class="btn-warning" class="form-control" type="submit" value="Log-In" /></span>
                 <a class="btn btn-warning btn-sm" href="/signup">Sign Up</a>
        </form>
      </div>
    </div>
  );
}

export default home;
