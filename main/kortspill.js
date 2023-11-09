document.addEventListener("DOMContentLoaded", function () {
  const kort = document.getElementsByClassName("kort"); //henter ut alt med class "kort";

  let seconds = 0;
  let tideler = 0;
  let timer = null;

      // Denne funksjonen gjør at dersom sekunder overstiger 60 blir det omgjort til minutter
      function formatTime(seconds, tideler) {
        let minutes = Math.floor(seconds / 60); // Beregner antall minutter ved å ta heltall sekunder / 60
        let remainingSeconds = seconds % 60; // Beregner antall sekunder det er igjen ved hjelp av modulus
        let formattedSeconds = remainingSeconds.toString().padStart(2, '0');
        let timer = minutes + ":" + formattedSeconds + ":" + tideler;
        return timer;
      };

     function startTimer () {
      const section = document.getElementById("section");
      let functionCalled = false;
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
  
          functionCalled = true;
  
          // Set the flag to true to prevent the function from being called again
          functionCalled = true;
          }});
    };
       
    let firstCard = null;
    let secondCard = null;
    let count = 0; 
    
    // dette er funksjon for å matche kort med hverandre
    for (const kortside of kort) {
      kortside.addEventListener("click", function () {
        if (!firstCard && !kortside.classList.contains('matched')) {
          // If no cards are flipping and firstCard is null, this is the first card being clicked
          firstCard = kortside;
          kortside.classList.add('flipped'); // Add a class to show the card's face
        } else if (firstCard !== kortside && !secondCard) {
          // If no cards are flipping and firstCard is assigned, but secondCard is still null, this is the second card being clicked
          secondCard = kortside;
          kortside.classList.add('flipped'); // Add a class to show the card's face
    
          // Now, you can compare their data-framework values
          if (firstCard.dataset.framework === secondCard.dataset.framework && firstCard !== secondCard && !kortside.classList.contains('matched')) {

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
            
            // If it's not a match, flip the cards back after a delay
            setTimeout(() => {
              firstCard.classList.remove('flipped');
              secondCard.classList.remove('flipped');
              firstCard = null;
              secondCard = null;
            }, 500);
          };
        };
      });
    };
    
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
  let tid = formatTime(seconds, tideler);
  let navn = prompt("Gratulerer! Skriv inn navnet ditt her: ");

      highscores.push({name: navn, score: tid});
      highscores.sort((a, b) => timeToSeconds(a.score) - timeToSeconds(b.score));
      highscores = highscores.slice(0, 5);

      localStorage.setItem('highscores', JSON.stringify(highscores));
      
      displayHighscores();
  };

//Viser highscores 
function displayHighscores() {
      let highScoresList = document.getElementById("highscore");
      highScoresList.innerHTML = '';

      highscores.forEach((highscore) => {
          let listItem = document.createElement("li");
          listItem.innerText = highscore.name + ": " + highscore.score;
          highScoresList.appendChild(listItem);
      });
  };

  //Loader highscores fra local storage når siden lastes inn
  window.onload = function() {
    highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    displayHighscores();
  };

  //Ny runde
  document.getElementById("newGame").onclick = () => {     
    if (count !== 8) {
      return
    };

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
  };
    seconds = 0;
    tideler = 0;
    startTimer();
 };
});


    

    
    
      