import React, {Component} from 'react';
import "./TenseSort.css"
import Dragula from 'dragula'


const data = {
    Past : ["Played", "Taught", "Drove"],
    Present : ["Driving"],
    Future : [""]
}


class TenseSort extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [data.Present[0] || data.Future[0] || data.Past[0]],
            rows: ["Hello"]
        }
        console.log(data)
        console.log(this.state.items)

        this.dragula = new Dragula([])
        this.dragula.on('drop', this.handleDrop)
    }


    handleDrop = (el, target, source, sibling) => {
        let items = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'list'
        })[0];
        let rows = this.dragula.containers.filter((i) => {
            return i.dataset.type === 'rows'
        })[0];
        items = [...items.childNodes].map((node) => node.dataset.field)
        rows = [...rows.childNodes].map((node) => node.dataset.field)
        this.dragula.cancel(true)
        this.setState({
            items: items,
            rows: rows
        })
    }
    addDraggable = (el) => {
        this.dragula.containers.push(el)
    }

    render() {
        return (
            <div className="main">
                <div className="flex text-center max-w-max	p-3 text-2xl">
                    <div className="flex-grow">
                        <div className="inline-block bg-transparent ">
                            <div
                                ref={this.addDraggable}
                                data-type="list"
                                className="drag-elements"
                                id={"Q"}
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
                    <div className="flex-grow">
                        <div className="bg-transparent ">
                            {/*                            <div
                                ref={this.addDraggable}
                                data-type="rows"
                                className="inline-block drag-elements"
                                id={"Q"}
                            >
                                <div className="p-4 tablet:p-px" data-field={this.state.items} key={this.state.items}>
                                    {this.state.items}
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="flex text-center max-w-max	p-3 text-2xl">
                    <div className="flex-grow">
                        <div className="box bg-transparent m-12 px-6 py-3" style={{borderRadius: "15px"}}>
                            <div>
                                <p style={{color: "#37EB5C", fontSize: "xx-large", fontFamily: "lemon"}}>Past</p>
                                <div>
                                    <div
                                        ref={this.addDraggable}
                                        data-type="rows"
                                        className="answer h-32 tablet:h-auto p-8 tablet:p-4"
                                        id={"Q"}
                                    >
                                        {this.state.rows.map((item) => {
                                            return (
                                                <div
                                                    className="mb-2 p-4 tablet:p-px"
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
                    <div className="flex-grow">
                        <div className="box bg-transparent m-12 px-6 py-3" style={{borderRadius: "15px"}}>
                            <div>
                                <p style={{color: "#37EB5C", fontSize: "xx-large", fontFamily: "lemon"}}>Present</p>
                                <div>
                                    <div
                                        ref={this.addDraggable}
                                        data-type="rows"
                                        className="answer h-32 tablet:h-auto p-8 tablet:p-4"
                                        id={"Q"}
                                    >
                                        {this.state.rows.map((item) => {
                                            return (
                                                <div
                                                    className="mb-2 p-4 tablet:p-px"
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
                    <div className="flex-grow">
                        <div className="box bg-transparent m-12 px-6 py-3" style={{borderRadius: "15px"}}>
                            <div>
                                <p style={{color: "#37EB5C", fontSize: "xx-large", fontFamily: "lemon"}}>Future</p>
                                <div>
                                    <div
                                        ref={this.addDraggable}
                                        data-type="rows"
                                        className="answer h-32 tablet:h-auto p-8 tablet:p-4"
                                        id={"Q"}
                                    >
                                        {this.state.rows.map((item) => {
                                            return (
                                                <div
                                                    className="mb-2 p-4 tablet:p-px"
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
            </div>
        );
    }
}

export default TenseSort;