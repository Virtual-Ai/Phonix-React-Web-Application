import React from 'react';
import {Link} from 'react-router-dom';
import './PhonixNavBar.css';

export const PhonixNavBar=()=>{
    
    return(
        <nav id="header" className="navbar">
            <div className="brand"><Link to="/">PHONIX</Link></div>
            <div className="navlinks" id="nav-content">
                <ul>
                    <li><Link to="/login"><button id="navAction" className="nav-item">Login</button></Link></li>
                    <li><Link to="/create-account"><button id="navAction" className="nav-item">Sign Up</button></Link></li>
                </ul>
            </div>
        
        </nav>
    )
}