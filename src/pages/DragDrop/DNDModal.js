import React from 'react'

import {
    Modal,
    ModalHeader,
    ModalBody,
} from '@windmill/react-ui'

const DNDModal = (props) => {
    return (
        <div>
            <div>
                <Modal style={{backgroundColor: "#c8fcfd"}} isOpen={props.isOpen} onClose={props.onClose}>
                    <ModalHeader style={{color: "#92eff2"}} className="text-2xl font-balsamiq text-center">
                        {' '}
                        How to play ?{' '}
                    </ModalHeader>

                    <ModalBody>
                        <p style={{color: "#5ce1e6"}} className="text-center font-chewy text-4xl">Fill in the blanks by dragging a word to it.</p>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default DNDModal