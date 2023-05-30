let page = document.getElementById('page')
const startBtn = document.getElementById('startBtn')
const questContainer = document.getElementById('qContainer')
let timeDisplay = document.createElement('div')
    timeDisplay.id = 'timer'
let timeLeft = 100
let currentIndex = 0
let initForm = document.getElementById('initialsForm')
let initLabel = document.getElementById('initialsLabel')
let initInput = document.getElementById('initials')
let initBtn = document.getElementById('submit')
let scoreList = document.getElementById('scoreList')
let userInit = ''
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
    options: ['"Mind your tone, boy."', '"The cycle ends here. We must be better than this"', 'Kratos just screams at him', '"My vegeance ends now."'],
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

if (startBtn) {
startBtn.addEventListener('click', function(event) {
    event.preventDefault()
    page.style.display = 'none'
    startQuiz()
    displayQuestions()
})
}
function displayQuestions() {
    if (currentIndex >= questions.length) {
      endQuiz()
      return
    }
  
    let questContain = document.createElement('div')
    let questText = document.createElement('h3')
  
    questText.textContent = questions[currentIndex].question
    questContain.appendChild(questText)
  
    let options = questions[currentIndex].options
    for (let i = 0; i < options.length; i++) {
      let optBtn = document.createElement('button')
      optBtn.textContent = options[i]
      questContainer.appendChild(optBtn)
      optBtn.addEventListener('click', function() {
        if (i !== questions[currentIndex].answer) {
            timeLeft -= 15
        }
        currentIndex++
        questContainer.innerHTML = ''
        displayQuestions()
    })
    }

    questContainer.appendChild(questContain)
    questContainer.appendChild(timeDisplay)
  }

function startQuiz() {
    timeDisplay.textContent = timeLeft
    timer = setInterval(function() {
        timeLeft--
        if (timeLeft <= 0) {
            clearInterval(timer)
            endQuiz()
        }
        timeDisplay.textContent = timeLeft
    }, 1000)
}

function endQuiz() {
    questContainer.style.display = 'none'
    if (timeLeft < 0) {
        timeLeft = 0
    }

    initForm.style.display = 'flex'
    initForm.style.flexDirection = 'column'
    initForm.style.alignItems = 'center'
    initForm.style.fontSize = '40px'
    initForm.style.marginTop = '50px'
    initLabel.classList.add('label')
    initInput.classList.add('input')
    initBtn.classList.add('button')

}


initBtn.addEventListener('click', function(event) {
    event.preventDefault()
    
    if (initInput.value === '') {
        alert('Please enter your initials.')
        return
    } else if (!isNaN(initInput.value)) {
        alert('Your initials cannot be numerical!')
        return
    }
    
    let scores = JSON.parse(localStorage.getItem('scores')) || []
     scores.push({
        initials: initInput.value,
        score: timeLeft
     })

     localStorage.setItem('scores', JSON.stringify(scores))

     location.assign('quizHighScore.html')
  })