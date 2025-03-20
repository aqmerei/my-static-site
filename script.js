function checkAnswer() {
    let userCode = document.getElementById("userInput").value;
    let resultText = document.getElementById("result");

    if (userCode.includes('console.log("Hello, World!");')) {
        resultText.innerHTML = "✅ Правильно! Молодец!";
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "❌ Ошибка! Попробуйте ещё раз.";
        resultText.style.color = "red";
    }
}

function checkQuiz() {
    let answers = document.getElementsByName("quiz");
    let quizResult = document.getElementById("quiz-result");
    
    for (let answer of answers) {
        if (answer.checked) {
            if (answer.value === "console.log") {
                quizResult.innerHTML = "✅ Верно! Отличная работа!";
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
