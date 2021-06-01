import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@windmill/react-ui'
import { ModalsIcon, EditIcon } from '../icons'
import { Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'

import Image2 from '../assets/img/learn/girlr.png'
import Image3 from '../assets/img/learn/girl22.png'
import Image4 from '../assets/img/learn/boy11.png'
import Image5 from '../assets/img/learn/sir.png'

import RevisionModal from '../components/RevisionModal'

import PageTitle from '../components/Typography/PageTitle'
import { Card, CardBody } from '@windmill/react-ui'

// <Card colored className="mb-8 shadow-md bg-bcard" style={{backgroundImage:`url(${Image2})` , 
// 	      												backgroundSize:"cover", backgroundRepeat:"no-repeat" }}>

// <img src={Image2} alt="Image" style={{position:"absolute" , height:"100%", top:"0" ,right:"0"}}/>

// <Button iconRight={ModalsIcon} tag={Link} to="/learn/basic-grammar" size="large" 
// 	         					style={{backgroundColor:'#FFF', color:'#f4bb14', padding:'0.8rem'}}> Start 

  let topics = [
	  {"topic": "Nouns", "content":"(Here goes the content)"},
	  {"topic": "Verbs", "content":"(Here goes the content)"},
	  {"topic": "Clause", "content":"(Here goes the content)"},
  ]

//   let id = 0;
// function getElement(id){
// 	return topics[id];
// }

function Learn() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let [id, changeId] = useState(0)
  //const [topics, getNextTopic] = useState(topics_list)
  //const [content, getNextContent] = useState("(To be added content)")

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
	changeId(0)
  }

  function getNext() {
	//getNext(true)
	//console.log("Clicked Next")
	changeId(id + 1)
}



  return (
    <>
      <PageTitle>Learn</PageTitle>

	  <RevisionModal id={id} topic={topics[id]["topic"]} content={topics[id]["content"]} isOpen={isModalOpen} onClose={closeModal} onNext={getNext}/>


      <div className="grid gap-6 mb-8 md:grid-cols-3">

	      <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f4bb14" , position:"relative"}} >
	        <CardBody>
	        	<img src={Image2} alt="Image" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-3xl font-balsamiq text-white mt-8 font-bold"> Basic Grammar </h4>
	         	<h4 className="text-xl font-balsamiq pb-4"> Let's Learn With</h4>	  

	         	<Button iconRight={ModalsIcon} onClick={openModal} size="large" className="bg-white text-blue-50" > 
	         			Start 
	         	</Button>

	        </CardBody>
	      </Card>


	      <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#89cff0" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image3} alt="Image" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-3xl font-balsamiq text-white mt-8 font-bold"> Basic Grammar </h4>
	          	<h4 className="text-xl font-balsamiq"> Let's Learn With</h4>
	        </CardBody>
	      </Card>


	      <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f09420" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image4} alt="Image" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-3xl  font-balsamiq text-white mt-8 font-bold"> Basic Grammar </h4>
	          	<h4 className="text-xl font-balsamiq"> Let's Learn With</h4>	         	
	        </CardBody>
	      </Card> 

	      <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#6771dd" , position:"relative"}}>
	        <CardBody>
	        	<img src={Image5} alt="Image" style={{position:"absolute",height:"100%",right:"0"}}/>
	          	<h4 className="text-3xl  font-balsamiq text-white  font-bold"> Basic Grammar </h4>
	          	<h4 className="text-xl font-balsamiq" style={{marginBottom: "7.25rem"}}> Let's Learn With</h4>	         	
	        </CardBody>
	      </Card>	    

	  </div>


    </>
  )
}

export default Learn

