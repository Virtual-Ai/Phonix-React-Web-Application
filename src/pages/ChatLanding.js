import React from "react";
import {Link} from "react-router-dom";

import SectionTitle from "../components/Typography/SectionTitle";
import {Card, CardBody} from "@windmill/react-ui";
import "./play-style.css";

import arrow from "../icons/arrow3.png";

import ob1 from "../assets/img/play/ob1.png";
import ob3 from "../assets/img/play/ob3.png";
import ob4 from "../assets/img/play/ob4.png";
import ob5 from "../assets/img/play/ob5.png";
import ob6 from "../assets/img/play/ob6.png";
import ob2 from "../assets/img/play/ob2.png";
import ob7 from "../assets/img/play/ob7.png";
import ob8 from "../assets/img/play/ob8.png";

import mbQuiz from "../assets/img/play/mb-pl-cards/mb-quiz.png";
import mbDnd from "../assets/img/play/mb-pl-cards/mb-dnd.png";
import mbMatch from "../assets/img/play/mb-pl-cards/mb-match.png";
import mbSent from "../assets/img/play/mb-pl-cards/mb-sent.png";

function ChatLanding() {
    return (
        <>
            {/*<PageTitle className="font-chewy">Play</PageTitle>*/}
            <SectionTitle>Want to check your spoken English?</SectionTitle>
            <div className="grid gap-6 mb-8 md:grid-cols-4">


                <Link to="/app/chatbot">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#A2D2E4",
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
                            >
                               Sentence 
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                Builder
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "black"}}
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

                <Link to="/app/chatbot">
                    <Card
                        colored
                        className="mb-8 shadow-md"
                        style={{
                            backgroundColor: "#A2D2E4",
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
                                Word
                            </h4>
                            <h4 className="text-5xl font-chewy text-white text-right pl-cd-byline">
                                Meaning
                            </h4>
                            <h4
                                className="text-lg font-chewy text-white text-right mb-12 pl-cd-btmLine"
                                style={{color: "black"}}
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

            </div>
        </>
    );
}

export default ChatLanding;
