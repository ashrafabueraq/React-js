import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


    return (

        <nav class="navbar navbar-expand-lg navbar-light" style={{height:"100px", backgroundColor:"#009688"}}>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="navbar-brand">Home</Link>
                        
                    </li>
                    <li className="nav-item">
                     <Link to="/movielist" className="navbar-brand">MovieList</Link>
                       
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="navbar-brand">About</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="navbar-brand disabled" href="#">Disabled</a> */}
                    </li>
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;