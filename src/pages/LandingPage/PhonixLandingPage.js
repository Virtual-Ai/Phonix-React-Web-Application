import React from 'react';
import { Link } from "react-router-dom";
import landingpage from './landing-page.png';
import {PhonixNavBar} from './PhonixNavBar';
import './PhonixLandingPage.css';


const PhonixLandingPage = ()=>{
    return(
        <div>
            <PhonixNavBar/>
        <section className="header-hero">
            <div className="header-links">
                <ul> 
                    {/* <li className="card"><h3>Play</h3></li>
                    <li className="card"><h3>Learn</h3></li>
                    <li className="card"><h3>Chat</h3></li> */}
                    <Link to="/app/play" className=" card card-g">
        	           <h3>Play</h3>
                    </Link>
                    <Link to="/app/chatbot" className="card card-p">
        	           <h3>Chat</h3>
                    </Link>
                    <Link to="/app/learn" className="card card-v">
                    <h3>Learn</h3>   
                    </Link>
                </ul>
            </div>
            <div className="header-brand-image animated">
                    <img src={landingpage} className="animated" alt=""></img>

            </div>
        </section>
        </div>
    )
}

export default PhonixLandingPage;