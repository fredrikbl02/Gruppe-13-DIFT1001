document.addEventListener("DOMContentLoaded", function () {
  const bak = document.getElementsByClassName("bak");
  const kort = document.getElementsByClassName("kort");
  let firstCard = null;
  let secondCard = null;

  for (const bakside of bak) {
    bakside.addEventListener("click", function () {
      bakside.parentElement.classList.toggle("flipped");
    });
  }

  for (const kortside of kort) {
    kortside.addEventListener("click", function () {
      if (!firstCard) {
        firstCard = kortside;
        firstCard.classList.add("flipped");
      } else if (!secondCard) {
        secondCard = kortside;
        secondCard.classList.add("flipped");

        if (firstCard.dataset.framework === secondCard.dataset.framework) {
          console.log("Match!");
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = null;
          secondCard = null;
        } else {
          console.log("No match!");
          setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard = null;
            secondCard = null;
          }, 1000);
        }
      }
    });
  }

  function shuffleCards() {
    var kort = document.querySelectorAll('.kort');
    kort.forEach(kort => {
      var randomPos = Math.floor(Math.random() * 16);
      kort.style.order = randomPos;
    });
  }

  shuffleCards();

  let timerSeconds = 0;
  let timerInterval;

  function updateTimer() {
    timerSeconds++;
    document.getElementById("timer").textContent = "Time: " + timerSeconds + " seconds";
  }

  function startTimer() {
  
    timerSeconds = 0;
    document.getElementById("timer").textContent = "Time: 0 seconds";
    timerInterval = setInterval(updateTimer, 1000);
  }

  

  function resetTimer() {
    
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "Time: 0 seconds";
  }
  

  // Add an event listener for the "Reset" button or other game functionality
  document.getElementById("resetButton").addEventListener("click", resetTimer);
});