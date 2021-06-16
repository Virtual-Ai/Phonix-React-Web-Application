import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@windmill/react-ui'
import { ModalsIcon, EditIcon } from '../icons'
import { Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import './learn-styles.css';
import HindiLearn from "./Learn/HindiLearn";

import Image2 from '../assets/img/learn/girlr.png'
import Image33 from '../assets/img/learn/man.png'
import Image4 from '../assets/img/learn/boy11.png'
import Image5 from '../assets/img/learn/sir.png'
import Image6 from '../assets/img/learn/man2.png'

import page from '../assets/img/learn/mb-cards/page.png'
import puzzle from '../assets/img/learn/mb-cards/puzzle.png'
import abacus from '../assets/img/learn/mb-cards/abacus.png'
import Switch from "react-switch";


import RevisionModal from '../components/RevisionModal'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Card, CardBody } from '@windmill/react-ui'

// <Card colored className="mb-8 shadow-md bg-bcard" style={{backgroundImage:`url(${Image2})` , 
// 	      												backgroundSize:"cover", backgroundRepeat:"no-repeat" }}>

// <img src={Image2} alt="Image" style={{position:"absolute" , height:"100%", top:"0" ,right:"0"}}/>

// <Button iconRight={ModalsIcon} tag={Link} to="/learn/basic-grammar" size="large" 
// 	         					style={{backgroundColor:'#FFF', color:'#f4bb14', padding:'0.8rem'}}> Start 

  let topics = [
	  { "topic": "Nouns",
	    "content":"A noun is a word that names a person, a place, a thing or an idea. A noun can tell who or what.",
	    "name": "nouns2" 

	  },
	  

	  {	"topic": "Verbs", 
	  	"content":"Verbs are words that show actions, motions, doing, or states of being. They can also demonstrate how someone feels.",
	  	"name": "verbs"},


	  { "topic": "Preposition", 
	    "content":"Prepositions are words that tell you where something is located or positioned compared to something else.It also tells you when something happened.",
	    "name": "Prepositions"},
  ]
  


  let topics1 = [
	{ "topic": "dvdsv",
	  "content":"A nbdfbdfbfdoun is a word that names a person, a place, a thing or an idea. A noun can tell who or what.",
	  "name": "nouns2" 

	},
	
	{	"topic": "Vfdnfgnfgerbs", 
		"content":"Verbs are words thagfgfnfgnt show actions, motions, doing, or states of being. They can also demonstrate how someone feels.",
		"name": "verbs"},


	{ "topic": "Preposigfmgfmtion", 
	  "content":"Prepositions arfm gfmfe words that tell you where something is located or positioned compared to something else.It also tells you when something happened.",
	  "name": "Prepositions"},

	{ "topic": "Preposigfmgfmtion", 
	  "content":"Prepositions arfm gfmfe words that tell you where something is located or positioned compared to something else.It also tells you when something happened.",
	  "name": "Prepositions"},
]

  

//   let id = 0;
// function getElement(id){
// 	return topics[id];
// }

