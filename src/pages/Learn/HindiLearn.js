import React, {Component} from 'react';
import {cat1 , cat2 , cat3 , cat4 , cat5} from "./HindiData"
import RevisionHindiModal from "./RevisionHindiModal";
import {Button, Card, CardBody} from "@windmill/react-ui";
import Image2 from "../../assets/img/learn/girlr.png";
import abacus from "../../assets/img/learn/mb-cards/abacus.png";
import {ModalsIcon} from "../../icons";
import Image33 from "../../assets/img/learn/man.png";
import puzzle from "../../assets/img/learn/mb-cards/puzzle.png";
import Image4 from "../../assets/img/learn/boy11.png";
import page from "../../assets/img/learn/mb-cards/page.png";
import Image6 from "../../assets/img/learn/man2.png";

class HindiLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
                id : 0,
            clickedButton : "1"
        }
    }

    title = null
    content = null
    data = cat1

    openModal = (button) => {
        this.setState({isModalOpen : true , clickedButton : button})
    }

    closeModal = () => {
        this.setState({isModalOpen : false , id : 0})
    }

    getNext = () => {
        console.log(this.state)
        if (this.state.id + 1 >= this.data.length) {

        } else {
            this.setState({id : this.state.id + 1})
        }
    }

    getPrevious = () => {
        if (this.state.id - 1 < 0) {

        } else {
            this.setState({id : this.state.id - 1})
        }
    }


    DangerousDiv = (content) => {
        return <span dangerouslySetInnerHTML={{__html: content}}/>
    }



    render() {
        if (this.state.clickedButton === "1") {
            this.data = cat1
        } else if (this.state.clickedButton === "2") {
            this.data = cat2
        } else if (this.state.clickedButton === "3") {
            this.data = cat3
        } else if (this.state.clickedButton === "4") {
            this.data = cat4
        } else if (this.state.clickedButton === "5") {
            this.data = cat5
        }
        return (
            <div>
                {/*<RevisionHindiModal title={<div dangerouslySetInnerHTML={{__html: Data.items[0].title}}/>} isOpen={this.state.isModalOpen} onClose={() => {this.setState({isModalOpen : false})}}/>*/}
                <RevisionHindiModal
                    id={this.state.id} no_of_cards={this.data.length}
                    topic={this.DangerousDiv(this.data[this.state.id]["title"])}
                    content={this.DangerousDiv(this.data[this.state.id]["details"])}
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}  onNext={this.getNext} onPrevious={this.getPrevious}/>

                <div className="grid gap-6 mb-8 md:grid-cols-3">
                    <Card colored className="mb-8 shadow-md" style={{backgroundColor: "#f4bb14", position: "relative"}}>
                        <CardBody>
                            <img src={Image2} alt="" className="cartoon-1"
                                 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
                            <img src={abacus} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
                            <h4 className="text-4xl font-asar text-white mt-4 font-bold"> {this.DangerousDiv(cat1[0].main)} </h4>
                            <h4 className="text-xl font-asar pb-3 font-bold"
                                style={{color: "#5b4942", fontWeight: "700"}}>
                                {this.DangerousDiv(cat1[0].sub)}
                            </h4>
                            <Button iconRight={ModalsIcon} onClick={() => {
                                this.openModal("1")
                            }} size="regular"
                                    className="but-card1 font-bold">
                                Start
                            </Button>
                        </CardBody>
                    </Card>
                    <Card colored className="mb-8 shadow-md" style={{backgroundColor: "#df692f", position: "relative"}}>
                        <CardBody>
                            <img src={Image33} alt="" className="cartoon-1"
                                 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
                            <img src={puzzle} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
                            <h4 className="text-4xl font-asar text-white mt-4 font-bold"> {this.DangerousDiv(cat1[1].main)} </h4>
                            <h4 className="text-xl font-asar pb-3 font-bold"
                                style={{color: "#5b4942", fontWeight: "700"}}>
                                {this.DangerousDiv(cat1[1].sub)}
                            </h4>
                            <Button iconRight={ModalsIcon} onClick={() => {
                                this.openModal("2")
                            }} size="regular"
                                    className="but-card2 font-bold">
                                Start
                            </Button>
                        </CardBody>
                    </Card>
                    <Card colored className="mb-8 shadow-md" style={{backgroundColor: "#f09420", position: "relative"}}>
                        <CardBody>
                            <img src={Image4} alt="" className="cartoon-1"
                                 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
                            <img src={page} alt="" className="mb-card1" style={{position: "absolute", height: "100%"}}/>
                            <h4 className="text-4xl font-asar font-bold text-white mt-4"> {this.DangerousDiv(cat1[2].main)} </h4>
                            <h4 className="text-xl font-asar pb-3 font-bold"
                                style={{color: "#5b4942", fontWeight: "700"}}>
                                {this.DangerousDiv(cat1[2].sub)}
                            </h4>

                            <Button iconRight={ModalsIcon} onClick={() => {
                                this.openModal("3")
                            }} size="regular"
                                    className="but-card3 font-bold">
                                Start
                            </Button>
                        </CardBody>
                    </Card>
                    <Card colored className="mb-8 shadow-md" style={{backgroundColor: "#9fe0ca", position: "relative"}}>
                        <CardBody>
                            <img src={Image6} alt="" className="cartoon-1"
                                 style={{position: "absolute", height: "100%", right: "0", top: '0'}}/>
                            <h4 className="text-4xl font-asar font-bold text-white mt-4"> {this.DangerousDiv(cat1[3].main)} </h4>
                            <h4 className="text-xl font-asar pb-3 font-bold"
                                style={{color: "#5b4942", fontWeight: "700"}}>
                                {this.DangerousDiv(cat1[3].sub)}
                            </h4>

                            <Button iconRight={ModalsIcon} onClick={() => {
                                this.openModal("4")
                            }} size="regular"
                                    className="but-card4 font-bold">
                                Start
                            </Button>
                        </CardBody>
                    </Card>
                </div>

            </div>
        );
    }
}

export default HindiLearn;
