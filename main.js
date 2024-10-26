const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("play-again-btn");

let correctAnswers = 0;
const questions = [
    { question: "2 + 2 = ?", answer: 4 },
    { question: "5 * 4 = ?", answer: 20 },
    { question: "12 / 3 = ?", answer: 4 },
    { question: "8 - 3 = ?", answer: 5 },
    { question: "100 - 26 = ?", answer: 5 },
    { question: "7 * 9 = ?", answer: 5 },
    { question: "80 - 15 = ?", answer: 5 },
    { question: "45 - 58 = ?", answer: 5 },
    { question: "45 / 5 = ?", answer: 5 },
    { question: "10 * 50 = ?", answer: 5 },
];
let currentQuestionIndex = 0;


function startGame() {
    startBtn.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    questionContainer.classList.remove("hidden");
    questionText.innerText = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === questions[currentQuestionIndex].answer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
    answerInput.value = "";
}

function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultText.innerText = `Siz ${questions.length} savoldan ${correctAnswers} ta to'g'ri javob berdingiz.`;
}

function restartGame() {
    correctAnswers = 0;
    currentQuestionIndex = 0;
    resultContainer.classList.add("hidden");
    startBtn.classList.remove("hidden");
}


startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
playAgainBtn.addEventListener("click", restartGame);