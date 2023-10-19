document.addEventListener("DOMContentLoaded", function () {
  
const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel
const foran = document.getElementsByClassName("foran"); //henter ut alt med class "foran";
const kort = document.getElementsByClassName("kort"); //henter ut alt med class "kort";



for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
    bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
      bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      // antallKlikk++;
       //if (test) {  //i denne funksjonen prøver jeg å få kortene til å flippe tilbake til baksiden sin når baksidene har blitt trykket på partall antall ganger
        
      // }
    });
  };

// dette er funksjon for å matche kort med hverandre

let firstCard = null;
let secondCard = null;

for (const kortside of kort) {
  kortside.addEventListener("click", function () {
    if (!firstCard) {
      // If firstCard is null, this is the first card being clicked
      firstCard = kortside.dataset.framework;
    } else if (!secondCard) {
      // If firstCard is assigned, but secondCard is still null, this is the second card being clicked
      secondCard = kortside.dataset.framework;

      // Now, you can compare their data-framework values
      if (firstCard === secondCard) {
        console.log("Match!");
      } else {
        console.log("No match!");
        setTimeout(() => {
        firstCard.style.opacity = "1";
        secondCard.style.opacity = "1";
        
        }, 1000);
        
      };

      // Reset the firstCard and secondCard for the next turn
      firstCard = null;
      secondCard = null;
    };
  });
};



// denne funksjonen viser verdien til kortene

for (const kortside of kort) {
  kortside.addEventListener("click", function () {
    const clickedCardValue = kortside.dataset.framework;
    console.log("Clicked card value forside: " + clickedCardValue);
    
  });
}



shuffleCards();

//Denne funksjonen plasserer kortene tilfeldig
function shuffleCards() {
  var kort = document.querySelectorAll('.kort');
  kort.forEach(kort => {
      var randomPos = Math.floor(Math.random() * 16);
      kort.style.order = randomPos;
  });
}




});

let timerSeconds = 0;
let timerInterval;

function updateTimer() {
  timerSeconds ++;
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

// The StartButton function to start the game and timer
function StartButton() {
  startTimer(); // Start the timer when the button is pressed
}

// Add an event listener for the "Reset" button or other game functionality
document.getElementById("resetButton").addEventListener("click", resetTimer);

