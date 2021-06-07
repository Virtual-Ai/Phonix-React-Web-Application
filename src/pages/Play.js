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
  <Link to = "/app/play/quiz">
  <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#89cff0" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" className="hideWhenSmall" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-3xl font-balsamiq text-white mt-8 font-bold"> QUIZ </h4>
	          	<h4 className="text-xl font-balsamiq"> Play with Words!</h4>
	        </CardBody>
	      </Card>

  </Link>
    </>
  )
}

export default Cards
