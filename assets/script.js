let page = document.getElementById('page');
const startBtn = document.getElementById('startBtn');
const qContainer = document.getElementById('qContainer');
let timeLeft = 150;
const questions = [{ // creating the questions and options dynamically to practice my js skills
    question: "What are Thor's two sons named?",
    options: ['Magni and Modi', 'Gunther and Magni', 'Loki and Freyr', 'None of these']
},  {
    question: 'Who is Mimir?',
    options: ['The smartest man alive', 'The dumbest man alive', "Odin's son", "Odin's nephew"]
}, {
    question: 'What does Kratos do to Mimir when he meets him?',
    options: ['Cut his hand off', 'Cut his head off', 'Fight him in battle', 'None of these'] 
}, {
    question: 'What is Ragnarök?',
    options: ['Just the destruction of midgard', 'The destruction and rebirth of the nine realms', 'A very hot summer', "Thor's hammer"]
}, {
    question: 'Who is Freya?',
    options: ['Former Queen of the Valkyries', "Odin's ex wife", "Baldur's mother", 'all of the above']
}, {
    question: 'Who is "The Stranger"?',
    options: ['Thor', 'Baldur', 'Atreus', 'Odin']
}, {
    question: 'What does Kratos say before he kills Baldur?',
    options: ['"Mind your tone, boy."', '"The cycle ends here. We must be better than this"', '"He just screams"', '"My vegeance ends now."']
}, {
    question: 'What broke baldurs invulerbility spell?',
    options: ['A mistletoe arrowhead', "Kratos's axe", "Atreus's knife", 'Magical rock']
}, {
    question: "What is Atreus's alternative name?",
    options: ["He doesn't have one", 'Loki', 'Jomungandr', 'Both B and C']
}, {
    question: 'Why does Freya want to destroy Kratos at the end of the game?',
    options: ['He killed her pet', 'He killed her child', "She doesn't", "She want's his weapons"]
}]

startBtn.addEventListener('click', function(event) {
    page.style.display = 'none';
    displayQuestions()
    startQuiz()
});

function displayQuestions() {

for (i = 0; i < questions.length; i++) {
    let questContain = document.createElement('div');
    let questionText = document.createElement('h3');
    let optContain = document.createElement('div');

    questionText.textContent = questions[i].question;
}
}

function startQuiz() {
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval()
            endQuiz()
        }
    }, 1000)
}

function endQuiz() {
    location.assign('quizHighScore.html')
}




