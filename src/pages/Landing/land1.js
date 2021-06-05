import React,{ lazy } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@windmill/react-ui';
import './land1.css';
import PageTitle from '../../components/Typography/PageTitle'
import FadeIn from 'react-fade-in';




const BackDrop = require('./Landing_Nature2.png');
const orig = require('./Cartoon1-HDR.png');
const cloud1 = require('./cloud1.png');
const cloud2 = require('./cloud2.png');
const cloud3 = require('./cloud3.png');
const cloud4 = require('./cloud4.png');
const cloud5 = require('./cloud5.png');


// const small = require('./Cartoon1-HD-300.png');
// const medium = require('./Cartoon1-HD-528.png');
// const large = require('./Cartoon1-HD-768.png');



const styles = {
	margin: '0',
    padding: '0',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${BackDrop})`,
  	backgroundSize: 'cover',
  	backgroundRepeat:"no-repeat"
}

{/*style={{fontSize:'8rem',color:"#fff"}}*/}

export default class landing extends React.Component {
  render() {
    return (
      <div style={styles}>
        <FadeIn>
          <img alt="" src={cloud1} className="clouds cl-1"  style={{position:'absolute',left:'1rem',top:'2rem'}}/>
          <img alt="" src={cloud4} className="clouds cl-2" style={{position:'absolute',right:'4rem',top:'2rem'}}/>
          <img alt="" src={cloud2} className="clouds cl-3" style={{position:'absolute',left:'25rem',top:'4rem'}}/>
          <img alt="" src={cloud3} className="clouds cl-4" style={{position:'absolute',left:'50rem',top:'9rem'}}/>
          <img alt="" src={cloud5} className="clouds cl-5" style={{position:'absolute',right:'30rem',top:'0.5rem'}}/>
          <img alt="" src={cloud1} className="clouds cl-6" style={{position:'absolute',right:'18rem',top:'10rem',maxWidth:'17rem'}}/>
        </FadeIn>



      		<div className="container mx-auto p4 flex flex-col md:flex-row justify-center" style={{alignItems:'center',minHeight:'100vh'}}>
              <FadeIn transitionDuration="500" delay="50">
          				<div className="flex-1 cont-main">
          					<h1 className ="font-chewy head text-8xl md:text-10xl" style={{color:"#fff",marginBottom:"-20px",textAlign:"center"}}>Phonix</h1>
                    <h3 className ="font-balsamiq head text-1xl md:text-2xl mb-5" style={{color:"#fff",textAlign:"center"}}>YOUR GRAMMAR COMPANION</h3>
                    <Link to="/app/play">
                      <button className="but-3d mr-3 font-balsamiq" >Play</button>
                    </Link>              
                    
                    <Link to="/app/learn">        
                      <button className="but-3d mr-3 font-balsamiq">Learn</button>
                    </Link>

                    <Link to="/app/chatbot">
                    <button className="but-3d font-balsamiq">Chat</button>
                    </Link>

          				</div>
              </FadeIn>

      				<div className="flex-1"></div>

    				  <FadeIn transitionDuration="1500" delay="100">
                  <div className="flex-1" class="cart">
          					{/*<img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`}/>*/}
          					<img alt="" src={orig}/>
          				</div>
              </FadeIn>
      		</div>
        
      </div>
    );
  }
}

