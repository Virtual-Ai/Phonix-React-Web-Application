import React from 'react'

import {
    Modal,
    ModalHeader,
    ModalBody,
} from '@windmill/react-ui'

const SentenceModal = (props) => {
    return (
        <div>
            <div>
                <Modal style={{backgroundColor: "#fae5be"}} isOpen={props.isOpen} onClose={props.onClose}>
                    <ModalHeader style={{color: "#f5ba85"}} className="text-2xl font-balsamiq text-center">
                        {' '}
                        How to play ?{' '}
                    </ModalHeader>

                    <ModalBody>
                        <p style={{color: "#ff914d"}} className="text-center font-chewy text-4xl">Drag the words in the empty box to create a meaningful sentence</p>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default SentenceModal