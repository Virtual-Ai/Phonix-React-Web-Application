import React from 'react'
import { Link } from 'react-router-dom'


import SectionTitle from '../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'

import './Quiz-Landing.css';

import ob1_qz from '../assets/img/play/Quiz-obs/qz-ob2.png'




function Cards() {
  return (
    <>
    {/*<PageTitle>Quiz</PageTitle>*/}
		<SectionTitle className="font-chewy" >Which one ?</SectionTitle>

      <div className="grid gap-6 mb-3 md:grid-cols-4 custom-grid">
      <Link to="/app/play/nouns">
	 			<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#b270c6" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Nouns</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#dfc5e7'}}>10 Questions</h4>

	            {/*<div className="flex justify-end">
	                <img src={arrow} alt="Image" style={{maxWidth:'1.8rem'}}/>
	            </div>*/}
	        </CardBody>
	      </Card>
			</Link>        

      <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Verbs</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f7d3a6'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
      </Link>

    <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#fbb014" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Adverbs</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f9dea1'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>

    <Link to="/app/play/adjectives">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#db672e" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
							<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Adjectives</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#efc2ac'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>
           

    <Link to="/app/play/pronouns">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#7ed957" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Pronouns</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#cbeebc'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>


		    <Link to="/app/play/tenses">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#68d4f9" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Tenses</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#e0f5fc'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
			 	</Link>	 				


		<Link to="/app/play/tenses">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#93b52a" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Prepositions</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#e0f5fc'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
			 	</Link>	 				


	<Link to="/app/play/tenses">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#5e7dd6" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img alt="backdrop-icon" src={ob1_qz} className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Prepositions</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#e0f5fc'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
			 	</Link>	 					 	

		</div>

		
		 	

		

    </>
  )
}

export default Cards
