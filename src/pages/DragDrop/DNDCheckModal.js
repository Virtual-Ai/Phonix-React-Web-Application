import React from 'react'
import {Modal, ModalBody,} from '@windmill/react-ui'

const DNDCheckModal = (props) => {
    return (
        <div>
            <div>
                <Modal style={{backgroundColor: "#c8fcfd"}} isOpen={props.isOpen} onClose={props.onClose}>
                    <ModalBody>
                        <div className="flex">
                            <div style={{borderRadius: "2rem"}}>
                                {props.check === true ?
                                    <img onClick={() => {
                                        props.next()
                                        props.closeModal()
                                    }} style={{borderRadius: "2rem"}} src={require("./assets/next.png")} width="150px"
                                         alt=""/> :
                                    <img onClick={() => {
                                        props.next()
                                        props.closeModal()
                                    }} style={{borderRadius: "2rem"}}
                                         src={require("./assets/reload.png")}
                                         width="200px" alt=""/>}
                            </div>
                            <div style={{fontSize: "xx-large", margin: "auto", padding: "20px", textAlign: "center"}}>
                                {props.check === false ? <p className="font-lemon">That was wrong, Try again</p> :
                                    <p className="font-lemon">Yayy! Keep going</p>}
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default DNDCheckModal