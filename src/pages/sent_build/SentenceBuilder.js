import React, {Component} from 'react';
import Sentence from "./Sentence"

class SentenceBuilder extends Component {
    render() {

        return (
            <div>
                <div className="grid ">
                    <Sentence id="Q1" question="We catch the bus every morning." />
                    <Sentence id="Q2" question="The book is on the table." />
                    <Sentence id="Q3" question="Water freezes at zero degrees." />
                    <Sentence id="Q4" question="The Earth revolves around the Sun." />
                    <Sentence id="Q5" question="They watch television regularly." />
                </div>
            </div>
        );
    }
}

export default SentenceBuilder;