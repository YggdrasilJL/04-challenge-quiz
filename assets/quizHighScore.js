// take scores from local storage
const scores = JSON.parse(localStorage.getItem('scores')) || [];
let blade = document.getElementById('bladeImg')
// Sort the scores from highest number to lowest
scores.sort((a, b) => b.score - a.score);

if (scores.length > 5) {
  scores.splice(5);
}

// Get the score list element
const scoreList = document.getElementById('scoreList');

scoreList.innerHTML = '';
blade.classList.add('smaller')

// This loops through the scores and creates list items to display them
scores.forEach((score) => {
  const listItem = document.createElement('li');
  const initialsText = document.createTextNode(score.initials.toUpperCase());
  const scoreText = document.createTextNode(score.score);
  
  const imgTag = `<img src="${blade.src}" alt="Blade of Chaos" class="smaller">` // Create the image tag
  
  listItem.innerHTML = `"${initialsText.textContent}" ${imgTag} <span id="scoreNum">${scoreText.textContent}</span>`
  scoreList.appendChild(listItem);
});