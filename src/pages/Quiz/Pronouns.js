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
    question: "Your brother is so rude. I don't like ____ .",
    answers: [
      { answerText: "him", isCorrect: true, imgSrc: A },
      { answerText: "he", isCorrect: false, imgSrc: B },
      { answerText: "his", isCorrect: false, imgSrc: C },
      { answerText: "himself", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "If a pronoun is an object we use its object form: He - Him",

    topic: 9,
  },
  {
    id: 1,
    question: "May I take __________ umbrella??",
    answers: [
      { answerText: "you're", isCorrect: false, imgSrc: A },
      { answerText: "yours", isCorrect: false, imgSrc: B },
      { answerText: "you", isCorrect: false, imgSrc: C },
      { answerText: "your", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "We use possessive adjectives to show that something belongs to somebody. Possessive adjectives are always followed by a noun.'Your' is the right form of the personal pronoun 'you'.",

    topic: 9,
  },
  {
    id: 2,
    question: "Whose car is this? - This car is ______ .",
    answers: [
      { answerText: "our's", isCorrect: false, imgSrc: A },
      { answerText: "we", isCorrect: false, imgSrc: B },
      { answerText: "our", isCorrect: false, imgSrc: C },
      { answerText: "ours", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "We use possessive pronouns to show that something belongs to somebody. Possessive pronouns replace a possessive adjective and a noun, thus, they are not followed by a noun. 'Ours' is the right form of the personal pronoun 'we'.",

    topic: 9,
  },
  {
    id: 3,
    question: "This is Jane's book. The book is _____ .",
    answers: [
      { answerText: "hers", isCorrect: true, imgSrc: A },
      { answerText: "she", isCorrect: false, imgSrc: B },
      { answerText: "her", isCorrect: false, imgSrc: C },
      { answerText: "her's", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "If it is clear who/what we are talking about, we can use possessive pronouns. And we use possessive pronouns instead of a possessive adjective + noun.The corresponding form of the possessive pronoun for the subject pronoun ‘she’ is ‘hers’.",

    topic: 9,
  },
  {
    id: 4,
    question:
      "Who are these people? I don't remember ______ .",
    answers: [
      { answerText: "they", isCorrect: false, imgSrc: A },
      { answerText: "their", isCorrect: false, imgSrc: B },
      { answerText: "them", isCorrect: true, imgSrc: C },
      { answerText: "themselves", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "We use subject pronouns ‘I’, ‘you’, ‘he’, ‘she’, ‘we’, ‘they’ for people, and we use them before the verb (the predicate) in sentences. The corresponding object pronouns ‘me’, ‘you’, ‘her’, ‘him’, ‘us’ and ‘them’ are used after the verb in sentences. In the test question ‘Who are these people?’ instead of the noun ‘people’ we can use a subject pronoun ‘they’ – ‘Who are they?’, therefore, in the test answer we should use the object pronoun ‘them’ that corresponds with the subject pronoun ‘they’.",

    topic: 9,
  },
  {
    id: 5,
    question: "What a wonderful pillow! Have you done it by ________ ?",
    answers: [
      { answerText: "you", isCorrect: false, imgSrc: A },
      { answerText: "your", isCorrect: false, imgSrc: B },
      { answerText: "yours", isCorrect: false, imgSrc: C },
      { answerText: "yourself", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "Yourself’ (singular form) and ‘yourselves’ (plural form) are reflexive pronouns, being the reflexive forms of ‘you’. Reflexive pronouns end in -self or –selves: myself, yourself, herself, himself, itself,ourselves, themselves They refer back to the subject forms of personal pronouns. We often use reflexive pronouns with the preposition ‘by’ to mean ‘alone’ or ‘without any help’: Why don’t you go by yourself?; The children made the entire meal by themselves.; He lived by himself in an enormous house.; She walked home by herself.; The children got dressed by themselves.; I prepared the whole meal by myself.‘Oneself’ is the ​reflexive ​form of the ​pronoun 'one' when it refers to ​people in ​general or to the person ​speaking, it is also used in this phrase ‘(all) by oneself’.",

    topic: 9,
  },
  {
    id: 6,
    question:
      "Jerry didn't do _________ wrong.",
    answers: [
      { answerText: "something", isCorrect: false, imgSrc: A },
      { answerText: "nothing", isCorrect: false, imgSrc: B },
      { answerText: "anything", isCorrect: true, imgSrc: C },
      { answerText: "everything", isCorrect: false, imgSrc: D },
    ],
    explanation:
      "Something, anybody, everyone, etc. are indefinite pronouns. We use -body, -one, -thing, -where to refer to people, places and things in a general way without saying exactly who or what they are. All the indefinite pronouns that are given in the test ANSWERS end in –thing (something, nothing, anything, everything), thus, they all refer to things.Indefinite pronouns using some are used in affirmative sentences to describe an indefinite quantity, the indefinite pronouns with every are used in affirmative sentences to describe a complete quantity. And the pronouns with no are used affirmative sentences to describe an absence. Indefinite pronouns with no are often used in affirmative sentences with a negative meaning, but these are nevertheless not negative sentences because they are lacking the word not. Any and the indefinite pronouns formed with it can also be used in affirmative sentences with a meaning that is close to every: whichever person, whichever place, whichever thing, etc.Negative sentences can only be formed with the indefinite pronouns that include any. The test sentence is a negative one: Jerry didn't do….. wrong. Thus, we can choose only ANSWER 3: anything.",

    topic: 9,
  },
  {
    id: 7,
    question:
      "The classroom is empty. I can see ______ here.",
    answers: [
      { answerText: "somebody", isCorrect: false, imgSrc: A },
      { answerText: "anybody", isCorrect: false, imgSrc: B },
      { answerText: "everybody", isCorrect: false, imgSrc: C },
      { answerText: "nobody", isCorrect: true, imgSrc: D },
    ],
    explanation:
      "Somebody, anyone, everybody, everything, etc. are indefinite pronouns. All the given in the test ANSWERS refer to people, because they have the ending –body. In the first sentence of the test we are informed that ‘The classroom is empty.’. And we understand that there is nobody in the classroom. But the next test sentence, where we should fill the gap, has no negative particle ‘not’: ‘I can see ______ here.’ Therefore,we choose ANSWER 4 – to use ‘nobody’ to refer to an absence of people. We do not use another negative in a clause with ‘nobody’: Nobody came.; Nothing happened.If the second sentence had the negative particle ‘not’: I cannot see ______ here.’, we would choose ANSWER 2 (anybody). We should know that ‘nobody’ is stronger and more definite than ‘not … anybody’: ‘I can see nobody.’ is stronger than ‘I cannot see anybody.).",

    topic: 9,
  },
  {
    id: 8,
    question:
      "Sarah spoke to Brad Pitt _____ .",
    answers: [
      { answerText: "themselves", isCorrect: false, imgSrc: A },
      { answerText: "itself", isCorrect: false, imgSrc: B },
      { answerText: "himself", isCorrect: true, imgSrc: C },
      { answerText: "yourself", isCorrect: false, imgSrc: D },
    ],
    explanation: "When the subject or the object in a sentence refer to the same person or thing we use a reflexive pronoun. Reflexive pronouns (myself, himself, ourselves etc) end in -self (singular form) or –selves (plural form). They refer back to the subject forms of personal pronouns.Reflexive pronouns can be used with nouns to mean ‘me (or you/him/her etc) and nobody else’ to emphasize a particular person/persons or animal/animals (male or female): Did you talk to the hostess herself or just to one of her assistants?; Do you want to meet George himself, or could his sister help you?;It is the party leaders themselves who make the decisions. In the sentence ‘I spoke to Angelina Jolie herself!’, the speaker emphasizes that he or she spoke to Angelina Jolie personally NOT somebody else.In the test sentence ‘Sarah spoke to Brad Pitt _____ .’ the particular man is emphasized – Brad Pitt.Sarah spoke to Brad Pitt personally NOT somebody else. Thus, we need the reflexive pronoun ‘himself’ –ANSWER 3.",

    topic: 9,
  },
  {
    id: 9,
    question: "Sandra had to send an email to the headmaster _______ .",
    answers: [
      { answerText: "him", isCorrect: false, imgSrc: A },
      { answerText: "itself", isCorrect: false, imgSrc: B },
      { answerText: "yourself", isCorrect: false, imgSrc: C },
      { answerText: "himself", isCorrect: true, imgSrc: D },
    ],
    explanation: "When the subject or the object in a sentence refer to the same person or thing we use a reflexive pronoun. Reflexive pronouns(myself, himself, ourselves etc) end in -self (singular form) or –selves (plural form). They refer back to the subject forms of personal pronouns. Reflexive pronouns can be used with nouns to mean ‘me (or you/him/her etc) and nobody else’ to emphasize a particular person/persons or animal/animals (male or female): Did you talk to the hostess herself or just to one of her assistants?; Do you want to meet George himself, or could his sister help you?; It is the party leaders themselves who make the decisions. In the sentence ‘I spoke to Angelina Jolie herself!’, the speaker emphasizes that he or she spoke to Angelina Jolie personally NOT somebody else.In this sentence the particular man is emphasized – the headmaster. The word ‘headmaster’ means ‘a male headteacher’. Sandra had to send an email to the headmaster personally NOT somebody else. Thus, we need the reflexive pronoun ‘himself’ – ANSWER 4.",

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
          <h1 className="text-brown">Pronouns Quiz</h1>
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

function Pronouns() {
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

export default Pronouns;
