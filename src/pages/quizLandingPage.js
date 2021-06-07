import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/img/svg1.png'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
import './play-style.css';


import Image2 from '../assets/img/learn/girlr.png'
import Image3 from '../assets/img/learn/girl22.png'
import Image4 from '../assets/img/learn/boy11.png'
import Image5 from '../assets/img/learn/sir.png'

import ob2 from '../assets/img/play/ob2.png'
import arrow from '../icons/arrow3.png'




function Cards() {
  return (
    <>
      <PageTitle>Quiz</PageTitle>

  <SectionTitle>Which one ?</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-5">
      <Link to="/app/play/nouns">
	 			<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#b270c6" , position:"relative",borderRadius:'0.9rem'}}>
	        <CardBody>
	        	<img src={ob2} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",left:"0",bottom:"0",maxHeight:'8.5rem',marginLeft:'0.2rem', marginBottom:'0.2rem'}}/>
	          <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Nouns</h4>
	          <h4 className="text-4xl font-chewy text-white text-right">Quiz</h4>
            <h4 className="text-lg font-chewy text-white text-right mb-12" style={{color:'#f2c0b0'}}>10 Questions</h4>
            
            <div className="flex justify-end">
                <img src={arrow} alt="Image" style={{maxWidth:'1.8rem'}}/>
            </div>


	        </CardBody>
	      </Card>
			</Link>        

        <Link to="/app/play/nouns">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image2} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> NOUNS</h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Nouns!</h4>
	        </CardBody>
	      </Card>
        </Link>

    <Link to="/app/play/verbs">
	<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f4bb14" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image5} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> ADVERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Adverbs!</h4>
	        </CardBody>
	      </Card>
		</Link>

    <Link to="/app/play/verbs">
	<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> ADJECTIVES </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Adjectives!</h4>
	        </CardBody>
	      </Card>
		</Link>
            

	  <Link to="/app/play/nouns">
	  <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#89cff0" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image2} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> REPORTED SPEECH </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>   
        </Link>

        <Link to="/app/play/verbs">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#6771dd" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image4} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>

    <Link to="/app/play/verbs">
	<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f4bb14" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image5} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>
		<Link to="/app/play/nouns">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card> 
        </Link>

        <Link to="/app/play/verbs">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#89cff0" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image2} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>

    <Link to="/app/play/verbs">
	<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#6771dd" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image4} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>
		<Link to="/app/play/nouns">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f4bb14" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image5} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>   
        </Link>

        <Link to="/app/play/verbs">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>

    <Link to="/app/play/verbs">
	<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#6771dd" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image2} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
	        </CardBody>
	      </Card>
		</Link>


        <Link to="/app/play/verbs">
		<Card colored className="mb-8 shadow-md" style={{backgroundColor:"#6771dd" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image4} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> NOUNS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Nouns!</h4>
	        </CardBody>
	      </Card>
		</Link>


</div>
    </>
  )
}

export default Cards
