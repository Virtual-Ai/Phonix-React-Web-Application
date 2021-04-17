import React from 'react'
import { Link } from 'react-router-dom'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
// import InfoCard from '../components/Cards/InfoCard'
import { Card, CardBody } from '@windmill/react-ui'
// import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../icons'
// import RoundIcon from '../components/RoundIcon'
import { Button } from '@windmill/react-ui'
	
function Cards() {
  return (
    <>
      <PageTitle>Play</PageTitle>

  <SectionTitle>What to play ?</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card colored className="text-blue-50 bg-card-color-blue">
          <CardBody>
            <p className="mb-4 font-semibold">
            	Verbs
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-blue-50 bg-card-color-yellow">
          <CardBody>
            <p className="mb-4 font-semibold">
            	Nouns
            </p>
          </CardBody>
        </Card>        

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold">Adjectives</p>
            <p></p>
          </CardBody>
        </Card>
      </div>      

	<SectionTitle>image Cards</SectionTitle>
	<Card className="flex h-48 mb-8">
	  <img className="object-cover w-1/3" src="https://static.toiimg.com/photo/msid-52685364/52685364.jpg?133438" />
	  <CardBody>
	    <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
	    <p className="text-gray-600 dark:text-gray-400">
	      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
	      quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
	      dolorum.
	    </p>
	  </CardBody>
	</Card>      

    
	<div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button layout="outline" size="larger">
            Larger Button
          </Button>
        </div>

        <div>
          <Button layout="outline" size="large">
            Large Button
          </Button>
        </div>

        <div>
          <Button layout="outline">Regular</Button>
        </div>

        <div>
          <Button layout="outline" tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button layout="outline" disabled>
            Disabled
          </Button>
        </div>

        <div>
          <Button layout="outline" size="small">
            Small
          </Button>
        </div>
      </div>      
    </>
  )
}

export default Cards
