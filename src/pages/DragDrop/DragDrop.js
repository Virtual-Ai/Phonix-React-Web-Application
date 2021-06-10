import React, {useState} from 'react'
import {Button} from '@windmill/react-ui'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {NextIcon} from '../../icons'
import UIfx from "uifx";
import correctAudio from '../Quiz/assets/audio/correct.mp3'
import wrongAudio from '../Quiz/assets/audio/wrong.wav'
import {dataType} from './data'


let q = 0
let id = ''
let replaceto
let replacefrom
let dragElement = document.createElement('span')
const DragDrop = () => {

    const type = window.location.href.split("?")[1]
    console.log(type)
    let data = dataType.preposition
    let name = "Prepositions"
    if (type === "preposition") {
        data = dataType.preposition
        name = "Prepositions"
    } else if (type === "noun") {
        data = dataType.noun
        name = "Nouns"
    }

    const [Question, questionHandler] = useState(
        data[0].question.split('________'),
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
        toast.success('✅ 🥳 Yayy! Great Going! Keep doing well! ', {
            position: toast.POSITION.TOP_CENTER,
        })
        correctA.play()
    }

    const WrongAnswer = () => {
        toast.error('✗ Wrong answer!', {
            position: toast.POSITION.TOP_CENTER,
        })
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
            CorrectAnswer()
        } else {
            WrongAnswer()
        }

        document.getElementById(data).className = ''
        document.getElementById(data).style.marginLeft = '8px'
        document.getElementById(data).style.marginRight = '8px'
    }

    const nextQuestion = () => {
        console.log(q)
        if (q < data.length - 1) {
            q++
            if (id) {
                id.replaceChild(replacefrom, dragElement)
            }
        } else {
        }

        questionHandler(data[q].question.split('________'))
        answerHandler(data[q].correct)
    }

    return (
        <div className="font-kids mt-8">
            <div
                className="bg-orange-200 p-12 pb-2"
                style={{borderRadius: '1.5rem'}}
            >
                <div
                    className="md:text-5xl"
                    style={{
                        border: '1px dashed',
                        textAlign: 'center',
                        marginBottom: '25px',
                        borderRadius: '1.5rem',
                        // fontSize: 'xxx-large',
                    }}
                >
                    {name}
                </div>
                <div className="md:flex">
                    <div
                        className="bg-blue-400  p-5 md:text-3xl mb-2 text-center"
                        style={{borderRadius: '1.5rem' /*fontSize: 'xx-large'*/}}
                    >
                        <img
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
                            className="inline-block border-solid border-0 border-b-2 ml-2 mr-2 min-w-20"
                            style={{height: '33px'}}
                            onDrop={(event) => drop(event)}
                            onDragOver={(event) => allowDrop(event)}
                        />
                        {Question[1]}
                    </div>
                    {console.log(q)}
                    <div
                        id="re"
                        className="grid md:text-3xl"
                        style={{
                            margin: '0 auto',

                            // fontSize: 'xx-large',
                        }}
                    >
                        {data[q].options.map((option, index) => {
                            return (
                                <span
                                    className="bg-orange-400 m-1 p-1 md:w-40"
                                    id={'drag' + index}
                                    draggable="true"
                                    onDragStart={(ev) => drag(ev)}
                                    key={option}
                                    style={{
                                        padding: '10px',
                                        height: 'max-content',
                                        textAlign: 'center',
                                        borderRadius: '1.5rem',
                                        // width: '150px',
                                    }}
                                >
                  {option}
                </span>
                            )
                        })}
                    </div>
                </div>
                <div style={{textAlign: 'right'}}>
                    <Button
                        className="text-2xl"
                        iconRight={NextIcon}
                        onClick={nextQuestion}
                    >
                        Next
                    </Button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default DragDrop