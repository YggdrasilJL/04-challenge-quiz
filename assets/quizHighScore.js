// Retrieve the scores from local storage
const scores = JSON.parse(localStorage.getItem('scores')) || [];

// sorts the scores from highest number to lowest
if (scores.length === 0) {
  // Handle the case when there are no scores
  const noScoresMessage = document.createElement('p');
  noScoresMessage.textContent = 'No scores available.';
  scoreList.appendChild(noScoresMessage);
} else {
  scores.sort((a, b) => b.score - a.score);

  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.initials}-${score.score}`;
    scoreList.appendChild(listItem);
  });
}
