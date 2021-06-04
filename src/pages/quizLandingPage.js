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

function Cards() {
  return (
    <>
      <PageTitle>Play</PageTitle>

  <SectionTitle>What to play ?</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
      <Link to="/app/play/verbs">
	  <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#89cff0" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-2xl font-balsamiq text-white mt-8 font-bold"> VERBS </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Verbs!</h4>
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
