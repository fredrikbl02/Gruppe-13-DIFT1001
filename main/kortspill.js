document.addEventListener("DOMContentLoaded", function () {
// Kjører funksjonen shuffleCards som plasserer kortene tilfeldig
shuffleCards();

// Henter ut alt med class "kort" og legger det i en konstant
const kort = document.getElementsByClassName("kort");

// Definerer variabler for timer
let seconds = 0;
let tideler = 0;
let timer = null;

// Denne funksjonen gjør at dersom sekunder overstiger 60 blir det omgjort til minutter
function formatTime(seconds, tideler) {

  // Finner ut av antall minutter ved å dele sekunder på 60 og runde ned
  let minutes = Math.floor(seconds / 60);

  // Beregner antall sekunder som er igjen etter at minuttene er trukket fra ved hjelp av modulus
  let remainingSeconds = seconds % 60;
  
  // Legger til 0 foran sekunder hvis det er under 10 sekunder
  let formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  // Gjør om minutter, sekunder og tideler til en string
  let timer = minutes + ":" + formattedSeconds + "." + tideler;
  return timer;
};

// Denne funksjonen starter timeren
function startTimer () {
const section = document.getElementById("section");
let functionCalled = false;
let time = document.getElementById("time");
time.innerText = formatTime(seconds, tideler);

section.addEventListener("click", function () {
  if (!functionCalled) {

    // Timer for tideler og sekunder
    timer = setInterval(() => {

      // Tideler legges til (inkrement)
      tideler++; 

      // Når tideler når 10 resettes tideler til 0 og sekunder inkremeres (øker med 1)
      if (tideler === 10) {
        tideler = 0;
        seconds++;
      }
      time.innerText = formatTime(seconds, tideler);

    // Legges til hvert tidel av et sekund
    }, 100); 

    // Dette gjør at funksjonen ikke kan kalles på nytt før timeren er stoppet
    functionCalled = true;
    }});
};

// Kjører funksjonen startTimer
startTimer();
      
// Definerer variabler for kort som skal matches
let firstCard = null;
let secondCard = null;
let count = 0; 
  
// Logikken som sjekker om kortene matcher
for (const kortside of kort) {
  kortside.addEventListener("click", function () {

    /* Hvis firstCard er null og kortet ikke er matched (har klassen matched), 
    så blir dette definert som firstCard og får klassen flipped (viser kortets forside)*/
    if (!firstCard && !kortside.classList.contains('matched')) {
      firstCard = kortside;
      kortside.classList.add('flipped');

      /* Hvis firstCard er definert, secondCard ikke er definert og kortet ikke er matched,
      så blir dette definert som secondCard og får klassen flipped*/
    } else if (firstCard !== kortside && !secondCard && !kortside.classList.contains('matched')) {
      secondCard = kortside;
      kortside.classList.add('flipped');

      /* Hvis firstCard og secondCard har samme dataset.framework (at de to kortene er like),
      firstCard og secondCard ikke er det samme kortet og kortet ikke allerede er matched så plusser den på en match, legger til klassen matched 
      og setter resetter firstCard og secondCard (setter de til "null") slik at de er klare for å defineres på nytt*/
      if (firstCard.dataset.framework === secondCard.dataset.framework && firstCard !== secondCard && !kortside.classList.contains('matched')) {

        // Hvis kortene er like så plusser den på en match
        if (count < 8) {
            count++;
        };

        // Hvis alle kortene er matched så stopper timeren og etter 800ms så kjøres addHighscore funksjonen som legger til highscore
        if (count === 8) {
          clearInterval(timer);
          setTimeout(() => {
            addHighscore();
        }, 800);
      };

        // Legger til klassen matched og setter firstCard og secondCard til null
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard = null;
        secondCard = null;
      } else {
        
        // Hvis kortene ikke matcher så fjernes klassen flipped og firstCard og secondCard settes til null etter 500ms
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
        }, 550);
      };
    };
  });
};
  
// Denne funksjonen plasserer kortene tilfeldig
function shuffleCards() {

  // Henter ut alle kortene
  var kort = document.querySelectorAll('.kort');

  // Looper gjennom alle kortene og gir dem en tilfeldig plassering
  kort.forEach(kort => {
      var randomPos = Math.floor(Math.random() * 16);
      kort.style.order = randomPos;
  });
}

// Definerer highscore array fra local storage
let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// Konverterer tid (Som er gjøres om til en string i format time funksjonen) til sekunder
function timeToSeconds(time) {
  let [minutes, seconds, milliseconds] = time.split(':').map(Number);
  return minutes * 60 + seconds + milliseconds / 100;
}

// Legger til highscore i arrayen og sorterer den etter tid
function addHighscore() {

// Henter funksjonen formatTime og spør brukeren om navn som blir lagt til i highscore arrayen
let tid = formatTime(seconds, tideler);
let navn = prompt("Gratulerer! Skriv inn navnet ditt her: ");

  // Legger til highscore i arrayen, sorterer den etter tid og tar vekk alle utenfor top 5
  highscores.push({name: navn, score: tid});
  highscores.sort((a, b) => timeToSeconds(a.score) - timeToSeconds(b.score));
  highscores = highscores.slice(0, 5);

  // Legger til highscore i local storage
  localStorage.setItem('highscores', JSON.stringify(highscores));
  
  // Kjører funksjonen displayHighscores
  displayHighscores();
};

// Viser highscores 
function displayHighscores() {

  // Henter ut highscore listen og tømmer den
  let highScoresList = document.getElementById("highscore");
  highScoresList.innerHTML = '';

  // Looper gjennom highscores arrayen og legger til highscores i listen
  highscores.forEach((highscore) => {
      let listItem = document.createElement("li");
      listItem.innerText = highscore.name + ": " + highscore.score;
      highScoresList.appendChild(listItem);
  });
};

// Loader highscores fra local storage når siden lastes inn
window.onload = function() {
  highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  displayHighscores();
};

// Når brukeren trykker på "New Game" knappen så kjøres denne funksjonen
document.getElementById("newGame").onclick = () => {     

  // Hvis brukeren trykker på "New Game" før spillet er ferdig så får de en alert
  if (count !== 8) {
    alert("Spill spillet ferdig først, eller last inn siden på nytt for reset");
    return;
  };

  // Tar vekk klassen flipped og matched fra alle kortene
  for (const kortside of kort) {
    kortside.classList.remove('flipped', 'matched');
  };

  // Kjører deretter funksjonen shuffleCards etter 600 ms (slik at kortene får tid til å snu seg først)
  setTimeout(() => {
    shuffleCards();
  }, 600);

  // Resetter tiden, telleren og starter timeren på nytt
  time.innerText = formatTime(0, 0);
  count = 0;
  seconds = 0;
  tideler = 0;
  startTimer();
};

});


    

    
    
      