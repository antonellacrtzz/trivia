const questions = [
    {
        question: "¿A qué sector viene el nuevo integrante?",
        answers: ["Marketing", "Finanzas", "RRHH", "Producto"],
        correct: "Finanzas"
    },
    {
        question: "¿De qué país proviene?",
        answers: ["Argentina", "Panamá", "Uruguay", "Colombia"],
        correct: "Uruguay"
    },
    {
        question: "¿Qué tarea realizará?",
        answers: ["Análisis de datos", "Gestión de proveedores", "Atención al cliente", "Medios de Pago"],
        correct: "Medios de Pago"
    }
];

let currentQuestionIndex = 0;
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const answerElement = document.createElement("div");
        answerElement.textContent = answer;
        answerElement.classList.add("answer");
        answerElement.addEventListener("click", () => checkAnswer(answer, answerElement));

        answersContainer.appendChild(answerElement);
    });
}

function checkAnswer(selectedAnswer, answerElement) {
    const currentQuestion = questions[currentQuestionIndex];

    // Deshabilitar todas las respuestas después de hacer clic
    const answers = answersContainer.querySelectorAll(".answer");
    answers.forEach(ans => ans.style.pointerEvents = "none");

    if (selectedAnswer === currentQuestion.correct) {
        alert("¡Correcto!");
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(showQuestion, 1000); // Espera antes de mostrar la siguiente pregunta
        } else {
            window.location.href = "espera.html"; // Redirige al final del juego
        }
    } else {
        alert("Incorrecto, intenta de nuevo.");
        setTimeout(() => {
            // Habilitar las respuestas nuevamente
            answers.forEach(ans => ans.style.pointerEvents = "auto");
        }, 1000); // Espera un segundo antes de permitir otro intento
    }
}

showQuestion();

