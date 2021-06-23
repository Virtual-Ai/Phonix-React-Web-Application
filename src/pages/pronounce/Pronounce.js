import React from "react";
import {Link} from "react-router-dom";

import SectionTitle from "../../components/Typography/SectionTitle";
import {Card, CardBody} from "@windmill/react-ui";
import "../play-style.css";

import arrow from "../../icons/arrow3.png";

import ob1 from "../../assets/img/play/ob1.png";
import ob3 from "../../assets/img/play/ob3.png";
import ob4 from "../../assets/img/play/ob4.png";
// import ob5 from "../../assets/img/play/ob5.png";
import ob6 from "../../assets/img/play/ob6.png";
// import ob2 from "../../assets/img/play/ob2.png";
import ob7 from "../../assets/img/play/ob7.png";
// import ob8 from "../../assets/img/play/ob8.png";

import mbQuiz from "../../assets/img/play/mb-pl-cards/mb-quiz.png";
import mbDnd from "../../assets/img/play/mb-pl-cards/mb-dnd.png";
import mbMatch from "../../assets/img/play/mb-pl-cards/mb-match.png";
import mbSent from "../../assets/img/play/mb-pl-cards/mb-sent.png";

function Cards() {
    return (
        <>
            {/*<PageTitle className="font-chewy">Play</PageTitle>*/}
            <SectionTitle>What to play ?</SectionTitle>
            <div className="grid gap-6 mb-8 md:grid-cols-4">


                <Link to="/app/play/pronounce/Apro">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#e3613a",
                            position: "relative",
                            borderRadius: "0.9rem",
                        }}
                    >
                        <CardBody>
                            <img
                                src={ob1}
                                className="obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: "10.5rem",
                                    marginLeft: "0.2rem",
                                    marginBottom: "0.2rem",
                                }}
                            />
                            <img
                                src={mbQuiz}
                                className="mb-obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "-52px",
                                    bottom: "-52px",
                                    maxHeight: "12.5rem",
                                }}
                            />
                            <h4
                                className="text-6xl font-chewy text-white text-right pl-cd-title"
                                style={{}}
                            >Letter
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                A
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "#f2c0b0"}}
                            >
                                Tap here to begin
                            </h4>
                            <div className="flex justify-end">
                                <img src={arrow}
                                     alt="Play_IconSet"
                                     style={{maxWidth: "2.5rem"}}/>
                            </div>
                            {/*<h4 className="text-xl font-balsamiq"> Play with Words!</h4>*/}
                        </CardBody>
                    </Card>
                </Link>

                <Link to="/app/play/pronounce/Bpro">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#d54c68",
                            position: "relative",
                            borderRadius: "0.9rem",
                        }}
                    >
                        <CardBody>
                            <img
                                src={ob3}
                                className="obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: "9.5rem",
                                    marginLeft: "0.2rem",
                                    marginBottom: "0.2rem",
                                }}
                            />
                            <img
                                src={mbDnd}
                                className="mb-obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "-41px",
                                    bottom: "-41px",
                                    maxHeight: "12.5rem",
                                }}
                            />
                            <h4
                                className="text-6xl font-chewy text-white text-right pl-cd-title"
                                style={{}}
                            >
                                Letter 
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                B
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "#f2c0b0"}}
                            >
                                Tap here to begin
                            </h4>
                            <div className="flex justify-end">
                                <img src={arrow}
                                     alt="Play_IconSet"
                                     style={{maxWidth: "2.5rem"}}/>
                            </div>
                            {/*<h4 className="text-xl font-balsamiq"> Play with Words!</h4>*/}
                        </CardBody>
                    </Card>
                </Link>


                <Link to="/app/play/pronounce/Cpro">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#66d4f9",
                            position: "relative",
                            borderRadius: "0.9rem",
                        }}
                    >
                        <CardBody>
                            <img
                                src={ob4}
                                className="obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: "9.5rem",
                                    marginLeft: "0.2rem",
                                    marginBottom: "0.2rem",
                                }}
                            />
                            <img src={mbSent}
                                 className="mb-obs"
                                 alt="Play_IconSet"
                                 style={{
                                     position: "absolute",
                                     height: "100%",
                                     left: "-60px",
                                     bottom: "-52px",
                                     maxHeight: "12.5rem",
                                 }}
                            />
                            <h4 className="text-6xl font-chewy text-white text-right pl-cd-title"
                                style={{}}>Letter</h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                               C
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "#c2ecfb"}}
                            >
                                Tap here to begin
                            </h4>
                            <div className="flex justify-end">
                                <img src={arrow}
                                     alt="Play_IconSet"
                                     style={{maxWidth: "2.5rem"}}/>
                            </div>
                            {/*<h4 className="text-xl font-balsamiq"> Play with Words!</h4>*/}
                        </CardBody>
                    </Card>
                </Link>


                <Link to="/app/play/pronounce/Dpro">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#e09431",
                            position: "relative",
                            borderRadius: "0.9rem",
                        }}
                    >
                        <CardBody>
                            <img
                                src={ob6}
                                className="obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: "10.5rem",
                                    marginLeft: "0.2rem",
                                    marginBottom: "0.2rem",
                                }}
                            />
                            <img
                                src={mbMatch}
                                className="mb-obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "-52px",
                                    bottom: "-52px",
                                    maxHeight: "12.5rem",
                                }}
                            />
                            <h4
                                className="text-6xl font-chewy text-white text-right pl-cd-title"
                                style={{}}
                            >
                               Letter 
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                D
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "#fbf0d0"}}
                            >
                                Tap here to play
                            </h4>
                            <div className="flex justify-end">
                                <img src={arrow}
                                     alt="Play_IconSet"
                                     style={{maxWidth: "2.5rem"}}/>
                            </div>
                            {/*<h4 className="text-xl font-balsamiq"> Play with Words!</h4>*/}
                        </CardBody>
                    </Card>
                </Link>


                <Link to="/app/play/pronounce/Epro">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#7adaba",
                            position: "relative",
                            borderRadius: "0.9rem",
                        }}
                    >
                        <CardBody>
                            <img
                                src={ob7}
                                className="obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "0",
                                    bottom: "0",
                                    maxHeight: "10.5rem",
                                    marginLeft: "0.2rem",
                                    marginBottom: "0.2rem",
                                }}
                            />
                            <img
                                src={mbMatch}
                                className="mb-obs"
                                alt="Play_IconSet"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    left: "-52px",
                                    bottom: "-52px",
                                    maxHeight: "12.5rem",
                                }}
                            />
                            <h4
                                className="text-6xl font-chewy text-white text-right pl-cd-title"
                                style={{}}
                            >
                                Letter
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                E
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "#fbf0d0"}}
                            >
                                Coming Soon...
                            </h4>
                            <div className="flex justify-end">
                                <img src={arrow}
                                     alt="Play_IconSet"
                                     style={{maxWidth: "2.5rem"}}/>
                            </div>
                            {/*<h4 className="text-xl font-balsamiq"> Play with Words!</h4>*/}
                        </CardBody>
                    </Card>
                </Link>    
            </div>
        </>
    );
}

export default Cards;
