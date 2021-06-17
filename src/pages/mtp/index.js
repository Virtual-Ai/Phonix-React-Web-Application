import React, {Component} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import initialData from "./data";
import Draggable from "./draggable";
import "./main.css";
import UIfx from "uifx";
import correctAudio from "../Quiz/assets/audio/correct.mp3";
import wrongAudio from "../Quiz/assets/audio/wrong.wav";

class MTP extends Component {
    state = initialData;

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

    onDragStart = (result) => {
        console.log(result.draggableId);
    };

    onDragEnd = (result) => {
        console.log(result);

        const draggableId = result.draggableId;

        if (result.destination) {
            const droppableId = result.destination.droppableId;

            if (
                droppableId === "0drops" ||
                droppableId === "1drops" ||
                droppableId === "2drops" ||
                droppableId === "3drops"
            ) {
                const x =
                    document.getElementById(draggableId).offsetLeft +
                    document.getElementById(draggableId).offsetWidth;
                const y =
                    document.getElementById(draggableId).offsetTop +
                    document.getElementById(draggableId).offsetHeight / 2;

                const x1 = document.getElementById(droppableId).offsetLeft;
                const y1 =
                    document.getElementById(droppableId).offsetTop +
                    document.getElementById(draggableId).offsetHeight / 2;
                if (document.getElementsByClassName(draggableId)[0]) {
                    document.getElementsByClassName(draggableId)[0].remove();
                }

                console.log(result.draggableId, result.destination.droppableId);

                if (result.draggableId[0] === result.destination.droppableId[0]) {
                    document.getElementsByClassName("line")[0].innerHTML += `
            <line x1="${x + 60}" y1="${y + 50}" x2="${x1}" y2="${
                        y1 + 50
                    }" class="${draggableId}" style="stroke:rgb(255,0,0);stroke-width:2" /> `;
                    this.correctA.play()
                } else {
                    this.wrongA.play()
                }
            }
        }
    };
    onBeforeDragStart = (result) => {
        console.log(result);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <svg className="line"></svg>
                    <DragDropContext
                        onDragStart={this.onDragStart}
                        onDragEnd={this.onDragEnd}
                        onBeforeDragStart={this.onBeforeDragStart}
                    >
                        <Draggable
                            key="col1"
                            id="col1"
                            columnTitle="State Name"
                            states={this.state.states}
                            capitals={this.state.capitals}
                        />
                    </DragDropContext>
                </div>
                <button onClick="">Next</button>
            </div>
        );
    }
}

export default MTP