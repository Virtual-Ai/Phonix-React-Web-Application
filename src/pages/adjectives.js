import React from 'react'
import {useState} from 'react'
import {Router, Route, Link} from 'react-router-dom'
import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./quiz-style.css"

const questions = [  
      {
          id: 0,
          question: "Choose the sentence with the right word order",
          answers: [
             { answerText: "Tom a lot of people invited.", isCorrect: false},
            { answerText:"A lot of people Tom invited.", isCorrect: false},
            { answerText:"Tom invited a lot of people.", isCorrect: true},
            { answerText:"Tom invited of people a lot.", isCorrect: false},
          ],
          explanation: "We usually use a certain word order: Subject - Predicate - Object. In this sentence 'Tom' is a subject, 'invited' is a predicate and 'a lot of people' is an object.",
        
          topic: 0
      },
      {
          id: 1,
          question: "Have you got _ pen?",
          answers: [
            { answerText: "—", isCorrect: false},
            { answerText:  "a",isCorrect: true},
            { answerText:  "an", isCorrect: false},
            { answerText:  "the", isCorrect: false},
          ],
          explanation: "We use the article 'a' with singular countable nouns when we talk about them in general.",
           
          topic: 1
      },
      {
          id: 2,
          question: "Tom _______ (to read) a newspaper now.",
          answers: [
            { answerText: "reads", isCorrect: false},
            { answerText: "is reading", isCorrect: true},
            { answerText: "read", isCorrect: false},
            { answerText: "has read", isCorrect: false},
          ],
          explanation: "The adverb 'now' means that the action is taking place at the moment of speaking.  In this case we should use the Present Continuous Tense: am/is/are + Verb-ing.",
           
          topic: 2
      },
      {
          id: 3,
          question: "The Romans _______ (to come) to Britain in 54 BC.",
          answers: [
            { answerText: "came",isCorrect: true},
            { answerText: "were coming",isCorrect: false},
            { answerText: "comed",isCorrect: false},
            { answerText: "had come", isCorrect: false},
          ],
          explanation: "If an action happened at a definite time in the past we use the Past Simple Tense. If there is a regular verb in a sentence we add '-ed'. Irregular verbs should be memorized. Here: COME-CAME-COME",
           
          topic: 3
      },
      {
          id: 4,
          question: "Bill __________ (to visit) his parents tomorrow. He has got an appointment with them.",
          answers: [
            { answerText:"is visiting", isCorrect: false},
            { answerText: "will have visited", isCorrect: false},
            { answerText: "will visit", isCorrect: true},
            { answerText: "visits", isCorrect: false},
          ],
          explanation: "We use ‘I am doing’ (present continuous) when we say what we have arranged to do. While ‘I am going to do something’ means ‘I've decided to do it, but perhaps not arranged to do it.",
           
          topic: 4
      },
      {
          id: 5,
          question: "Tom, look! The mail ______________ (to deliver).",
          answers: [
            { answerText:"is delivered", isCorrect: true},
            { answerText:"delivers",isCorrect: false},
            { answerText:"delivered",isCorrect: false},
              { answerText: "is delivering", isCorrect: false}
,
          ],
          explanation: "Sometimes we don't know who carries out the action and also it can be obvious or unimportant to us. In this case we use the Passive Voice.",
           
          topic: 5
      },
      {
          id: 6,
          question: "My brother is only 6, but he _____________ already play the piano.",
          answers: [
            { answerText:"has to", isCorrect: false},
            { answerText:"must", isCorrect: false},
            { answerText: "may",isCorrect: false}, 
            { answerText: "can", isCorrect: true}
          ],
          explanation: "The modal verb 'can' is used when we speak about someone's ability to do something.",
           
          topic: 6
      },
      {
          id: 7,
          question: "At first you have to _______________ (to complete a form) the application form.",
          answers: [
            { answerText: "try on", isCorrect: false},
            { answerText: "fill in",isCorrect: true},
            { answerText:"come on",isCorrect: false},
            { answerText: "take off", isCorrect: false},
          ],
          explanation: "Phrasal verbs are verbs that consist of a verb and a particle and/or a preposition. Phrasal verbs are typical of spoken English or informal writing, e.g. letters to friends and articles in popular journalism. They cannot be understood based upon the meanings of the individual parts in isolation, thus, their meanings are unpredictable. The phrasal verb 'to fill in' means 'to complete a form by providing needed information'.",
           
          topic: 7
      },
      {
          id: 8,
          question: "Choose two forms of the verb 'to be' according to the order: Past Simple - Past Participle",
          answers: [
            { answerText:  "was/were - been",isCorrect: false},
            { answerText:  "was - was",isCorrect: true},
            { answerText:  "been - been",isCorrect: false},
            { answerText:  "been - was",isCorrect: false},
          ],
          explanation: "TO BE - WAS/WERE - BEEN",
           
          topic: 8
      },
      {
          id: 9,
          question: "Your brother is so rude. I don't like ____ .",
          answers: [
            { answerText:  "him",isCorrect: true},
            { answerText:  "he",isCorrect: false},
            { answerText:   "his",isCorrect: false},
            { answerText:  "himself",isCorrect: false},
          ],
          explanation: "If a pronoun is an object we use its object form: He - Him",
        
          topic: 9
      }
  ]

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [showExpln, setShowExpln] = useState(false);
  const [disable, setDisable] = useState(false);
  const [dis, setDis] = useState("studyMore");
  const [optionDis, setOptionDis] = useState("true");

    const handleAnswerOptionClick = (isCorrect) => {
      
      const CorrectAnswer = () => toast.success("✅ 🥳 Yayy! Great Going! Keep doing well! ", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    
    const WrongAnswer = () => toast.error("❌ Wrong answer! Read the explanation 📝!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });


		if (isCorrect) {
      CorrectAnswer();
			setScore(score + 1);
		}
    else{
      WrongAnswer();
    }
setShowExpln(true) 
	};

  const SkipQuestion = () => {
   
    toast.warn("Question skipped!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });

    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		} 
  }
  const NextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		} 
    setShowExpln(false);
  }
  const Party = () => {
    return(<> <img src={require("./assets/party.png")} alt="yayy!"/> </>)
  }
  
  const StudyMore = () => {
    return(<> <img src={require("./assets/studyMore.png")} alt="instruc-image"/> </>)
  }

  const OptionsBelow = () => {
    return(
      <div className="topbar">
      <button className = "m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray" onClick = {() => SkipQuestion()}>Skip</button>
      <button className = "m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple" onClick = {() => NextQuestion()}>Next</button>
      </div>
    )
  }

	return (
        <>
		<div className='app container grid px-6 mx-auto'>
			{showScore ? (
				<div className='score-section'>
        	You scored {score} out of {questions.length}
				  <img className = "instrucImage2" src={require("./assets/studyMore.png")} alt="yayy!"/>
         {/* {score >= 4 ? setDis("party") : setDis("studyMore") }
         {dis === "party" && <Party/>}
         {dis === "studyMore" && <StudyMore />}  */}
			 {/* (dis === "party") ? {
          <img src={require("./assets/party.png")} alt="yayy!"/>
        } : {
          <img src={require("./assets/studyMore.jpg")} alt="instruc-image"/>
        } */}
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> Question {currentQuestion + 1} of {questions.length}</span> 
                            <span>Score {score} /10</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
<div className="layout-instructions">
					<div className='answer-section'>
						{questions[currentQuestion].answers.map((answerOption) => (
							<button className="options-display" disabled={disable}
                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect) && setDisable(true)} 
                            // style= {
                            //     questions[currentQuestion].answers.isCorrect ? 
                            //     {backgroudColour: "green"} : 
                            //     !questions[currentQuestion].answers.isCorrect ?
                            //     {backgroudColour: "red"}:
                            //     styleForDefaultAnswer
                            //  }    
                            >{answerOption.answerText}</button>
						))}
					</div>
          <div className="image-container">
  <img className = "instrucImage2" src={require("./assets/table.png")} alt="instruc-image"/>
  </div>
</div>
				</>
			)}
     {showExpln === true ? <span className="expln-ques">📝 Explanation: <br/>{questions[currentQuestion].explanation}</span> : <span></span>}
     	</div>
       
    <OptionsBelow/>
            
	</>
    );
}


