/* ------ 
        The Data:
                 -----*/

const text = JSON.parse(
  '{"response_code":0,"results":[{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"According to the International System of Units, how many bytes are in a kilobyte of RAM?","correct_answer":"1000","incorrect_answers":["512","1024","500"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which computer hardware device provides an interface for all other connected devices to communicate?","correct_answer":"Motherboard","incorrect_answers":["Central Processing Unit","Hard Disk Drive","Random Access Memory"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?","correct_answer":"Final","incorrect_answers":["Static","Private","Public"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Pointers were not used in the original C programming language; they were added later on in C++.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:","correct_answer":"HD Graphics 500","incorrect_answers":["HD Graphics 700 ","HD Graphics 600","HD Graphics 7000"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"How many kilobytes in one gigabyte (in decimal)?","correct_answer":"1000000","incorrect_answers":["1024","1000","1048576"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Time on Computers is measured via the EPOX System.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which programming language shares its name with an island in Indonesia?","correct_answer":"Java","incorrect_answers":["Python","C","Jakarta"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the computer software acronym JVM stand for?","correct_answer":"Java Virtual Machine","incorrect_answers":["Java Vendor Machine","Java Visual Machine","Just Virtual Machine"]}]}'
);
// console.log({ text });

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
window.onload = function () {
  // HINTS
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // For each question, create a container for wrapping it; then create a radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // with, as options, both the correct answer and the incorrect ones
  // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
  //
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display the first question with the text and the radio buttons
  // when the user selects an answer, pick the next question from the array and replace the old one with it
  // saving the user's choice in a variable
};
// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

const quizzes = text.results;
// console.log({ quizzes });
const questionsAndAnswersArray = [];
for (let i = 0; i < quizzes.length; i++) {
  let arr = [];
  arr.push(quizzes[i].question);
  arr.push(quizzes[i].incorrect_answers);
  arr.push(quizzes[i].correct_answer);
  questionsAndAnswersArray.push(arr);
}
console.log({ questionsAndAnswersArray });

/* ------ 
        Foundation:
                 -----*/
// Keep a global variable score for the user score
// Keep a variable questionNumber for the question the user is answering
// When questionNumber is bigger then the available questions, present the score
// Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
// Start with the easier version and THEN implement the EXTRAs
// Please debug everything / try it on the console to be sure of what to expect from your code

let userScore = 0;
let questionNumber = 0;

const container = document.querySelector(".container");
const question = document.querySelector(".question");
const wrongQuestion = document.querySelector(".wrongQuestion");
const answer = document.querySelector(".answer");
const info = document.querySelector(".info");
const scoreboard = document.querySelector(".scoreboard");
const reamainingQuestions = document.querySelector(".reamainingQuestions");
const headerQ = document.querySelector(".headerQ");
const headerPossibilities = document.querySelector(".headerPossibiities");
const headerA = document.querySelector(".headerA");
const buttonQ = document.querySelector(".buttonQ");

// manipulating elements
question.classList.add("q-style");
answer.classList.add("a-style");

const randomQuestion = function () {
  let random = Math.floor(
    Math.random() * (questionsAndAnswersArray.length - 2) + 1
  );
  return random;
};
console.log(randomQuestion());

const drawQuestion = function () {
  let randomQ = randomQuestion();
  let correctAnswer = questionsAndAnswersArray[randomQ][2];
  let wrongAnswers = questionsAndAnswersArray[randomQ][1];
  let allQuestions = wrongAnswers;

  console.log({ wrongAnswers });
  console.log({ allQuestions });
  console.log({ correctAnswer });

  for (let i = 0; i < allQuestions.length; i++) {
    if (!allQuestions.includes(correctAnswer)) {
      allQuestions.push(correctAnswer);
    }
  }

  console.log({ wrongAnswers });
  console.log({ allQuestions });
  console.log({ correctAnswer });

  headerQ.innerText = questionsAndAnswersArray[randomQ][0];
  for (let i = 0; i < allQuestions; i++) {
    headerPossibilities.innerText = possible;
  }
};
console.log(drawQuestion());

//buttonQ.addEventListener("click", drawQuestion);
