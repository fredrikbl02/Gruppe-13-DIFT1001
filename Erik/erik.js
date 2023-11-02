document.addEventListener("DOMContentLoaded", function () {
  
  const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel
  const foran = document.getElementsByClassName("foran"); //henter ut alt med class "foran";
  const kort = document.getElementsByClassName("kort"); //henter ut alt med class "kort";


  let seconds = 0;
  let tideler = 0;
  let timer = null;
   //Timer

    // Denne funksjonen gjør at dersom sekunder overstiger 60 blir det omgjort til minutter
    function formatTime(seconds, tideler) {
      let minutes = Math.floor(seconds / 60); // Beregner antall minutter ved å ta heltall sekunder / 60
      let remainingSeconds = seconds % 60; // Beregner antall sekunder det er igjen ved hjelp av modulus
      let formattedSeconds = remainingSeconds.toString().padStart(2, '0');
      let timer =  minutes + ":" + formattedSeconds + "." + tideler;
      return timer;
    }

   function startTimer () {
    const section = document.getElementById("section");
    let functionCalled = false; // Flag to track if the function has been called
    let time = document.getElementById("time");
    time.innerText = formatTime(seconds, tideler);

    section.addEventListener("click", function () {
      if (!functionCalled) {

        // Timer for tideler og sekunder
        timer = setInterval(() => {
          tideler++; // Tideler legges til (inkrement)
          if (tideler === 10) { // Når tideler når 10 resettes tideler til 0 og sekunder inkremeres (øker med 1)
            tideler = 0;
            seconds++;
          }
          time.innerText = formatTime(seconds, tideler);
        }, 100); // legges til hvert tidel av et sekund

        console.log("Function has been called");
        functionCalled = true;

        // Set the flag to true to prevent the function from being called again
        functionCalled = true;
        }});


  
  };
 
  
  
  function bakEventListener() {
  for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
      bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
        bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      });
    };
  };

  bakEventListener();
  
  // dette er funksjon for å matche kort med hverandre
  
  let firstCard = null;
  let secondCard = null;
  let isFlipping = false; // To prevent clicking more cards while comparison is in progress
  let count = 0; 
  
  for (const kortside of kort) {
    kortside.addEventListener("click", function () {
      if (!isFlipping && !firstCard && !kortside.classList.contains('matched')) {
        // If no cards are flipping and firstCard is null, this is the first card being clicked
        firstCard = kortside;
        kortside.classList.add('flipped'); // Add a class to show the card's face
      } else if (!isFlipping && firstCard !== kortside && !secondCard) {
        // If no cards are flipping and firstCard is assigned, but secondCard is still null, this is the second card being clicked
        secondCard = kortside;
        kortside.classList.add('flipped'); // Add a class to show the card's face
  
        // Now, you can compare their data-framework values
        if (firstCard.dataset.framework === secondCard.dataset.framework && firstCard !== secondCard && !kortside.classList.contains('matched')) {
          console.log("Match!");
          //teller opp antall matcher
      
          if (count < 8) {
              count++;
          };

          if (count === 8) {
            clearInterval(timer);
            setTimeout(() => {
            addHighscore();
          }, 800);
        };

          // If it's a match, remove the click event listener to lock the matched cards
          firstCard.classList.add('matched');
          secondCard.classList.add('matched');
          firstCard = null;
          secondCard = null;
        } else {
          console.log("No match!");
          isFlipping = true;
          // If it's not a match, flip the cards back after a delay
          setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
            isFlipping = false;
          }, 500);
        }
      }
    });
  }
  
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



  startTimer();

//Definerer highscore array fra local storage
let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

//Konverterer tid (Som er gjøres om til en string i format time funksjonen) til sekunder
function timeToSeconds(time) {
let [minutes, seconds, milliseconds] = time.split(':').map(Number);
return minutes * 60 + seconds + milliseconds / 100;
}

//Legger til highscore i arrayen og sorterer den etter tid

function addHighscore() {
console.log("suksess");
let tid = formatTime(seconds, tideler);
let navn = prompt("Gratulerer! Skriv inn navnet ditt her: ");

    highscores.push({name: navn, score: tid});
    highscores.sort((a, b) => timeToSeconds(a.score) - timeToSeconds(b.score));
    highscores = highscores.slice(0, 5);

    localStorage.setItem('highscores', JSON.stringify(highscores));
    
    displayHighscores();
}

//Viser highscores 

function displayHighscores() {
    let highScoresList = document.getElementById("highscore");
    highScoresList.innerHTML = '';

    highscores.forEach((highscore) => {
        let listItem = document.createElement("li");
        listItem.type = "1";
        listItem.innerText = highscore.name + ": " + highscore.score;
        highScoresList.appendChild(listItem);

        
    });
}

//Loader highscores fra local storage når siden lastes inn

window.onload = function() {
  highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  displayHighscores();
};

//Ny runde

document.getElementById("newGame").onclick = () => {      
  for (const kortside of kort) {
    kortside.classList.remove('flipped', 'matched');
  };
  setTimeout(() => {
    shuffleCards();
  }, 600);
  time.innerText = formatTime(0, 0);
  count = 0;
  
  if (timer !== null) {
    clearInterval(timer);
}
  seconds = 0;
  tideler = 0;
  startTimer();
};

});


  

  
  
    