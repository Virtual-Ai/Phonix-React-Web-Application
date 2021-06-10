import React, { Component } from 'react'
import Dragula from 'dragula'
import './SentenceBuilder.css'
import UIfx from "uifx";
import correctAudio from '../Quiz/assets/audio/correct.mp3'
import wrongAudio from '../Quiz/assets/audio/wrong.wav'

export default class Sentence extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: this.shuffle(props.question.split(' ')),
            rows: [],
        }
        this.dragula = new Dragula([])
        this.dragula.on('drop', this.handleDrop)
    }

    correctA = new UIfx(
        correctAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )

    wrongA = new UIfx(
        wrongAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )
    shuffle(array) {
        var currentIndex = array.length,
            randomIndex

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            // And swap it with the current element.
            ;[array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ]
        }

        return array
    }
    handleDrop = (el, target, source, sibling) => {
        var items = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'list'
        })[0]
        var rows = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'rows'
        })[0]
        items = [...items.childNodes].map((node) => node.dataset.field)
        rows = [...rows.childNodes].map((node) => node.dataset.field)
        this.dragula.cancel(true)
        this.setState({
            items: items,
            rows: rows,
        })
    }
    addDraggable = (el) => {
        this.dragula.containers.push(el)
    }

    render() {
        window.addEventListener('touchmove', function() {})

        if (
            JSON.stringify(this.state.rows) ===
            JSON.stringify(this.props.question.split(' '))
        ) {
            this.correctA.play();
            document.getElementById(this.props.id).style.backgroundColor =
                'yellowgreen'
            document.getElementById(this.props.id+"1").style.display="none"
        } else {
            if (this.state.rows.length === this.props.question.split(' ').length) {
                this.wrongA.play()
                document.getElementById(this.props.id).style.backgroundColor = 'red'
                document.getElementById(this.props.id+"1").style.display="none"

            } else if (this.state.rows.length !== 0) {
                document.getElementById(this.props.id).style.backgroundColor =
                    'transparent'
            }
        }
        console.log(
            JSON.stringify(this.state.rows) ===
            JSON.stringify(this.props.question.split(' ')),
        )
        return (
            <div className="inline-flex justify-around border-2 border-solid mb-4 pb-4 tablet:text-sm   ">
                <div className="ml-5 tablet:ml-0">
                    <div className="mt-5">
                        {' '}
                        <div
                            ref={this.addDraggable}
                            data-type="rows"
                            className="answer h-32 tablet:h-auto p-8 tablet:p-4"
                            id={this.props.id}
                        >
                            {this.state.rows.map((item) => {
                                return (
                                    <div className="p-4 tablet:p-px" data-field={item} key={item}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div
                            ref={this.addDraggable}
                            className="drag-elements inline-flex h-32 tablet:h-auto p-8 tablet:p-4"
                            data-type="list"
                            id={this.props.id + "1"}
                        >
                            {this.state.items.map((item) => {
                                return (
                                    <div
                                        className="ml-2  float-left p-4 tablet:p-px"
                                        data-field={item}
                                        key={item}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}