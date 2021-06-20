import React, {Component} from 'react';

import SectionTitle from "../../components/Typography/SectionTitle";
import {Link} from "react-router-dom";
import {Card, CardBody} from "@windmill/react-ui";

import ob1_qz from '../../assets/img/play/Quiz-obs/qz-ob2.png'


class Dnd extends Component {
    render() {
        return (
            <>
            {/*<PageTitle>Drag and Drop</PageTitle>*/}
            <SectionTitle>Which one ?</SectionTitle>
                <div className="grid gap-6 mb-8 md:grid-cols-4">
                <Link to="/app/play/dnd/index?prepositions">
                    <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#68d4f9" , position:"relative",borderRadius:'0.9rem'}}>
                        <CardBody>
                            <img src={ob1_qz} alt="quiz-img" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>
                            <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Preposition</h4>
                            <h4 className="text-4xl font-chewy text-white text-right">DND</h4>
                            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#cbeebc'}}>5 Questions</h4>
                        </CardBody>
                    </Card>
                </Link>


                <Link to="/app/play/dnd/index?conjunctions">
                   <Card colored className="mb-8 shadow-md" style={{backgroundColor:"#f19775" , position:"relative",borderRadius:'0.9rem'}}>
                        <CardBody>
                            <img src={ob1_qz} alt="quiz-img" className="qz-card" style={{position:"absolute",height:"100%",left:"-17px",bottom:"0",maxHeight:'15.5rem'}}/>
                            <h4 className="text-5xl font-chewy text-white text-right" style={{marginBottom:'-1.3rem'}}>Conjunction</h4>
                            <h4 className="text-4xl font-chewy text-white text-right">DND</h4>
                            <h4 className="text-lg font-chewy text-white text-right mb-2" style={{color:'#fae9e2'}}>5 Questions</h4>
                        </CardBody>
                    </Card>
                </Link>
                </div>
            </>
        );
    }
}

export default Dnd;