import React from "react";
import { useState } from "react";
import { NavLink, Router, Route, Link } from "react-router-dom";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
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
    question: "Choose the sentence with the right word order",
    answers: [
      {
        answerText: "Tom a lot of people invited.",
        isCorrect: false,
        imgSrc: A,
      },
      {
        answerText: "A lot of people Tom invited.",
        isCorrect: false,
        imgSrc: B,
      },
      {
        answerText: "Tom invited a lot of people.",
        isCorrect: true,
        imgSrc: C,
      },
      {
        answerText: "Tom invited of people a lot.",
        isCorrect: false,
        imgSrc: D,
      },
    ],
    explanation:
      "We usually use a certain word order: Subject - Predicate - Object. In this sentence 'Tom' is a subject, 'invited' is a predicate and 'a lot of people' is an object.",

    topic: 0,
  },
  {
    id: 1,
    question: "Have you got _ pen?",
    answers: [
      { answerText: "—", isCorrect: false, imgSrc: A },
      { answerText: "a", isCorrect: true, imgSrc: B },
      { answerText: "an", isCorrect: false, imgSrc: C },
      { answerText: "the", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use the article 'a' with singular countable nouns when we talk about them in general.",

    topic: 1,
  },
  {
    id: 2,
    question: "Tom _______ (to read) a newspaper now.",
    answers: [
      { answerText: "reads", isCorrect: false, imgSrc: A },
      { answerText: "is reading", isCorrect: true, imgSrc: B },
      { answerText: "read", isCorrect: false, imgSrc: C },
      { answerText: "has read", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "The adverb 'now' means that the action is taking place at the moment of speaking.  In this case we should use the Present Continuous Tense: am/is/are + Verb-ing.",

    topic: 2,
  },
  {
    id: 3,
    question: "The Romans _______ (to come) to Britain in 54 BC.",
    answers: [
      { answerText: "came", isCorrect: true, imgSrc: A },
      { answerText: "were coming", isCorrect: false, imgSrc: B },
      { answerText: "comed", isCorrect: false, imgSrc: C },
      { answerText: "had come", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "If an action happened at a definite time in the past we use the Past Simple Tense. If there is a regular verb in a sentence we add '-ed'. Irregular verbs should be memorized. Here: COME-CAME-COME",

    topic: 3,
  },
  {
    id: 4,
    question:
      "Bill __________ (to visit) his parents tomorrow. He has got an appointment with them.",
    answers: [
      { answerText: "is visiting", isCorrect: false, imgSrc: A },
      { answerText: "will have visited", isCorrect: false, imgSrc: B },
      { answerText: "will visit", isCorrect: true, imgSrc: C },
      { answerText: "visits", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use ‘I am doing’ (present continuous) when we say what we have arranged to do. While ‘I am going to do something’ means ‘I've decided to do it, but perhaps not arranged to do it.",

    topic: 4,
  },
  {
    id: 5,
    question: "Tom, look! The mail ______________ (to deliver).",
    answers: [
      { answerText: "is delivered", isCorrect: true, imgSrc: A },
      { answerText: "delivers", isCorrect: false, imgSrc: B },
      { answerText: "delivered", isCorrect: false, imgSrc: C },
      { answerText: "is delivering", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "Sometimes we don't know who carries out the action and also it can be obvious or unimportant to us. In this case we use the Passive Voice.",

    topic: 5,
  },
  {
    id: 6,
    question:
      "My brother is only 6, but he _____________ already play the piano.",
    answers: [
      { answerText: "has to", isCorrect: false, imgSrc: A },
      { answerText: "must", isCorrect: false, imgSrc: B },
      { answerText: "may", isCorrect: false, imgSrc: C },
      { answerText: "can", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "The modal verb 'can' is used when we speak about someone's ability to do something.",

    topic: 6,
  },
  {
    id: 7,
    question:
      "At first you have to _______________ (to complete a form) the application form.",
    answers: [
      { answerText: "try on", isCorrect: false, imgSrc: A },
      { answerText: "fill in", isCorrect: true, imgSrc: B },
      { answerText: "come on", isCorrect: false, imgSrc: C },
      { answerText: "take off", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "Phrasal verbs are verbs that consist of a verb and a particle and/or a preposition. Phrasal verbs are typical of spoken English or informal writing, e.g. letters to friends and articles in popular journalism. They cannot be understood based upon the meanings of the individual parts in isolation, thus, their meanings are unpredictable. The phrasal verb 'to fill in' means 'to complete a form by providing needed information'.",

    topic: 7,
  },
  {
    id: 8,
    question:
      "Choose two forms of the verb 'to be' according to the order: Past Simple - Past Participle",
    answers: [
      { answerText: "was/were - been", isCorrect: false, imgSrc: A },
      { answerText: "was - was", isCorrect: true, imgSrc: B },
      { answerText: "been - been", isCorrect: false, imgSrc: C },
      { answerText: "been - was", isCorrect: false, imgSrc: D },
    ],
    explanation: "TO BE - WAS/WERE - BEEN",

    topic: 8,
  },
  {
    id: 9,
    question: "Your brother is so rude. I don't like ____ .",
    answers: [
      { answerText: "him", isCorrect: true, imgSrc: A },
      { answerText: "he", isCorrect: false, imgSrc: B },
      { answerText: "his", isCorrect: false, imgSrc: C },
      { answerText: "himself", isCorrect: false, imgSrc: D },
    ],
    explanation: "If a pronoun is an object we use its object form: He - Him",

    topic: 9,
  },
];

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showExpln, setShowExpln] = useState(false);
  const [disable, setDisable] = useState(false);
  const [dis, setDis] = useState("studyMore");
  const [optionDis, setOptionDis] = useState("true");

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
  const Party = () => {
    return (
      <> {/* <img src={require("./assets/party.png")} alt="yayy!" />{" "} */}</>
    );
  };

  const StudyMore = () => {
    return (
      <>
        {" "}
        <img src={require("./assets/studyMore.png")} alt="instruc-image" />{" "}
      </>
    );
  };

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
            alt="instruc-image"
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

const QuizSummary = () => {
  return <h1>Quiz Summary</h1>;
};

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
