// Web Dev I Lab Assignment 4: Prompt Quizzer

const quizQuestions = [
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What programming language is often stylized as 'JS'?",
        answer: "JavaScript"
    },
    {
        question: "How many continents are there on Earth?",
        answer: "7"
    },
    {
        question: "Which metal is liquid at room temperature?",
        answer: "Mercury"
    },
    {
        question: "What is the result of 100 divided by 2?",
        answer: "50"
    }
];

// 2. Function to Run the Quiz 
function runQuiz() {
    let score = 0;

    
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuiz = quizQuestions[i];


        const userAnswer = prompt(currentQuiz.question);

        
        if (userAnswer === null) {
             alert(`Quiz cancelled early. Final score: ${score} out of ${i}.`);
             return;
        }


        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        const normalizedCorrectAnswer = currentQuiz.answer.toLowerCase().trim();

        // Check Answer
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${currentQuiz.answer}`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();