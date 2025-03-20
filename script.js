document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript загружен!");

    // Привязка кнопок
    document.getElementById("checkButton").addEventListener("click", checkAnswer);
    document.getElementById("checkQuizButton").addEventListener("click", checkQuiz);
    document.getElementById("prevLessonButton").addEventListener("click", prevLesson);
    document.getElementById("nextLessonButton").addEventListener("click", nextLesson);

    loadLesson();
    loadQuiz();
});

const lessons = [
    { title: "Урок 1: Основы JavaScript", text: "Напишите код, который выводит 'Hello, World!' в консоль." },
    { title: "Урок 2: Переменные", text: "Создайте переменную и присвойте ей значение 'JavaScript'." }
];

let currentLesson = 0;

function loadLesson() {
    document.getElementById("lesson-title").innerText = lessons[currentLesson].title;
    document.getElementById("lesson-text").innerText = lessons[currentLesson].text;
}

function prevLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        loadLesson();
    }
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        loadLesson();
    }
}

function checkAnswer() {
    let userCode = document.getElementById("userInput").value.trim();
    let result = document.getElementById("result");

    if (currentLesson === 0 && userCode === 'console.log("Hello, World!");') {
        result.innerText = "✅ Правильно!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Попробуйте ещё раз!";
        result.style.color = "red";
    }
}

const quizData = [
    {
        question: "Какой оператор используется для вывода в консоль?",
        options: ["alert", "console.log", "print"],
        correctAnswer: "console.log"
    }
];

function loadQuiz() {
    let quiz = quizData[0];
    document.getElementById("quiz-question").innerText = quiz.question;

    let quizOptions = document.getElementById("quiz-options");
    quizOptions.innerHTML = "";
    quiz.options.forEach(option => {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = option;
        quizOptions.appendChild(radio);

        let label = document.createElement("label");
        label.innerText = " " + option;
        quizOptions.appendChild(label);
        quizOptions.appendChild(document.createElement("br"));
    });
}

function checkQuiz() {
    let selected = document.querySelector('input[name="quiz"]:checked');
    let result = document.getElementById("quiz-result");

    if (!selected) {
        result.innerText = "❌ Выберите вариант ответа!";
        result.style.color = "red";
        return;
    }

    if (selected.value === quizData[0].correctAnswer) {
        result.innerText = "✅ Верно!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Неверно!";
        result.style.color = "red";
    }
}
