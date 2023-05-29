// Retrieve the scores from local storage
const scores = JSON.parse(localStorage.getItem('scores')) || [];

// sorts the scores from highest number to lowest
scores.sort((a, b) => b.score - a.score)

// gets the score list element
const scoreList = document.getElementById('scoreList');

// this loops through the scores and create list items to display them
scores.forEach((score) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${score.initials}-${score.score}`;
  scoreList.appendChild(listItem);
});
