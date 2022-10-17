/* ------ 
        The Data:
                 -----*/
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// we select the elements we ll need
const container = document.querySelector(".container");
const question = document.querySelector(".question");

const answers = document.querySelector(".answers");

const questionText = document.querySelector(".questionText");

const info = document.querySelector(".info");
const scoreboard = document.querySelector(".scoreboard");
const reamainingQuestions = document.querySelector(".reamainingQuestions");

const nextQuestion = document.querySelector(".nextQuestion");
const nextButton = document.querySelector(".nextButton");

// global variables
let userScore = 0;
let questionsLeft = 0;
let chosenAnswers = [];

// we create an array of arrays with the question and the answers [correct and incorrect]
let allQsAndAnswers = [];
const getAllAnswers = function (arr) {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i].question;
    let correctAnswer = questions[i].correct_answer;
    let incorrectAnswersArr = questions[i].incorrect_answers;
    let answers = [];
    answers.push(question, correctAnswer);

    for (let incorrectAnswer of incorrectAnswersArr) {
      answers.push(incorrectAnswer);
    }
    allQsAndAnswers.push(answers);

    // If we want to create an array of arrays with correct answer ans the incorrect answers
    // let correctAnswerArr = [];
    // let answers = [];
    // correctAnswerArr.push(questions[i].correct_answer);
    // answers.push(correctAnswerArr, questions[i].incorrect_answers);
    // allAnswers.push(answers);
  }
  console.log(allQsAndAnswers.length);
  console.log({ allQsAndAnswers });
  return allQsAndAnswers;
};
console.log(getAllAnswers(questions));

// we create a function that will act as random index generator for rendering the questions
const newRandomQuestion = function () {
  let random = Math.floor(Math.random() * (allQsAndAnswers.length - 1)); // we need indexes from 0 to 9
  return random;
};
console.log(newRandomQuestion());

// we create the function that, when the button is clicked, the question with the possible answers [including the correct one] appears
// and, when an answer is clicked, the useScore global variable increases by 1 [only after the click for the moment]
const showQuestion = function () {
  answers.innerHTML = "";
  const random = newRandomQuestion();
  const randomArrayOfQsAndAs = allQsAndAnswers[random];

  let questionShow = randomArrayOfQsAndAs[0];
  let correctAnswer = randomArrayOfQsAndAs[1];
  let incorrectAnswers = randomArrayOfQsAndAs.slice(2);

  questionText.innerText = questionShow;

  for (let i = 1; i < randomArrayOfQsAndAs.length; i++) {
    const answer = document.createElement("h3");
    answer.classList.add("answer");
    answer.innerText = randomArrayOfQsAndAs[i];
    answer.addEventListener("click", () => {
      if (randomArrayOfQsAndAs[i] === correctAnswer) {
        userScore++;
      }
    });

    answers.appendChild(answer);
  }

  console.log({ userScore });
};
// showQuestion();

nextButton.addEventListener("click", showQuestion);

// [allRawData [0 [question], [correctAnswer], [wrongAnswers] ], [1 [question], [correctAnswer], [wrongAnswers] ], ...]
// we create an array of arrays with only the question, wrong answers, correct answer
// let allRawData = [];
// const getRelevantData = function (arr) {
//   for (let i = 0; i < questions.length; i++) {
//     let questionArr = [];
//     let correctAnswerArr = [];
//     let rawData = [];

//     questionArr.push(questions[i].question);
//     correctAnswerArr.push(questions[i].correct_answer);

//     rawData.push(questionArr, correctAnswerArr, questions[i].incorrect_answers);
//     allRawData.push(rawData);
//   }
//   console.log(allRawData.length);
//   return allRawData;
// };
// getRelevantData(questions);
// console.log(getRelevantData(questions));
