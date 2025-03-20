document.addEventListener("DOMContentLoaded", function () {
    console.log("Файл script.js загружен!");

    // Привязка кнопок
    document.getElementById("checkButton").addEventListener("click", checkAnswer);
    document.getElementById("checkQuizButton").addEventListener("click", checkQuiz);
    document.getElementById("prevLessonButton").addEventListener("click", prevLesson);
    document.getElementById("nextLessonButton").addEventListener("click", nextLesson);
    document.getElementById("prevQuizButton").addEventListener("click", prevQuiz);
    document.getElementById("nextQuizButton").addEventListener("click", nextQuiz);

    loadLesson();
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

// Данные тестов
const quizData = [
    {
        question: "Какой оператор используется для вывода в консоль?",
        options: ["alert", "console.log", "print"],
        correctAnswer: "console.log"
    }
];

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

function prevQuiz() {
    console.log("Назад (Тест)");
}

function nextQuiz() {
    console.log("Вперёд (Тест)");
}
