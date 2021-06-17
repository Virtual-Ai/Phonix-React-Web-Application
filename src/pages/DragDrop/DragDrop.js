import React, {useState,useMemo} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import UIfx from "uifx";
import correctAudio from '../Quiz/assets/audio/correct.mp3'
import wrongAudio from '../Quiz/assets/audio/wrong.wav'
import {dataType} from './data'
import DNDModal from "./DNDModal";
import DNDCheckModal from "./DNDCheckModal";
import "./dnd-styles.css"


let q = 0
let id = ''
let replaceto
let replacefrom
let dragElement = document.createElement('span')
let data = dataType.preposition

const DragDrop = () => {

    const [isModalOpen, setIsModalOpen] = useState(true)
    const [isCheckModalOpen, setIsCheckModalOpen] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)


    const closeModal = () => {
        setIsModalOpen(false)
    }


    const closeCheckModal = () => {
        setIsCheckModalOpen(false)
    }

    useMemo(() => {
        console.log('This is useMemo')
        const type = window.location.href.split("?")[1]
        console.log(type)


        if (type === "preposition") {
            data = dataType.preposition
            q=0
        } else if (type === "noun") {
            data = dataType.noun
            q=0
        }

    }, []);


    const [Question, questionHandler] = useState(
        data[q].question.split('________'),
    )


    const correctA = new UIfx(
        correctAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )

    const wrongA = new UIfx(
        wrongAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )
    const [answer, answerHandler] = useState(data[0].correct)

    const CorrectAnswer = () => {
        correctA.play()
    }

    const WrongAnswer = () => {
        wrongA.play()
    }

    function allowDrop(ev) {
        ev.preventDefault()
    }

    function drag(ev) {
        ev.dataTransfer.setData('Text', ev.target.id)
    }

    function drop(ev) {
        ev.preventDefault()
        var data = ev.dataTransfer.getData('Text')

        id = ev.target.parentNode
        replaceto = document.getElementById(data)
        replacefrom = ev.target

        dragElement.id = data

        dragElement.innerHTML = ''

        var dragContent = document.createTextNode(replaceto.textContent)

        dragElement.appendChild(dragContent)
        ev.target.parentNode.replaceChild(dragElement, ev.target)

        // console.log(replacefrom, replaceto, data)
        console.log(dragContent, answer)
        if (dragElement.innerHTML === answer) {
            setIsCheckModalOpen(true)
            setIsCorrect(true)
            CorrectAnswer()
        } else {
            setIsCheckModalOpen(true)
            setIsCorrect(false)
            WrongAnswer()
        }

        document.getElementById(data).className = ''
        document.getElementById(data).style.marginLeft = '8px'
        document.getElementById(data).style.marginRight = '8px'
    }

    const nextQuestion = () => {
        console.log(q)
        if (q < data.length - 1) {
            if (dragElement.innerHTML === answer){
                q++
            }
            else {}
            if (id) {
                try {
                    id.replaceChild(replacefrom, dragElement)
                } catch (e) {
                }
            }
        } else {
            if (id) {
                try {
                    id.replaceChild(replacefrom, dragElement)
                } catch (e) {
                }
            }
        }

        questionHandler(data[q].question.split('________'))
        answerHandler(data[q].correct)
    }

    return (
        <div className="tablet:text-2xl font-chewy mt-8 child-dnd-main" style={{color:"#5ce1e6"}}>
            {isModalOpen === true ? <DNDModal isOpen={isModalOpen} onClose={closeModal}/> : <>
                <div
                    className="tablet:p-6 md:p-12 mt-6"
                    style={{borderRadius: '1.5rem', backgroundColor: "#9efafc"}}
                >
                    <div className="md:flex">
                        <DNDCheckModal closeModal={() => closeCheckModal()} next={() => nextQuestion()} check={isCorrect} isOpen={isCheckModalOpen} onClose={closeCheckModal}/>
                        <div
                            className="box1-mb p-5 md:text-3xl mb-2 text-center"
                            style={{
                                borderRadius: '1.5rem',
                                backgroundColor: "#c8fcfd",
                                /*fontSize: 'xx-large'*/
                            }}
                        >
                            <img
                                className="box1-mb-img"
                                src={data[q].svg}
                                alt=""
                                width="400"
                                style={{
                                    borderRadius: '1.5rem',
                                    margin: '0 auto',
                                    marginBottom: '20px',
                                }}
                            />
                            {Question[0]}
                            <div
                                id="div1"
                                className="inline-block border-solid border-black border-0 border-b-2 w-32"
                                style={{height: '52px'}}
                                onDrop={(event) => drop(event)}
                                onDragOver={(event) => allowDrop(event)}
                            />
                            {Question[1]}
                        </div>
                        {console.log(q)}
                        <div
                            id="re"
                            className="md:text-3xl opt-mb"
                            style={{
                                margin: 'auto',
                                backgroundColor: "#c8fcfd",
                                padding: "20px",
                                borderRadius: '1.5rem',

                                height: "max-content"

                                // fontSize: 'xx-large',
                            }}
                        >
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td>
                                        <div
                                            className="m-1 p-1 md:w-40 opt-in-mb"
                                            id={'drag' + "0"}
                                            draggable="true"
                                            onDragStart={(ev) => drag(ev)}
                                            style={{
                                                padding: '32px',
                                                margin: '15px',
                                                textAlign: 'center',
                                                borderRadius: '1.5rem',
                                                backgroundColor: "#9efafc"
                                                // width: '150px',
                                            }}
                                        >
                                            {data[q].options[0]}
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className="m-1 p-1 md:w-40 opt-in-mb"
                                            id={'drag' + "1"}
                                            draggable="true"
                                            onDragStart={(ev) => drag(ev)}
                                            style={{
                                                padding: '32px',
                                                margin: '15px',
                                                textAlign: 'center',
                                                borderRadius: '1.5rem',
                                                backgroundColor: "#9efafc"
                                                // width: '150px',
                                            }}
                                        >
                                            {data[q].options[1]}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div
                                            className="m-1 p-1 md:w-40 opt-in-mb"
                                            id={'drag' + "2"}
                                            draggable="true"
                                            onDragStart={(ev) => drag(ev)}
                                            style={{
                                                padding: '32px',
                                                margin: '15px',
                                                textAlign: 'center',
                                                borderRadius: '1.5rem',
                                                backgroundColor: "#9efafc"
                                                // width: '150px',
                                            }}
                                        >
                                            {data[q].options[2]}
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className="m-1 p-1 md:w-40 opt-in-mb"
                                            id={'drag' + "3"}
                                            draggable="true"
                                            onDragStart={(ev) => drag(ev)}
                                            style={{
                                                padding: '32px',
                                                margin: '15px',
                                                textAlign: 'center',
                                                borderRadius: '1.5rem',
                                                backgroundColor: "#9efafc"
                                                // width: '150px',
                                            }}
                                        >
                                            {data[q].options[3]}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*                <div style={{textAlign: 'right'}}>
                    <Button
                        className="text-2xl"
                        iconRight={NextIcon}
                        onClick={nextQuestion}
                    >
                        Next
                    </Button>
                </div>*/}
                </div>
            </>
            }
        </div>
    )
}

export default DragDrop