import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PageTitle from "../../components/Typography/PageTitle";
// import SectionTitle from "../../components/Typography/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./quiz-style.css";
import UIfx from "uifx";
import correctAudio from "./assets/audio/correct.mp3";
import wrongAudio from "./assets/audio/wrong.wav";
import buttonAudio from "./assets/audio/skipNext.mp3";

import A from "./assets/A.png";
import B from "./assets/B.png";
import C from "./assets/C.png";
import D from "./assets/D.png";

const correctA = new UIfx(correctAudio, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const wrongA = new UIfx(wrongAudio, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const skipNextA = new UIfx(buttonAudio, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const questions = [
  {
    id: 0,
    question: "Tom _______ (to read) a newspaper now.",
    answers: [
      {
        answerText: "reads",
        isCorrect: false,
        imgSrc: A
      },
      {
        answerText: "is reading",
        isCorrect: true,
        imgSrc: B
      },
      {
        answerText: "read",
        isCorrect: false,
        imgSrc: C
      },
      {
        answerText: "has read",
        isCorrect: false,
        imgSrc: D
      },
    ],
    explanation:
      "The adverb 'now' means that the action is taking place at the moment of speaking.  In this case we should use the Present Continuous Tense: am/is/are + Verb-ing.",

    topic: 2,
  },
  {
    id: 1,
    question: "The Romans _______ (to come) to Britain in 54 BC.",
    answers: [
      { answerText: "came", isCorrect: true, imgSrc: A },
      { answerText: "were coming", isCorrect: false, imgSrc: B },
      { answerText: "come", isCorrect: false, imgSrc: C },
      { answerText: "had come", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "If an action happened at a definite time in the past we use the Past Simple Tense. If there is a regular verb in a sentence we add '-ed'. Irregular verbs should be memorized. Here: COME-CAME-COME",

    topic: 3,
  },
  {
    id: 2,
    question: "Bill __________ (to visit) his parents tomorrow. He has got an appointment with them.",
    answers: [
      { answerText: "is visiting", isCorrect: true, imgSrc: A },
      { answerText: "will have visited", isCorrect: false, imgSrc: B },
      { answerText: "will visit", isCorrect: false, imgSrc: C },
      { answerText: "visits", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use comparative adjectives to compare two people/things. When we use a comparative adjective in front of a noun we add ‘than’. To make a comparative form of short (one syllable) adjectives we add –er.",

    topic: 4,
  },
  {
    id: 3,
    question: "Jill _________ (to work) in a hospital.",
    answers: [
      { answerText: "is working", isCorrect: false, imgSrc: A },
      { answerText: "works", isCorrect: true, imgSrc: B },
      { answerText: "work", isCorrect: false, imgSrc: C },
      { answerText: "has worked", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "When we talk about things in general, permanent situations and states or things which happen sometimes, we use the Present Simple Tense: he/she/it + Verb + -s(es)",

    topic: 2,
  },
  {
    id: 4,
    question:
      "We were strolling in the park when suddenly it _________ (to thunder).",
    answers: [
      { answerText: "was thundering", isCorrect: false, imgSrc: A },
      { answerText: "had thundered", isCorrect: false, imgSrc: B },
      { answerText: "thundered", isCorrect: true, imgSrc: C },
      { answerText: "thunders", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "The first action was in progress when suddenly the second one happened in the middle of the first action. For the action that was in progress we use the Past Continuous Tense, the action that occurred in the middle of the first one we should use the Past Simple Tense.",

    topic: 3,
  },
  {
    id: 5,
    question: "Jim has invited us to his birthday party. He _________ (to be) 27 next week.",
    answers: [
      { answerText: "shall be", isCorrect: false, imgSrc: A },
      { answerText: "will be", isCorrect: true, imgSrc: B },
      { answerText: "is going to be", isCorrect: false, imgSrc: C },
      { answerText: "is", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use the Future Simple Tense when we talk about actions which will certainly happen in the future and which we cannot control.",

    topic: 4,
  },
  {
    id: 6,
    question:
      "Oh no! We are too late! Nobody opens the door. They ________ (to go/already) out.",
    answers: [
      { answerText: "played", isCorrect: false, imgSrc: A },
      { answerText: "was playing", isCorrect: false, imgSrc: B },
      { answerText: "were playing", isCorrect: true, imgSrc: C },
      { answerText: "having played", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "We use the Past Continuous Tense when we talk about two or more simultaneous actions that were going on at a given moment in the past. The plural past form of the irregular verb 'to be' is 'were'.",

    topic: 3,
  },
  {
    id: 7,
    question:
      "It's a wonderful evening. I really don't think it ____________ (to rain) tomorrow.",
    answers: [
      { answerText: "is going to rain", isCorrect: false, imgSrc: A },
      { answerText: "shall rain", isCorrect: false, imgSrc: B },
      { answerText: "rains", isCorrect: false, imgSrc: C },
      { answerText: "will rain", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "We often use will ('ll) with '(I) don't think' or '(I) think' for predictions based on our own personal opinion or knowledge: I don't think the exam will be very difficult.",

    topic: 4,
  },
  {
    id: 8,
    question:
      "Sarah _________ (to cook) thirty pancakes today.",
    answers: [
      { answerText: "cook", isCorrect: false, imgSrc: A },
      { answerText: "is cooking", isCorrect: false, imgSrc: B },
      { answerText: "cooks", isCorrect: false, imgSrc: C },
      { answerText: "has cooked", isCorrect: true, imgSrc: D },
    ],
    explanation: "We can use the present perfect to talk about a past action that has a result in the present. Sarah cooked thirty pancakes earlier, and we are going to eat them now (as a result), or they are on the table and we can see them on the plates.",

    topic: 2,
  },
  {
    id: 9,
    question: "I was writing a letter while my husband _____________ (to cook).",
    answers: [
      { answerText: "cooked", isCorrect: false, imgSrc: A },
      { answerText: "was cooking", isCorrect: false, imgSrc: B },
      { answerText: "cooks", isCorrect: false, imgSrc: C },
      { answerText: "has cooked", isCorrect: true, imgSrc: D },
    ],
    explanation: "We use the Past Continuous Tense when we talk about two or more simultaneous actions in the past. We use the present continuous for two actions/situations happening at the same time. And we can use either 'when' or 'while' before the past continuous. 'While' means 'during the ​time that', or 'at the same ​time as'.",

    topic: 3,
  },
];
const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showExpln, setShowExpln] = useState(false);
  const [disable, setDisable] = useState(false);
  // const [dis, setDis] = useState("studyMore");
  // const [optionDis, setOptionDis] = useState("true");

  const handleAnswerOptionClick = (isCorrect) => {
    setDisable(true)
    const CorrectAnswer = () =>
      toast.success("✅ 🥳 Yayy! Great Going! Keep doing well! ", {
        position: toast.POSITION.TOP_RIGHT,
      });

    const WrongAnswer = () =>
      toast.error("❌ Wrong answer! Read the explanation 📝!", {
        position: toast.POSITION.TOP_RIGHT,
      });

    if (isCorrect) {
      correctA.play();
      CorrectAnswer();
      setScore(score + 1);
    } else {
      wrongA.play();
      WrongAnswer();
    }
    setShowExpln(true);
  };

  const SkipQuestion = () => {
    skipNextA.play();
    toast.warn("Question skipped!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const NextQuestion = () => {
    skipNextA.play();
    setDisable(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setShowExpln(false);
  };
  // const Party = () => {
  //   return (
  //     <> {/* <img src={require("./assets/party.png")} alt="yayy!" />{" "} */}</>
  //   );
  // };

  // const StudyMore = () => {
  //   return (
  //     <>
  //       {" "}
  //       <img src={require("./assets/studyMore.png")} alt="instruc-image" />{" "}
  //     </>
  //   );
  // };

  const OptionsBelow = () => {
    return (
      <div className="sidebar-options">
        <button
        disabled = {disable === true}
        className="bg-skin m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray"
        onClick={() => SkipQuestion()}
        >
          Skip
        </button>
        <button
        disabled = {disable === false}
         className="new-btn m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-white border border-transparent active:bg-brown hover:bg-skin focus:shadow-outline-purple"
         onClick={() => NextQuestion()}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="app container grid px-6 mx-auto">
        {showScore ? (
          <div className="score-section">
            You scored {score} / {questions.length}
            {/* <img
              className="instrucImage2"
              src={require("./assets/studyMore.png")}
              alt="yayy!"
            /> */}
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
            <div className="question-section">
              <div className="question-text ques-bg">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="layout-instructions">
              <div className="answer-section answer-wid">
                {questions[currentQuestion].answers.map((answerOption) => (
                   // eslint-disable-next-line
                  <button
                    className="options-display"
                    disabled={disable === true}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    // style= {
                    //     questions[currentQuestion].answers.isCorrect ?
                    //     {backgroudColour: "green"} :
                    //     !questions[currentQuestion].answers.isCorrect ?
                    //     {backgroudColour: "red"}:
                    //     styleForDefaultAnswer
                    //  }
                  >
                    {answerOption.answerText}
                    {/* <img src={answerOption.imgSrc} className="imgOption" /> */}
                  </button>
                ))}
              </div>
              <div>
                <div className="question-count expln-wid">
                  <span>
                    {" "}
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <br/>
                  <span className = "text-600-30px">Score: {score} /10</span>
                  <OptionsBelow />
                </div>
                <div className="expl-box">
                  {showExpln === true ? (
                    // eslint-disable-next-line                 
                    <div className="expln-ques expln-box expln-wid">
                      📝 Explanation: <br />
                      {questions[currentQuestion].explanation}
                    </div>
                  ) : (
                    <div className="expln-ques expln-box expln-wid">
                      <h5>Select the options to find the explanation here.
                        </h5>
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="image-container">
                <img
                  className="instrucImage2"
                  src={require("./assets/happy.png")}
                  alt="instruc-image"
                />
              </div> */}
            </div>
          </>
        )}
      </div>

    </>
  );
};

const QuizHeader = () => {
  return (
    <>
      <PageTitle>
        <center>
          <h1 className="text-brown">Tenses Quiz</h1>
        </center>
      </PageTitle>
    </>
  );
};

const QuizInstructions = () => {
  return (
    <div className="quiz-instructions">
      <br />
      <div className="m1 font-st-head">Quiz Instructions</div>
      <div className="layout-instructions">
        <ul>
          <li>1. There are 10 questions in this quiz.</li>
          <li>2. Each correct answer will add one point to your score.</li>
          <li>
            3. Explanation for each answer will also be displayed after you
            select the answer.
          </li>
          <li>4. HAVE FUN! :)</li>
        </ul>

        <div className="image-container">
          <img
            className="instrucImage"
            src={require("./assets/woman.png")}
            alt="instruc"
          />
        </div>
      </div>
    </div>
  );
};

const Play = () => {
  return (
    <div>
      <br />
      <Questions />
    </div>
  );
};

// const QuizSummary = () => {
//   return <h1>Quiz Summary</h1>;
// };

function Tenses() {
  const [showComp, setShowComp] = useState("instruc");

  return (
    <>
      <br />
      <div className="font-st outer-box card container grid px-6 mx-auto ">
        <QuizHeader />
        <div className="topbar">
          <NavLink to = "/app/play/quiz">

       <button
            className="bg-skin m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray"
          >
            Back
          </button>
      
          </NavLink>
  
          <button
            className="bg-skin m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray"
            onClick={() => setShowComp("instruc")}
          >
            Instructions
          </button>
          <button
            className="new-btn m1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-white border border-transparent active:bg-brown hover:bg-skin focus:shadow-outline-purple"
            onClick={() => setShowComp("play")}
          >
            Let's Play!
          </button>
        </div>
        {showComp === "play" && <Play />}
        {showComp === "instruc" && <QuizInstructions />}
      </div>
      <ToastContainer />
    </>
  );
}

export default Tenses;
