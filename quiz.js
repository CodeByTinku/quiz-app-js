const questions = [
  {
    question: "Which is largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question:
      "What is the only country that borders both the Atlantic Ocean and the Indian Ocean ?",
    answers: [
      { text: "Australlia", correct: false },
      { text: "Koria", correct: false },
      { text: "India", correct: false },
      { text: "South Africe", correct: true },
    ],
  },
  {
    question:
      "Who was the first person to be awarded two Nobel Prizes in different scientific fields ?",
    answers: [
      { text: "Marie Curie", correct: true },
      { text: "Apj Abdul Kalam", correct: false },
      { text: "Einstain", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "Worlds smallest country -",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Ukrain", correct: false },
      { text: "Vetican city", correct: true },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Capital of Uttar Pradesh is-",
    answers: [
      { text: "Patna", correct: false },
      { text: "Sri Nagar", correct: false },
      { text: "Rashi", correct: false },
      { text: "Lakhnou", correct: true },
    ],
  },
  {
    question: "Full form of RAM is-",
    answers: [
      { text: "Read only memory", correct: false },
      { text: "Random acess memory", correct: true },
      { text: "Right active memory", correct: false },
      { text: "Random active memory", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world ?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: 'What planet is known as the "Red Planet" ?',
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "In which country is the Great Wall of China located ?",
    answers: [
      { text: "Iran", correct: false },
      { text: "Myanmer", correct: false },
      { text: "Maleisia", correct: false },
      { text: "Chine", correct: true },
    ],
  },
  {
    question: "Regulating Act is invented in-",
    answers: [
      { text: "1773", correct: true },
      { text: "1973", correct: false },
      { text: "1874", correct: false },
      { text: "1798", correct: false },
    ],
  },
  {
    question: "How many players are there in a cricket team ?",
    answers: [
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "11", correct: true },
      { text: "12", correct: false },
    ],
  },
  {
    question: 'What does "www" stand for in a website browser ?',
    answers: [
      { text: "World wide webpage", correct: false },
      { text: "World wide web", correct: true },
      { text: "World wide webapps", correct: false },
      { text: "World wide wi-MAX", correct: false },
    ],
  },
  {
    question: 'Which fruit is known as the "king of fruits" ?',
    answers: [
      { text: "Banana", correct: false },
      { text: "Litchi", correct: false },
      { text: "Mango", correct: true },
      { text: "Jackfruit", correct: false },
    ],
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Afganistan", correct: false },
      { text: "India", correct: false },
      { text: "America", correct: false },
      { text: "Africa", correct: true },
    ],
  },
  {
    question: "Who was known as the Iron Man of India ?",
    answers: [
      { text: "Sarder Vallabhbhai Patel", correct: true },
      { text: "Apj Abdul Kalam", correct: false },
      { text: "Chandra Shekhar Venkatraman", correct: false },
      { text: "Mahatma Ghandhi", correct: false },
    ],
  },
  {
    question: "What sport does Lionel Messi play ?",
    answers: [
      { text: "Volly ball", correct: false },
      { text: "Cricket", correct: false },
      { text: "Football", correct: true },
      { text: "Golf", correct: false },
    ],
  },
  {
    question: "What is the name of Apples virtual assistant ?",
    answers: [
      { text: "Siri", correct: true },
      { text: "Bixby", correct: false },
      { text: "Google", correct: false },
      { text: "Alexa", correct: false },
    ],
  },
  {
    question: "What is the square root of 81 ?",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "6", correct: false },
      { text: "9", correct: true },
    ],
  },
  {
    question: "What is the primary gas found in the Earths atmosphere ?",
    answers: [
      { text: "O2", correct: false },
      { text: "Co2", correct: false },
      { text: "No2", correct: true },
      { text: "So3", correct: false },
    ],
  },
  {
    question: "What does USB stand for ?",
    answers: [
      { text: "Union server block", correct: false },
      { text: "Union selector Bus", correct: false },
      { text: "Union server block", correct: false },
      { text: "Universal Serial Bus", correct: true },
    ],
  },
  {
    question: "Which river is the longest in the world ?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
      { text: "Brahmaputra", correct: false },
      { text: "Saraswati", correct: false },
    ],
  },
  {
    question: "Who was the second Prime Minister of India ?",
    answers: [
      { text: "Sarvapalli Radhakrishnan", correct: false },
      { text: "Gopinath Bordoli", correct: false },
      { text: "Lal Bahadur Sastri", correct: true },
      { text: "Indira Ghandhi", correct: false },
    ],
  },
  {
    question: "How many rings are there on the Olympic flag ?",
    answers: [
      { text: "5", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: 'What is the shortcut key for "redo" on most computers?',
    answers: [
      { text: "Ctrl+z", correct: false },
      { text: "Ctrl+y", correct: true },
      { text: "Ctrl+x", correct: false },
      { text: "Ctrl+v", correct: false },
    ],
  },
  {
    question: "The name of Abdul Kalams autobiography is-",
    answers: [
      { text: "Road of life", correct: false },
      { text: "Long walk to freedom", correct: false },
      { text: "The red river", correct: false },
      { text: "Wings of fire", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
//this is a quiz app. I made this using html,css and javascript!...
