import { questions } from "./questions.js";

const btn = document.querySelector("button");
const mainQuizSection = document.querySelector(".mainQuizSection");
const timerDiv = document.querySelector(".time");
const questionsContainer = document.querySelector(".questionsContainer");
const questionsOptions = document.querySelector(".questionsOptions");
const userAnswers = [];

let quesCount = 0;
let timer = 5;
btn.addEventListener("click", () => {
  mainQuizSection.innerHTML = "";
  displayQuestionAndOptions(quesCount);
  const interval = setInterval(() => {
    if (timer === 0) {
      if (quesCount < questionsContainer.length - 1) {
        quesCount++;
        timer = 5;
        timerDiv.innerHTML = timer;
        displayQuestionAndOptions(quesCount);
      }
      else {
        clearInterval(interval);
        mainQuizSection.innerHTML = "";
        timerDiv.innerHTML = "";
        calculateScore();
      }
    }
    else {
      timer--;
      timerDiv.innerHTML = timer;
    }
  }, 1000)
});
function displayQuestionAndOptions(quesCount) {
  
  questionsContainer.innerHTML = "";
  questionsOptions.innerHTML = "";
  const heading = document.createElement("h1");
  heading.innerHTML = questionsContainer[quesCount].q;
  questionsContainer.append(heading);
  mainQuizSection.append(questionsContainer);

  questionsContainer[quesCount].options.map((options) => {
    const option = document.createElement("p");
    option.innerHTML = options;
    options.addEventListener("click", storeUserAnswer);
    questionsOptions.append(options);
    mainQuizSection.append(questionsOptions);
  })

}

function storeUserAnswer(e) {
  userAnswers.push(e.target.innerText);
}

function calculateScore(){
  let score=0;
  userAnswers.forEach((answers,index)=>{
    if(answer===questions[index].a) score++;
  })
  console.log("Your score is: "+score);
}



// function processQuestions(arr) {
//   const output = arr.map((object) => {
//     object.incorrect_answers.push(object.correct_answer);
//     object.incorrect_answers = randomize(object.incorrect_answers);
//     return object;
//   });
//   return output;
// }

// function randomize(arr) {
//   const final = [];
//   const temp = [];

//   for (let i = 0; i < arr.length; i++)
//     final.push(arr[randomValue(arr.length, temp)]);
//   return final;
// }

// function randomValue(len, temp) {
//   const value = Math.floor(Math.random() * len);
//   if (temp.includes(value)) return randomValue(len, temp);
//   else {
//     temp.push(value);
//     return value;
//   }
// }

// const randomizedQuestions = processQuestions(questions);
// console.log(randomizedQuestions);
