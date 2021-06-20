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
    question: "You should be very careful. Snowboarding is a __________ hobby.",
    answers: [
      {
        answerText: "dangerous",
        isCorrect: true,
        imgSrc: A
      },
      {
        answerText: "boring",
        isCorrect: false,
        imgSrc: B
      },
      {
        answerText: "aweful",
        isCorrect: false,
        imgSrc: C
      },
      {
        answerText: "sacry",
        isCorrect: false,
        imgSrc: D
      },
    ],
    explanation:
      "The adjective 'dangerous' is a characteristic of something risky, of something that can cause injury.",

    topic: 10,
  },
  {
    id: 1,
    question: "Rick wants to marry Cindy. He gave her a beautiful _____ ring. (The ring made of gold)",
    answers: [
      { answerText: "goldful", isCorrect: false, imgSrc: A },
      { answerText: "goldy", isCorrect: false, imgSrc: B },
      { answerText: "golden", isCorrect: false, imgSrc: C },
      { answerText: "gold", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "'Gold' means 'made of gold', while 'golden' means - 'the color of gold'.",

    topic: 10,
  },
  {
    id: 2,
    question: "Sally is _________ than Carol.",
    answers: [
      { answerText: "short", isCorrect: false, imgSrc: A },
      { answerText: "shorter", isCorrect: true, imgSrc: B },
      { answerText: "shortly", isCorrect: false, imgSrc: C },
      { answerText: "the shortest", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use comparative adjectives to compare two people/things. When we use a comparative adjective in front of a noun we add ‘than’. To make a comparative form of short (one syllable) adjectives we add –er.",

    topic: 10,
  },
  {
    id: 3,
    question: "I think she is __________________ girl in our school.",
    answers: [
      { answerText: "beautifuller", isCorrect: false, imgSrc: A },
      { answerText: "more beautiful", isCorrect: false, imgSrc: B },
      { answerText: "the most beautiful", isCorrect: true, imgSrc: C },
      { answerText: "the beautifullest", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use superlative adjectives when we compare one person/one thing with several others. For most adjectives with two or more syllables we use ‘the most’ + adjective for formation of the superlative form. There are some exceptions, e.g. friendly – friendlier / the friendliest, gentle – gentler / the gentlest, funny – funnier / the funniest.",

    topic: 10,
  },
  {
    id: 4,
    question:
      "I think that BMW is a good car. But my brother Joe thinks that AUDI is __________ .",
    answers: [
      { answerText: "good", isCorrect: false, imgSrc: A },
      { answerText: "better", isCorrect: true, imgSrc: B },
      { answerText: "gooder", isCorrect: false, imgSrc: C },
      { answerText: "the best", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "When we compare two things or two people we use the comparative form of adjectives. The adjective 'good' has an irregular comparative form: GOOD – BETTER: GOOD - BETTER",

    topic: 10,
  },
  {
    id: 5,
    question: "Paul has bought a _______ _________ _________ _________ (round/wooden/brown/new) table.",
    answers: [
      { answerText: "new brown round wooden", isCorrect: false, imgSrc: A },
      { answerText: "round new brown wooden", isCorrect: false, imgSrc: B },
      { answerText: "new round brown wooden", isCorrect: true, imgSrc: C },
      { answerText: "new wooden brown round", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "There is a certain word order in sentences with two or more adjectives: OPINION-SIZE-AGE-SHAPE-COLOUR-ORIGIN-MATERIAL-TYPE. Here: a new (age) round (shape) brown (colour) wooden (material) table.",

    topic: 10,
  },
  {
    id: 6,
    question:
      "Mark speaks ________ German.",
    answers: [
      { answerText: "fluently", isCorrect: false, imgSrc: A },
      { answerText: "fluent", isCorrect: true, imgSrc: B },
      { answerText: "fluentily", isCorrect: false, imgSrc: C },
      { answerText: "fluenty", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "The test sentence ‘Mark speaks German __________ .’ is about what way Mark speaks German. Adverbs tell us in what way someone does something. Adverbs describe how, where, or when an action took place. They may also express the viewpoint of the speaker about the action, or several other functions.In most cases, an adverb is formed by adding -ly to an adjective: cheap – cheaply, slow – slowly. ANSWER 2 –‘fluent’ is an adjective, that’s why we can’t choose it in this test example. To form an adverb from this adjective we add suffix ‘–ly’ to the root morpheme ‘fluent’: fluent + ly = fluently. Thus, we choose ANSWER 1 - the adverb ‘fluently’ that is an adverb of manner, and adverbs of manner usually go in end position: She ate quickly. They sometimes go in mid position if the adverb is not the most important part of the clause or if the object is very long: She quickly ate her dinner and ran out.Different types of adverbs go in different places: at the front, in the middle or at the end of a clause. In the test sentence we are given the gap to fill in at the end of the sentence.ANSWERS 3 and 4 are the variants of incorrect spelling.",

    topic: 10,
  },
  {
    id: 7,
    question:
      "I think his behavior is ________ .",
    answers: [
      { answerText: "antinormal", isCorrect: false, imgSrc: A },
      { answerText: "innormal", isCorrect: false, imgSrc: B },
      { answerText: "unnormal", isCorrect: false, imgSrc: C },
      { answerText: "abnormal", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "Prefixes are letters which we add to the beginning of a word to make a new word with a different meaning.Prefixes can create a new word opposite in meaning to the word the prefix is attached to: possible –impossible, able – unable, like - dislike. The most common negative prefixes in English are in-, un-, non-, de-, dis-, a-, anti-, im-, il-, and ir-.The adjective ‘abnormal’ is formed by adding the negative prefix ab- to the adjective ‘normal’ and means ‘different from what is normal or usual, in a way which is strange or dangerous’ (an abnormal amount of snow; abnormal behavior). The origin of this adjective is French: the alteration of French anormal that comes from Medieval Latin anormalis that comes in its turn from Latin a- + Late Latin normalis (normal).By this formation we have an antonym pair: normal – abnormal. Don’t be confused with the adjective ‘subnormal’ that means ‘below the normal’ (a subnormal amount of rain; a subnormal person).",

    topic: 10,
  },
  {
    id: 8,
    question:
      "Kate has a beautiful _______ (made of gold) ring.",
    answers: [
      { answerText: "goldish", isCorrect: false, imgSrc: A },
      { answerText: "goldy", isCorrect: false, imgSrc: B },
      { answerText: "golden", isCorrect: false, imgSrc: C },
      { answerText: "gold", isCorrect: true, imgSrc: D },
    ],
    explanation: "\"Gold\" means made of gold.",

    topic: 10,
  },
  {
    id: 9,
    question: "Jane bought a nice _________ skirt.",
    answers: [
      { answerText: "netally", isCorrect: false, imgSrc: A },
      { answerText: "metal", isCorrect: false, imgSrc: B },
      { answerText: "metalous", isCorrect: false, imgSrc: C },
      { answerText: "metallic", isCorrect: true, imgSrc: D },
    ],
    explanation: "The words ‘metally’ and ‘metalous’ are nonce-words. The word ‘metal’ is a noun. The adjective ‘metallic’ has some meanings: (1) ‘consisting of or containing metal’, (2) ‘used about colours that are shiny like a silver metal’. And we understand that the colour of the skirt that Jane bought was shiny like a silver metal.Therefore, we are to choose ANSWER 3 (metallic).",

    topic: 10,
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
          <h1 className="text-brown">Adjectives Quiz</h1>
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

function Adjective() {
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

export default Adjective;
