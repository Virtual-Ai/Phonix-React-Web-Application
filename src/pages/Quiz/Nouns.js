import React from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
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
    question: "How many _______ of birds are there in the world?",
    answers: [
      {
        answerText: "a species",
        isCorrect: false,
        imgSrc: A,
      },
      {
        answerText: "specieses",
        isCorrect: false,
        imgSrc: B,
      },
      {
        answerText: "species",
        isCorrect: true,
        imgSrc: C,
      },
      {
        answerText: "speciess",
        isCorrect: false,
        imgSrc: D,
      },
    ],
    explanation:
    "There are some nouns which have the same form in the singular and in the plural: ONE SPECIES - TWO SPECIES",
    topic: 0,
  },
  {
    id: 1,
    question: "This airport can handle more than 300 _______ every day.",
    answers: [
      { answerText: "an aircraft", isCorrect: false, imgSrc: A },
      { answerText: "aircraftes", isCorrect: false, imgSrc: B },
      { answerText: "aircrafts", isCorrect: true, imgSrc: C },
      { answerText: "aircraft", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "There are some nouns which have the same form in the singular and in the plural: ONE AIRCRAFT - TWO AIRCRAFT",
        
    topic: 1,
  },
  {
    id: 2,
    question: "Mothers always give us ___________ .",
    answers: [
      { answerText: "many advices", isCorrect: false, imgSrc: A },
      { answerText: "much advice", isCorrect: true, imgSrc: B },
      { answerText: "many advice", isCorrect: false, imgSrc: C },
      { answerText: "much advices", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "The noun 'advice' is uncountable. Uncountable nouns do not have plural forms.",
            
    topic: 2,
  },
  {
    id: 3,
    question: "There is _______ (hair) in my soup.",
    answers: [
      { answerText: "hair", isCorrect: false, imgSrc: A },
      { answerText: "hairs", isCorrect: false, imgSrc: B },
      { answerText: "a hair", isCorrect: true, imgSrc: C },
      { answerText: "haires", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "Noun 'hair' can be used in singular in case when it is important to show the quantity: 'I can see one hair in my soup'. But it is impossible to say 'there are hairs'.",
          
    topic: 3,
  },
  {
    id: 4,
    question:
      "There are three ______ (a brush) on the bathroom shelf.",
    answers: [
      { answerText: "brushies", isCorrect: false, imgSrc: A },
      { answerText: "brush", isCorrect: false, imgSrc: B },
      { answerText: "brushs", isCorrect: false, imgSrc: C },
      { answerText: "brushes", isCorrect: true, imgSrc: D },
    ],
    explanation:
    "The noun ‘brush’ is countable. Countable nouns can be singular or plural. The rules for making the plural of nouns depend on the spelling and pronunciation. Most nouns form their plural by adding -s: part – parts,cake – cakes. In other cases, the plural depends on how the noun ends. If the noun ends in -ch, -s, -sh, -x, -z,we add -es. The plural ending -es is pronounced /iz/. The noun ‘brush’ ends in -sh, therefore, we need to add-es. Consequently, we are to choose ANSWER 4 (brushes).",
            
    topic: 4,
  },
  {
    id: 5,
    question: "Carla was sitting with two nice _______ (a woman).",
    answers: [
      { answerText: "woman", isCorrect: false, imgSrc: A },
      { answerText: "womans", isCorrect: false, imgSrc: B },
      { answerText: "women", isCorrect: true, imgSrc: C },
      { answerText: "womens", isCorrect: false, imgSrc: D },
    ],
    explanation:
    "The noun 'woman' has the irregular plural form: WOMAN -WOMEN",
 
    topic: 5,
  },
  {
    id: 6,
    question:
      "How many _______ (a child) do the Greens have?",
    answers: [
      { answerText: "childrens", isCorrect: false, imgSrc: A },
      { answerText: "childes", isCorrect: false, imgSrc: B },
      { answerText: "childs", isCorrect: false, imgSrc: C },
      { answerText: "children", isCorrect: true, imgSrc: D },
    ],
    explanation:
    "The noun 'child' has the irregular plural form: CHILD -CHILDREN",
  
    topic: 6,
  },
  {
    id: 7,
    question:
      "My grandmother has got 12 _______ (a goose) in her village.",
    answers: [
      { answerText: "goose", isCorrect: false, imgSrc: A },
      { answerText: "geeses", isCorrect: false, imgSrc: B },
      { answerText: "gooses", isCorrect: false, imgSrc: C },
      { answerText: "geese", isCorrect: true, imgSrc: D },
    ],
    explanation:
    "The noun 'goose' has the irregular plural form: GOOSE - GEESE",
    topic: 7,
  },
  {
    id: 8,
    question:
      "My cat has caught three ______ (a mouse) today.",
    answers: [
      { answerText: "mices", isCorrect: false, imgSrc: A },
      { answerText: "mouses", isCorrect: false, imgSrc: B },
      { answerText: "mice", isCorrect: true, imgSrc: C },
      { answerText: "mouse", isCorrect: false, imgSrc: D },
    ],
    explanation: "For the test sentence ‘My cat has caught three ______ (a mouse) today.’ we need to transform the singular form of the noun ‘mouse’ into the plural form. The noun 'mouse' that means ‘a small mammal with short fur, a pointed face, and a long, thin tail’ usually has the irregular plural form: MOUSE → MICE.But be attentive: if the meaning of the word ‘mouse’ is ‘a small mobile manual device that controls movement of the cursor and selection of functions on a computer display’, the plural form can also be ‘mouses’.",
  
    topic: 8,
  },
  {
    id: 9,
    question: "Kate doesn't have ________ knowledge at Maths .",
    answers: [
      { answerText: "some", isCorrect: false, imgSrc: A },
      { answerText: "a few", isCorrect: false, imgSrc: B },
      { answerText: "many", isCorrect: false, imgSrc: C },
      { answerText: "much", isCorrect: true, imgSrc: D },
    ],
    explanation:  "We use the quantifiers ‘some’, ‘(a) few’, ‘many’, ‘much’ to talk about quantities, amounts and degree.We can use them with a noun (as a determiner) or without a noun (as a pronoun).‘Some’ is a determiner and a pronoun (without a noun following, when this noun is understood). We use ‘some’ as a determiner before both countable and uncountable nouns to refer to indefinite quantities: some snow, some people. ‘Some’ is used in positive sentences (I drink some coffee every morning.) But we can use ‘some’ in questions when we are offering something (Would you like some mango ice-cream?) or when we are making a request (Can I buy some ice-cream?).We use ‘a few’ instead of ‘some’ with plural countable nouns when we talk about a small number: a few days, a few questions, a few friends. We use ‘many’ that means ‘a large number of’ with plural nouns (I don’t have many dresses.). We use ‘much’ that means ‘a large amount or to a large degree’ with singular uncountable nouns (I don’t earn much money.). We usually use ‘much’ with questions (?) and negatives(−). In affirmative clauses we sometimes use ‘much’ in more formal styles: There is much concern about drug addiction in the world.The test sentence ‘Kate doesn't have ________ knowledge at Maths.’ is negative, therefore, we cannot choose ‘some’ here. As we need to choose a quantifier for the uncountable noun ‘knowledge’, we can’t choose ‘a few’ and ‘many’. Therefore, we are to choose ANSWER 4 (much) from the test variants.",
          
    topic: 9,
  },
];

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showExpln, setShowExpln] = useState(false);
  const [disable, setDisable] = useState(false);
 
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
          <h1 className="text-brown">Nouns Quiz</h1>
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

function Noun() {
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

export default Noun;
