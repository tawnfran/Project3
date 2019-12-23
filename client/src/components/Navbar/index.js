import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Wedding Planner
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/guests"
              className={
                window.location.pathname === "/guests" || window.location.pathname === "/guests"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Guests 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/registry"
              className={window.location.pathname === "/registry" ? "nav-link active" : "nav-link"}
            >
              Registry
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/toDos"
              className={window.location.pathname === "/toDos" ? "nav-link active" : "nav-link"}
            >
              To Do's
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;