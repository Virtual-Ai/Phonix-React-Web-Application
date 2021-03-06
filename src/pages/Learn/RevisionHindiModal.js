import React from 'react'
import "./RevisionHindiModal.css"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'



const RevisionHindiModal = (props) => {

    return (
        <div>
            <Modal style={{overflow: "auto" , height: "" }} isOpen={props.isOpen} onClose={props.onClose} >

                <ModalHeader className='text-2xl'> {props.title} </ModalHeader>

                <ModalBody>
                    <h4 className='text-2xl font-balsamiq'>{props.topic}  {`(` + String(props.id + 1) + `/` + String(props.no_of_cards) + ")\t"}</h4>
                    <p className='text-lg'>{props.content}</p>
                    <img alt="Hindi-Illustration" src={require(`./assets/${props.img}.png`)} />

                </ModalBody>

                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout='outline' onClick = {props.onPrevious}>
                            Previous
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button layout='outline' onClick = {props.onNext}>
                            Next
                        </Button>
                    </div>

                    <div className="grid gap-2 grid-cols-2">
                        <div className="block w-full sm:hidden">
                            <Button block layout='outline' size="large" onClick = {props.onPrevious}>
                                Previous
                            </Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button block layout='outline' size="large" onClick ={props.onNext}>
                                Next
                            </Button>
                        </div>
                    </div>

                </ModalFooter>

            </Modal>
        </div>
    )
}
export default RevisionHindiModal


