import React, {Component} from 'react';
import "./TenseSort.css"
import Dragula from 'dragula'
import Timer from "react-compound-timer";
import { Button } from '@windmill/react-ui'
import UIfx from "uifx";
import correctAudio from "../Quiz/assets/audio/correct.mp3";
import wrongAudio from "../Quiz/assets/audio/wrong.wav";

const data = {
    Past : ["Played", "Taught", "Drove"],
    Present : ["Eat", "Make" , "Sleep"],
}


class TenseSort extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeState : true,
            items: this.shuffle(data.Present.concat(data.Past)),
            rows: [],
            present:[],
        }
        console.log(data)
        console.log(this.state.items)

        this.dragula = new Dragula([])
        this.dragula.on('drop', this.handleDrop)
    }

    correctA = new UIfx(correctAudio, {
        volume: 0.4, // number between 0.0 ~ 1.0
        throttleMs: 100,
    })

    wrongA = new UIfx(wrongAudio, {
        volume: 0.4, // number between 0.0 ~ 1.0
        throttleMs: 100,
    })

    shuffle(array) {
        let currentIndex = array.length,
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
        let items = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'list'
        })[0];
        let rows = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'rows'
        })[0];
        let present = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'present'
        })[0];

        items = [...items.childNodes].map((node) => node.dataset.field)
        rows = [...rows.childNodes].map((node) => node.dataset.field)
        present = [...present.childNodes].map((node) => node.dataset.field)
        this.dragula.cancel(true)
        this.setState({
            items: items,
            rows: rows,
            present: present,
        })
    }
    addDraggable = (el) => {
        this.dragula.containers.push(el)
    }

    check = () => {
        let k = 0
        let m = 0
        data.Past.forEach((ele) => {
            if(this.state.rows.includes(ele)){
                k++
            }
        })
        data.Present.forEach((ele) => {
            if(this.state.present.includes(ele)){
                m++
            }
        })
        return k + m === 6;
    }

    render() {

        const Result = () => {
            if (this.check()){
                // this.correctA.play()
                return <div className="flex">
                    <img width="50px" src={require("./assets/check.png")}/>
                    <p style={{padding: "7px"}}>Correct</p>
                </div>
            }
            else{
                // this.wrongA.play()
                return <div className="flex">
                    <img width="50px" src={require("./assets/false.svg")}/>
                    <p style={{padding: "7px"}}>Wrong</p>
                </div>
            }
        }

        console.log(this.state.timeState)
        if(this.state.timeState === false || this.check()){
            document.getElementById("outer-drag").style.display = "none"
            document.getElementsByClassName("result")[0].style.display = "unset"
        }
        if(this.check() === false && this.state.rows.length + this.state.present.length === 6){
            document.getElementById("outer-drag").style.display = "none"
            document.getElementsByClassName("result")[0].style.display = "unset"
        }


        return (
            <div className="main">
                <div className="flex text-center p-3 text-2xl tablet:text-xl">
                    <div style={{flexBasis : "100%"}} className="flex-grow">
                        <div className="box bg-transparent tablet:m-1 m-12 px-6 py-3" style={{borderRadius: "15px"}}>
                            <div>
                                <p className="text-3xl tablet:text-xl font-bold" style={{color: "#37EB5C",fontFamily: "Balsamiq Sans"}}>Past</p>
                                <div>
                                    <div
                                        ref={this.addDraggable}
                                        data-type="rows"
                                        className="tense h-32 tablet:h-auto p-8 tablet:p-4"
                                        id={"Q"}
                                    >
                                        {this.state.rows.map((item) => {
                                            return (
                                                <div
                                                    className="fade-out mb-2 p-4"
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
                    </div>
                    <div style={{flexBasis : "100%"}} className="flex-grow">
                        <div className="box bg-transparent tablet:m-1 m-12 px-6 py-3" style={{borderRadius: "15px"}}>
                            <div>
                                <p className="text-3xl tablet:text-xl font-bold" style={{color: "#37EB5C",fontFamily: "Balsamiq Sans"}}>Present</p>
                                <div>
                                    <div
                                        ref={this.addDraggable}
                                        data-type="present"
                                        className="tense h-32 tablet:h-auto p-8 tablet:p-4"
                                        id={"Q"}
                                    >
                                        {this.state.present.map((item) => {
                                            return (
                                                <div
                                                    className="fade-out mb-2 p-4"
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
                    </div>
                </div>

                <div style={{justifyContent: "center" , backgroundColor: "rgb(201, 226, 101)", flexDirection: "column" , alignItems: "center"}} className="flex">
                    <img className="clockimg" style={{display:""}} width = "100px" src={require("./assets/Clock.png")}/>
                    <Timer
                        initialTime={40000}
                        direction="backward"
                        checkpoints={[
                            {
                                time: 0,
                                callback: () => this.setState({timeState: false}),
                            },
                        ]}
                    >
                        {({  stop , start }) => (
                            <React.Fragment>
                                <div className="text-3xl font-balsamiq" style={{color:"#7ed957"}}>
                                    <Timer.Minutes />:
                                    <Timer.Seconds />sec
                                </div>
                                <div className="flex">
                                    <Button className="mx-6 but1" onClick={stop}>Stop</Button>
                                    <Button className="mx-6 but1" onClick={start}>Resume</Button>
                                </div>

                            </React.Fragment>
                        )}
                    </Timer>
                </div>

                <div id="outer-drag" className="flex text-center max-w-max  p-3 text-2xl tablet:text-xl">
                    <div className="flex-grow">
                        <div className="inline-block bg-transparent ">
                            <div
                                ref={this.addDraggable}
                                data-type="list"
                                className="flex sort-options"
                                id={"Q"}
                            >
                                {this.state.items.map((item) => {
                                    return (
                                        <div
                                            className="flex-grow ml-2 p-4 tablet:p-4"
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
                <div style={{display: "none"}} className="result flex text-center max-w-max  p-3 text-2xl tablet:text-xl">
                    <div className="flex-grow">
                        <div
                            className="flex ans"
                            id={"Q"}
                        >
                            <Result />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TenseSort;