function Learn() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  let [id, changeId] = useState(0)
  const [clickedButton, setClickedButton] = useState("0")
  const [handleChange, sethandleChange] = useState(true)

  const handleChangeL = () => {
  	sethandleChange(!handleChange)
  }

  //const [topics, getNextTopic] = useState(topics_list)
  //const [content, getNextContent] = useState("(To be added content)")

  function openModal(s) {
	  console.log("s", s);
	setClickedButton(s)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
	changeId(0)
  }

  function getNext() {
	//getNext(true)
	//console.log("Clicked Next")
	if(id + 1 >= data.length){

	}
	else{
		changeId(id + 1)
	}
}

	function getPrevious(){
		if(id - 1 < 0){

		}
		else{
			changeId(id - 1)
		}
	}

	let data = topics

	if (clickedButton === "0") {
		data = topics
	}
	else if (clickedButton === "1") {
		data = topics1
		console.log("data change")

	}



  return (
    <>
		<div className="flex">
			<div className="flex-grow">
				<SectionTitle>What to Learn ?</SectionTitle>
			</div>
			<div style={{padding: "30px"}} className="flex-grow">
				<div className="flex justify-end">
					<p style={{padding: "3px"}}>HI</p>
					<Switch
						checked={handleChange}
						onChange={handleChangeL}
						onColor="#86d3ff"
						onHandleColor="#2693e6"
						handleDiameter={30}
						uncheckedIcon={false}
						checkedIcon={false}
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						height={20}
						width={48}
						className="react-switch"
						id="material-switch"
					/>
					<p style={{padding: "3px"}}>EN</p>
				</div>
			</div>
		</div>

	  <RevisionModal id={id} no_of_cards={data.length} 
			  topic={data[id]["topic"]} 
			  content={data[id]["content"]} 
			  isOpen={isModalOpen} 
			  name={data[id]["name"]}
			  onClose={closeModal} onNext={getNext} onPrevious={getPrevious}
		/>


		{handleChange === true ? <div className="grid gap-6 mb-8 md:grid-cols-3">
				<Card colored className="mb-8 shadow-md" style={{backgroundColor: "#f4bb14", position: "relative"}}>
					<CardBody>
						<img src={Image2} alt="" className="cartoon-1"
							 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
						<img src={abacus} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
						<h4 className="text-4xl font-chewy text-white mt-4"> Basic Grammar </h4>
						<h4 className="text-xl font-balsamiq pb-3 font-bold"
							style={{color: "#5b4942", fontWeight: "700"}}>
							Parts of Speech
						</h4>
						<Button iconRight={ModalsIcon} onClick={() => openModal('0')} size="regular"
								className="but-card1 font-bold">
							Start
						</Button>
					</CardBody>
				</Card>
				<Card colored className="mb-8 shadow-md" style={{backgroundColor: "#df692f", position: "relative"}}>
					<CardBody>
						<img src={Image33} alt="" className="cartoon-1"
							 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
						<img src={puzzle} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
						<h4 className="text-4xl font-chewy text-white mt-4"> Basic Grammar </h4>
						<h4 className="text-xl font-balsamiq pb-3 font-bold"
							style={{color: "#5b4942", fontWeight: "700"}}>
							Rules for Tenses
						</h4>
						<Button iconRight={ModalsIcon} onClick={() => openModal('1')} size="regular"
								className="but-card2 font-bold">
							Start
						</Button>
					</CardBody>
				</Card>
				<Card colored className="mb-8 shadow-md" style={{backgroundColor: "#f09420", position: "relative"}}>
					<CardBody>
						<img src={Image4} alt="" className="cartoon-1"
							 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
						<img src={page} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
						<h4 className="text-4xl font-chewy text-white mt-4"> Basic Grammar </h4>
						<h4 className="text-xl font-balsamiq pb-3 font-bold"
							style={{color: "#5b4942", fontWeight: "700"}}>
							Sentence Formation
						</h4>
						<Button iconRight={ModalsIcon} onClick={openModal} size="regular"
								className="but-card3 font-bold">
							Start
						</Button>
					</CardBody>
				</Card>
				<Card colored className="mb-8 shadow-md" style={{backgroundColor: "#9fe0ca", position: "relative"}}>
					<CardBody>
						<img src={Image6} alt="" className="cartoon-1"
							 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
						<h4 className="text-4xl font-chewy text-white mt-4">Basic Grammar </h4>
						<h4 className="text-xl font-balsamiq pb-3 font-bold"
							style={{color: "#5b4942", fontWeight: "700"}}>
							Coming Soon...
						</h4>
						<Button iconRight={ModalsIcon} onClick={openModal} size="regular"
								className="but-card4 font-bold">
							Start
						</Button>
					</CardBody>
				</Card>
			</div> :
			<HindiLearn/>
		}


    </>
  )
}

export default Learn

