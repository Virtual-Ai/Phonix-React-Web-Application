import React, {Component} from 'react';
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {Link} from "react-router-dom";
import {Card, CardBody} from "@windmill/react-ui";
import ob2 from "../../assets/img/play/ob2.png";
import arrow from "../../icons/arrow3.png";

class Dnd extends Component {
    render() {
        return (
            <>
                <PageTitle>Drag and Drop</PageTitle>
                <SectionTitle>Which one ?</SectionTitle>
                <div className="grid gap-6 mb-8 md:grid-cols-5">
                    <Link to="/app/play/dnd/index?preposition">
                        <Card colored className="mb-8 shadow-md"
                              style={{backgroundColor: "#b270c6", position: "relative", borderRadius: '0.9rem'}}>
                            <CardBody>
                                <img src={ob2} alt="Image" className="hideWhenSmall" style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: '8.5rem',
                                    marginLeft: '0.2rem',
                                    marginBottom: '0.2rem'
                                }}/>
                                <h4 className="text-5xl font-chewy text-white text-right"
                                    style={{marginBottom: '-1.3rem'}}>Prepositions</h4>
                                <h4 className="text-4xl font-chewy text-white text-right">DND</h4>
                                <h4 className="text-lg font-chewy text-white text-right mb-12"
                                    style={{color: '#f2c0b0'}}>5 Questions</h4>
                                <div className="flex justify-end">
                                    <img src={arrow} alt="Image" style={{maxWidth: '1.8rem'}}/>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link to="/app/play/dnd/index?noun">
                        <Card colored className="mb-8 shadow-md"
                              style={{backgroundColor: "#b270c6", position: "relative", borderRadius: '0.9rem'}}>
                            <CardBody>
                                <img src={ob2} alt="Image" className="hideWhenSmall" style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: '8.5rem',
                                    marginLeft: '0.2rem',
                                    marginBottom: '0.2rem'
                                }}/>
                                <h4 className="text-5xl font-chewy text-white text-right"
                                    style={{marginBottom: '-1.3rem'}}>Nouns</h4>
                                <h4 className="text-4xl font-chewy text-white text-right">DND</h4>
                                <h4 className="text-lg font-chewy text-white text-right mb-12"
                                    style={{color: '#f2c0b0'}}>10 Questions</h4>
                                <div className="flex justify-end">
                                    <img src={arrow} alt="Image" style={{maxWidth: '1.8rem'}}/>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            </>
        );
    }
}

export default Dnd;