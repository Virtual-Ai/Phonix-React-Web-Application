import React from 'react';
import { Link } from "react-router-dom";
import landingpage from './landing-page.png';
import {PhonixNavBar} from './PhonixNavBar';
import './PhonixLandingPage.css';



const CardLinks=()=>{
    return(
        <ul>
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
    )   
}

const MainLinks=()=>{
    return(
        <ul>
           <li className="main-links"><Link to="/login"><button id="navAction" className="nav-item">Login</button></Link></li>
            <li className="main-links"><Link to="/create-account"><button id="navAction" className="nav-item">Sign Up</button></Link></li>
        </ul>
    )
    
}

const PhonixLandingPage = ()=>{
    // const[showLinks,setShowLinks] = React.useState('false');
    // React.useEffect(()=>{
    //     const handleResize=()=>{
    //         console.log('resize');
    //     }
    //     window.addEventListener('resize', handleResize);
    // },[showLinks]
    // )

    // const ShowLinks =()=>{
    //     if(window.innerWidth < 530){
    //         return(<MainLinks/>)
    //     }
    //     return(<CardLinks/>)
    // }
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      React.useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
    }
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
    }
      })
    return(
        <div>
            {console.log('hey')}
            <PhonixNavBar/>
        <section className="header-hero">
            <div className="header-links">
               
                {window.innerWidth < 530 ? <MainLinks/> : <CardLinks/> }
            </div>
            <div className="header-brand-image animated">
                    <img src={landingpage} className="animated" alt=""></img>

            </div>
        </section>
        </div>
    )
}

export default PhonixLandingPage;