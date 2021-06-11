import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/img/svg1.png'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
import './Quiz-Landing.css';


import Image2 from '../assets/img/learn/girlr.png'
import Image3 from '../assets/img/learn/girl22.png'
import Image4 from '../assets/img/learn/boy11.png'
import Image5 from '../assets/img/learn/sir.png'

import ob1_qz from '../assets/img/play/Quiz-obs/qz-ob2.png'
import ob2_qz from '../assets/img/play/Quiz-obs/qz-ob3.png'
import arrow from '../icons/arrow3.png'



function Cards() {
  return (
    <>
    <PageTitle>Quiz</PageTitle>
		<SectionTitle className="font-chewy" >Which one ?</SectionTitle>

      <div className="grid gap-6 mb-3 md:grid-cols-5 custom-grid">
      <Link to="/app/play/nouns">
	 			<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#b270c6" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

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
		        	<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Verbs</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f7d3a6'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
      </Link>

    <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#fbb014" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Adverbs</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#f9dea1'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>

    <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#db672e" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
							<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>

		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Adjectives</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#efc2ac'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>
           

    <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#7ed957" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Pronouns</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#cbeebc'}}>10 Questions</h4>

	        </CardBody>
	     	</Card>
		</Link>
		</div>

		<div className="grid gap-6 mb-8 md:grid-cols-4">
		    <Link to="/app/play/verbs">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#68d4f9" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
		        	<img src={ob1_qz} alt="Image" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>


		          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Tenses</h4>
		          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
	            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#e0f5fc'}}>Practice</h4>

	        </CardBody>
	     	</Card>
			 	</Link>	 				 	

		</div>

    </>
  )
}

export default Cards
