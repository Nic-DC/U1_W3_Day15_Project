/* ------ 
        The Data:
                 -----*/

const text = JSON.parse(
  '{"response_code":0,"results":[{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"According to the International System of Units, how many bytes are in a kilobyte of RAM?","correct_answer":"1000","incorrect_answers":["512","1024","500"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which computer hardware device provides an interface for all other connected devices to communicate?","correct_answer":"Motherboard","incorrect_answers":["Central Processing Unit","Hard Disk Drive","Random Access Memory"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?","correct_answer":"Final","incorrect_answers":["Static","Private","Public"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Pointers were not used in the original C programming language; they were added later on in C++.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:","correct_answer":"HD Graphics 500","incorrect_answers":["HD Graphics 700 ","HD Graphics 600","HD Graphics 7000"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"How many kilobytes in one gigabyte (in decimal)?","correct_answer":"1000000","incorrect_answers":["1024","1000","1048576"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Time on Computers is measured via the EPOX System.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which programming language shares its name with an island in Indonesia?","correct_answer":"Java","incorrect_answers":["Python","C","Jakarta"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the computer software acronym JVM stand for?","correct_answer":"Java Virtual Machine","incorrect_answers":["Java Vendor Machine","Java Visual Machine","Just Virtual Machine"]}]}'
);
// console.log({ text });

const quizzes = text.results;
// console.log({ quizzes });
const questionsAndAnswersArray = [];
for (let i = 0; i < quizzes.length; i++) {
  let arr = [];
  arr.push(quizzes[i].question);
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
const answer = document.querySelector(".answer");
const info = document.querySelector(".info");
const scoreboard = document.querySelector(".scoreboard");
const reamainingQuestions = document.querySelector(".reamainingQuestions");
const headerQ = document.querySelector(".headerQ");
const headerA = document.querySelector(".headerA");
// manipulating elements
question.classList.add("q-style");
answer.classList.add("a-style");