const QuizHeader = () => {
    return(<>
    <PageTitle><center><h1>Nouns Quiz
      </h1>
      </center></PageTitle></>)
}

const QuizInstructions = () => {
return(<div className="quiz-instructions">
  <br/>
<SectionTitle className="m1">Quiz Instructions</SectionTitle>
<div className = "layout-instructions">

<ul>
  <li>1. There are 10 questions in this quiz. 
</li>
<li>2. Each correct answer will add one point to your score. 
</li>
<li>3. Explanation for each answer will also be displayed after you select the answer.
</li>
<li>4. HAVE FUN! :) 
</li>
</ul>

<div className="image-container">
  <img className = "instrucImage" src={require("./assets/woman.png")} alt="instruc-image"/>
  </div>

</div>
</div>)
}

const Play = () => {
  return(
  <div>
    <br/>
    <Questions/>
    </div>)
    }
    
const QuizSummary = () => {
        return(<h1>Quiz Summary</h1>)
        }
        
function Noun() {
    const [showComp, setShowComp] = useState("instruc")
  
    return(
      <><br/>
        <div className="outer-box card container grid px-6 mx-auto ">
            <QuizHeader/>
            <div className="topbar">
            <button className = "m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray" onClick = {() => setShowComp("instruc")}>Instructions</button>
            <button className = "m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple" onClick = {() => setShowComp("play")}>Let's Play!</button>
            </div>
            {showComp === "play" && <Play/>}
            {showComp === "instruc" &&  <QuizInstructions/>}
            </div>
            <ToastContainer />
            </>
    )
}

export default Noun;
