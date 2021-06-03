import React from 'react';
import { Link } from "react-router-dom";
import landingpage from './landing-page.png';
import heroBgNature from './hero-bg-nature.png';
import heroBg from './hero-bg.png';
import heroBgN from './hero-bg-n.png';
import {PhonixNavBar} from './PhonixNavBar';
import './PhonixLandingPage.css';
import * as Icons from '../../icons';



const CardLinks=()=>{
    return(
        <ul className="menu">
            <Link to="/app/play" className="card card-p">
              <div>
	           <h3 className="link-tab"><i className="fas fa-volleyball-ball"></i><br/>Play</h3>
               </div>
            </Link>
            <Link to="/app/chatbot" className="card card-p">
            <div>
	           <h3 className="link-tab"><i class="fas fa-comments"></i><br/>Chat</h3>
               </div>
            </Link>
            <Link to="/app/learn" className="card card-p">
            <div>
	           <h3 className="link-tab"><i class="fas fa-book-reader"></i><br/>Learn</h3>
               </div>
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

// const PhonixLandingPage = ()=>{
//     // const[showLinks,setShowLinks] = React.useState('false');
//     // React.useEffect(()=>{
//     //     const handleResize=()=>{
//     //         console.log('resize');
//     //     }
//     //     window.addEventListener('resize', handleResize);
//     // },[showLinks]
//     // )

//     // const ShowLinks =()=>{
//     //     if(window.innerWidth < 530){
//     //         return(<MainLinks/>)
//     //     }
//     //     return(<CardLinks/>)
//     // }
//     const [dimensions, setDimensions] = React.useState({ 
//         height: window.innerHeight,
//         width: window.innerWidth
//       })
//       React.useEffect(() => {
//         function handleResize() {
//           setDimensions({
//             height: window.innerHeight,
//             width: window.innerWidth
//           })
//     }
//         window.addEventListener('resize', handleResize)
//         return _ => {
//           window.removeEventListener('resize', handleResize)
//     }
//       })
//     return(
//         <div>
//             {console.log('hey')}
//             <PhonixNavBar/>
//         <section className="header-hero">
//             <div className="header-links">
               
//                 {window.innerWidth < 530 ? <MainLinks/> : <CardLinks/> }
//             </div>
//             <div className="header-brand-image animated">
//                     <img src={landingpage} className="animated" alt=""></img>

//             </div>
//         </section>
//         </div>
//     )
// }


const PhonixLandingPage = ()=>{
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
            
        <section className="header-hero" style={{background: `url(${heroBgN})`, backgroundSize: "cover", backgroundRepeat:"no-repeat"}}>
            <div className="">
               <PhonixNavBar/>
            </div>
            {/* <div className="row"> 
                <div className="header-links">
                    {window.innerWidth < 530 ? <MainLinks/> : <CardLinks/> }
                </div>
            </div> */}
            <div className="about-section">
                <div className="about-text">
                    <h5 className="about-subheading">Let's Play and Learn With</h5>
                    <h3 className="about-heading">PHONIX</h3>
                    <div>
                        <CardLinks/>
                    </div>
                </div>

            </div>
        </section>
        </div>
    )
}

export default PhonixLandingPage;