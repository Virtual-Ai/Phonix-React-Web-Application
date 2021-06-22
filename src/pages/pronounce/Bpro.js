import React from 'react'
// import { Link } from 'react-router-dom'

import SectionTitle from '../../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'

// importing audios
import actorAudio from './assests/A/actor2.mp3';
import angryAudio from './assests/A/angry2.mp3';
import antAudio from './assests/A/ant2.mp3';
import appleAudio from './assests/A/apple2.mp3';

import apple_pro from '../../assets/img/play/pronounce/apple.png'
import ant_pro from '../../assets/img/play/pronounce/ant.png'
import actor_pro from '../../assets/img/play/pronounce/actor.png'
import angry_pro from '../../assets/img/play/pronounce/angry.png'
import { useEffect } from 'react';

function Cards() {
    //const [audio, setAudio] = useEffect(Audio(appleAudio));
    const handlePlay=(a)=>{
        const audio = new Audio(a);
        audio.play();
    }
  return (
    <>
    {/*<PageTitle>Quiz</PageTitle>*/}
		<SectionTitle className="font-chewy" ></SectionTitle>

      <div className="grid gap-6 mb-3 md:grid-cols-4 custom-grid">
     
	 			<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#b270c6" , position:"relative",borderRadius:'0.9rem', cursor: "pointer"}} onClick={()=>handlePlay(appleAudio)}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={apple_pro} className="qz-card" style={{position:"absolute",height:"100%",left:"px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'2.5rem'}}>Apple</h4>
		          <h4 className="text-4xl font-chewy text-white text-right mb-4"></h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-4" style={{color:'#dfc5e7'}}></h4>

	            {/*<div className="flex justify-end">
	                <img src={arrow} alt="Image" style={{maxWidth:'1.8rem'}}/>
	            </div>*/}
	        </CardBody>
	      </Card>
		     

      
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative",borderRadius:'0.9rem', cursor: "pointer"}} onClick={()=>handlePlay(actorAudio)}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={actor_pro} className="qz-card" style={{position:"absolute",height:"100%",left:"0px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'2.5rem'}}>Actor</h4>
		          <h4 className="text-4xl font-chewy text-white text-right"></h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f7d3a6'}}></h4>

	        </CardBody>
	     	</Card>
     

    
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#fbb014" , position:"relative",borderRadius:'0.9rem', cursor: "pointer"}} onClick={()=>handlePlay(angryAudio)}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={angry_pro} className="qz-card" style={{position:"absolute",height:"100%",left:"0px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'2.5rem'}}>Angry</h4>
		          <h4 className="text-4xl font-chewy text-white text-right"></h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f9dea1'}}></h4>

	        </CardBody>
	     	</Card>
		

    
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#db672e" , position:"relative",borderRadius:'0.9rem', cursor: "pointer"}} onClick={()=>handlePlay(antAudio)}>
	        <CardBody>
							<img alt="backdrop-icon" src={ant_pro} className="qz-card" style={{position:"absolute",height:"100%",left:"0px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'2.5rem'}}>Ant</h4>
		          <h4 className="text-4xl font-chewy text-white text-right"></h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#efc2ac'}}></h4>

	        </CardBody>
	     	</Card>
	
           


		</div>

		
		 	

		

    </>
  )
}

export default Cards