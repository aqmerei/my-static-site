let lessons = [
    {
        title: "Урок 1: Основы JavaScript",
        text: "Напишите код, который выводит \"Hello, World!\" в консоль.",
        correctCode: 'console.log("Hello, World!");'
    },
    {
        title: "Урок 2: Переменные",
        text: "Объявите переменную с именем message и присвойте ей значение \"Привет, мир!\".",
        correctCode: 'let message = "Привет, мир!";'
    }
];

let quizData = [
    {
        question: "Какой оператор используется для вывода в консоль?",
        options: ["alert", "console.log", "print"],
        correct: "console.log"
    },
    {
        question: "Как объявить переменную в JavaScript?",
        options: ["var name;", "variable name;", "let name;"],
        correct: "let name;"
    }
];

let currentLesson = 0;
let currentQuiz = 0;

function loadLesson() {
    let lesson = lessons[currentLesson];
    document.getElementById("lesson-title").innerText = lesson.title;
    document.getElementById("lesson-text").innerText = lesson.text;
}

function checkAnswer() {
    let userCode = document.getElementById("userInput").value;
    let resultText = document.getElementById("result");

    if (userCode.trim() === lessons[currentLesson].correctCode) {
        resultText.innerHTML = "✅ Правильно!";
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "❌ Ошибка! Попробуйте ещё раз.";
        resultText.style.color = "red";
    }
}

function prevLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        loadLesson();
        document.getElementById("result").innerText = "";
    }
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        loadLesson();
        document.getElementById("result").innerText = "";
    }
}

function loadQuiz() {
    let quiz = quizData[currentQuiz];
    document.getElementById("quiz-question").innerText = quiz.question;
    
    let options = document.getElementsByName("quiz");
    for (let i = 0; i < options.length; i++) {
        options[i].value = quiz.options[i];
        options[i].nextSibling.nodeValue = " " + quiz.options[i];
    }
}

function checkQuiz() {
    let answers = document.getElementsByName("quiz");
    let quizResult = document.getElementById("quiz-result");
    
    for (let answer of answers) {
        if (answer.checked) {
            if (answer.value === quizData[currentQuiz].correct) {
                quizResult.innerHTML = "✅ Верно!";
                quizResult.style.color = "green";
            } else {
                quizResult.innerHTML = "❌ Неверно. Попробуйте снова.";
                quizResult.style.color = "red";
            }
            return;
        }
    }
    quizResult.innerHTML = "⚠️ Выберите вариант ответа!";
    quizResult.style.color = "orange";
}

function nextQuiz() {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
        document.getElementById("quiz-result").innerText = "";
    }
}

function prevQuiz() {
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
        document.getElementById("quiz-result").innerText = "";
    }
}

window.onload = function() {
    loadLesson();
    loadQuiz();
};
