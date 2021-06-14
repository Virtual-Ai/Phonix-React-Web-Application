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
                <Modal style={{backgroundColor: "#c8fcfd", fontFamily: "Lemon",}} isOpen={props.isOpen} onClose={props.onClose}>
                    <ModalHeader style={{color: "blue"}} className="text-2xl text-center">
                        {' '}
                        How to play ?{' '}
                    </ModalHeader>

                    <ModalBody>
                        <p style={{color: "salmon"}} className="text-center text-4xl">Drag the words in the empty box to create a meaningful sentence</p>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default SentenceModal