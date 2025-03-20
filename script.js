const lessons = [
    { text: "Урок 1: Что такое переменные? \n Переменные хранят данные. Например: let name = 'Иван';", answer: "let name = 'Иван';" },
    { text: "Урок 2: Условные операторы \n if (условие) { код };", answer: "if (true) { console.log('Привет'); }" },
    { text: "Урок 3: Циклы \n Цикл for позволяет повторять код.", answer: "for (let i = 0; i < 5; i++) { console.log(i); }" }
];
let currentLesson = localStorage.getItem("currentLesson") ? parseInt(localStorage.getItem("currentLesson")) : 0;

function updateLesson() {
    document.getElementById("lesson-content").innerText = lessons[currentLesson].text;
    document.getElementById("progressBar").style.width = ((currentLesson + 1) / lessons.length) * 100 + "%";
    localStorage.setItem("currentLesson", currentLesson);
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        updateLesson();
    }
}

function prevLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        updateLesson();
    }
}

function checkAnswer() {
    const userCode = document.getElementById("userInput").value.trim();
    if (userCode === lessons[currentLesson].answer) {
        document.getElementById("result").innerText = "✅ Правильно!";
    } else {
        document.getElementById("result").innerText = "❌ Попробуйте еще раз.";
    }
}

updateLesson();
