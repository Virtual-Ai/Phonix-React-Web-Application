import React from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'


//import React from 'react'

const RevisionModal = (props) => {

    // const [isModalOpen, setIsModalOpen] = useState(false)

    // function openModal() {
    //     setIsModalOpen(true)
    // }

    // function closeModal() {
    //     setIsModalOpen(false)
    // }

    

    return (
        <div>
            <Modal isOpen={props.isOpen} onClose={props.onClose} >

                <ModalHeader className='text-2xl font-balsamiq'> Quick Revision </ModalHeader>

                <ModalBody>
                    <h4 className='text-xl font-balsamiq'>{props.topic}  {`(` + String(props.id + 1) + `/` + String(props.no_of_cards) + ")\t"}</h4> 
                    <p className='text-lg'>{props.content}</p>
                    <img alt="En-imgs" src={require(`../assets/img/modals/${props.name.toLowerCase()}.png`)} />

                </ModalBody>

                <ModalFooter>
                    {/*<div className="hidden sm:block">
                        <Button layout="outline" onClick={props.onClose}>
                            Cancel
                        </Button>
                    </div>*/}

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

                    {/*<div className="block w-full sm:hidden">
                        <Button block size="large" layout="outline" onClick={props.onClose}>
                            Cancel
                        </Button>
                    </div>*/}

                </ModalFooter>

            </Modal>     
        </div>
    )
}

// RevisionModal.defaultProps = {
//     topic: "Topic",
//     content: "Topic Content",
// }

export default RevisionModal


