function checkAnswer() {
    let userCode = document.getElementById("userInput").value;
    let resultText = document.getElementById("result");

    try {
        if (userCode.includes('console.log("Hello, World!");')) {
            resultText.innerHTML = "Правильно! 🎉";
            resultText.style.color = "green";
        } else {
            resultText.innerHTML = "Ошибка! Попробуйте ещё раз.";
            resultText.style.color = "red";
        }
    } catch (error) {
        resultText.innerHTML = "Ошибка в коде!";
        resultText.style.color = "red";
    }
}

function checkQuiz() {
    let answers = document.getElementsByName("quiz");
    let quizResult = document.getElementById("quiz-result");

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            if (answers[i].value === "console.log") {
                quizResult.innerHTML = "Верно! ✅";
                quizResult.style.color = "green";
            } else {
                quizResult.innerHTML = "Неверно. Попробуйте ещё раз.";
                quizResult.style.color = "red";
            }
            return;
        }
    }
    quizResult.innerHTML = "Выберите ответ!";
    quizResult.style.color = "orange";
}
