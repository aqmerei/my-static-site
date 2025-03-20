// Проверяем, загружается ли script.js
console.log("Файл script.js загружен!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM загружен!");
});

// Уроки
const lessons = [
    { title: "Урок 1: Основы JavaScript", text: "Напишите код, который выводит 'Hello, World!' в консоль." },
    { title: "Урок 2: Переменные", text: "Создайте переменную и присвойте ей значение 'JavaScript'." },
    { title: "Урок 3: Функции", text: "Создайте функцию, которая возвращает сумму двух чисел." }
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

// Проверка кода пользователя
function checkAnswer() {
    let userCode = document.getElementById("userInput").value.trim();
    let result = document.getElementById("result");

    if (currentLesson === 0 && userCode === 'console.log("Hello, World!");') {
        result.innerText = "✅ Правильно!";
        result.style.color = "green";
    } else if (currentLesson === 1 && userCode.includes("let")) {
        result.innerText = "✅ Правильно! Вы объявили переменную.";
        result.style.color = "green";
    } else if (currentLesson === 2 && userCode.includes("function")) {
        result.innerText = "✅ Отлично! Вы создали функцию.";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Попробуйте ещё раз!";
        result.style.color = "red";
    }
}

// Тест
const quizData = [
    {
        question: "Какой оператор используется для вывода в консоль?",
        options: ["alert", "console.log", "print"],
        correctAnswer: "console.log"
    },
    {
        question: "Как объявить переменную в JavaScript?",
        options: ["var", "let", "const"],
        correctAnswer: "let"
    },
    {
        question: "Какой метод используется для объединения массивов?",
        options: ["concat()", "push()", "join()"],
        correctAnswer: "concat()"
    },
    {
        question: "Как создать функцию?",
        options: ["function myFunc() {}", "let myFunc = {}", "def myFunc() {}"],
        correctAnswer: "function myFunc() {}"
    }
];

let currentQuiz = 0;

function loadQuiz() {
    let quiz = quizData[currentQuiz];
    document.getElementById("quiz-question").innerText = quiz.question;

    let quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h3>Тест:</h3><p id="quiz-question">${quiz.question}</p>`;

    quiz.options.forEach(option => {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = option;
        quizContainer.appendChild(radio);

        let label = document.createElement("label");
        label.innerText = " " + option;
        quizContainer.appendChild(label);
        quizContainer.appendChild(document.createElement("br"));
    });

    let checkButton = document.createElement("button");
    checkButton.innerText = "Проверить тест";
    checkButton.onclick = checkQuiz;
    quizContainer.appendChild(checkButton);

    let resultParagraph = document.createElement("p");
    resultParagraph.id = "quiz-result";
    quizContainer.appendChild(resultParagraph);
}

function prevQuiz() {
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
}

function nextQuiz() {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
    }
}

function checkQuiz() {
    let selected = document.querySelector('input[name="quiz"]:checked');
    let result = document.getElementById("quiz-result");

    if (!selected) {
        result.innerText = "❌ Выберите вариант ответа!";
        result.style.color = "red";
        return;
    }

    if (selected.value === quizData[currentQuiz].correctAnswer) {
        result.innerText = "✅ Верно!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Неверно!";
        result.style.color = "red";
    }
}

// Загружаем первый урок и тест при старте
loadLesson();
loadQuiz();
