import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/img/svg1.png'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'


function Cards() {
  return (
    <>
      <PageTitle>Play</PageTitle>

  <SectionTitle>What to play ?</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
      <Link to="/app/play/verbs">
	       <Card colored className="text-blue-50 bg-bcard" style={{backgroundImage:`url(${Image})`}}>
	          <CardBody>   
	            <p className="mb-4 font-semibold">VERBS</p>
	          </CardBody>
	        </Card>
		</Link>        

        <Link to="/app/play/nouns">
        	<Card colored className="text-blue-50 bg-ycard">
          		<CardBody>
	            	<p className="mb-4 font-semibold">
		            	Nouns
	    			</p>
        	  	</CardBody>
        	</Card>        
        </Link>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold">Adjectives</p>
            <p></p>
          </CardBody>
        </Card>
      </div>      

    </>
  )
}

export default Cards
