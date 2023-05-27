let page = document.getElementById('page');
const startBtn = document.getElementById('startBtn');
const questContainer = document.getElementById('qContainer');
let timeDisplay = document.createElement('div');
    timeDisplay.id = 'timer';
let timeLeft = 100;
let currentQuestIndex = 0;
const questions = [{ // creating the questions and options dynamically to practice js
    question: "What are Thor's two sons named?",
    options: ['None of these', 'Magni and Modi', 'Gunther and Magni', 'Loki and Freyr'],
    answer: 1
},  {
    question: 'Who is Mimir?',
    options: ['The smartest man alive', 'The dumbest man alive', "Odin's son", "Odin's nephew"],
    answer: 0
}, {
    question: 'What does Kratos do to Mimir when he meets him?',
    options: ['Cut his hand off', 'Cut his head off', 'Fight him in battle', 'None of these'],
    answer: 1
}, {
    question: 'What is Ragnarök?',
    options: ['Just the destruction of midgard', 'The destruction and rebirth of the nine realms', 'A very hot summer', "Thor's hammer"],
    answer: 1
}, {
    question: 'Who is Freya?',
    options: ['Former Queen of the Valkyries', "Odin's ex wife", "Baldur's mother", 'all of the above'],
    answer: 3
}, {
    question: 'Who is "The Stranger"?',
    options: ['Thor', 'Baldur', 'Atreus', 'Odin'],
    answer: 1
}, {
    question: 'What does Kratos say before he kills Baldur?',
    options: ['"Mind your tone, boy."', '"The cycle ends here. We must be better than this"', '"He just screams"', '"My vegeance ends now."'],
    answer: 1
}, {
    question: 'What broke baldurs invulerbility spell?',
    options: ['A mistletoe arrowhead', "Kratos's axe", "Atreus's knife", 'Magical rock'],
    answer: 0
}, {
    question: "What is Atreus's alternative name?",
    options: ["He doesn't have one", 'Loki', 'Jomungandr', 'Both B and C'],
    answer: 1
}, {
    question: 'Why does Freya want to destroy Kratos at the end of the game?',
    options: ['He killed her pet', 'He killed her child', "She doesn't", "She want's his weapons"],
    answer: 1
}]

startBtn.addEventListener('click', function() {
    page.style.display = 'none';
    startQuiz();
    displayQuestions();
});

function displayQuestions() {
    if (currentQuestIndex >= questions.length) {
      endQuiz();
      return;
    }
  
    let questContain = document.createElement('div');
    let questText = document.createElement('h3');
  
    questText.textContent = questions[currentQuestIndex].question;
    questContain.appendChild(questText);
  
    let options = questions[currentQuestIndex].options;
    for (let i = 0; i < options.length; i++) {
      let optBtn = document.createElement('button');
      optBtn.textContent = options[i];
      qContainer.appendChild(optBtn);
      optBtn.addEventListener('click', function() {
        if (i !== questions[currentQuestIndex].answer) {
            timeLeft -= 15;
        }
        currentQuestIndex++;
        qContainer.innerHTML = '';
        displayQuestions()
    })
    }

    questContainer.appendChild(questContain);
    questContainer.appendChild(timeDisplay);
  }

function startQuiz() {
    timeDisplay.textContent = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval()
            endQuiz()
        }
        timeDisplay.textContent = timeLeft;
    }, 1000)
}

function endQuiz() {
    location.assign('quizHighScore.html')
}