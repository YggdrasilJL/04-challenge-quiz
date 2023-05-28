document.addEventListener('DOMContentLoaded', function() {
    const score = (localStorage.getItem('score'));
    const initials = JSON.stringify(localStorage.getItem('initials').toUpperCase());
  
    const scoreList = document.getElementById('scoreList');
    const scoreItem = document.createElement('li');
    scoreItem.textContent = initials + ': ' + score;
    scoreList.appendChild(scoreItem);
  });