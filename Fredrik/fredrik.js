document.addEventListener("DOMContentLoaded", function () {
  
  

  function StartButton () {
      
  }
  
  const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel
  
  for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
      bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
        bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      });
    };
  
  let antallKlikk = 0;
  
  //i denne funksjonen prøver jeg å få kortene til å flippe tilbake til baksiden sin når baksidene har blitt trykket på partall antall ganger
  
  
  for (const flipp of bak) {
      flipp.addEventListener("click", function() {
          antallKlikk++;
          if (antallKlikk % 2 == 0) {
              blablablabla
              
          }
      });
  };
  
  });
  
  
 
  let matchesFound = 0;
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
  
  function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "Time: " + timerSeconds + " seconds";
   
  }

  
  // Your matching logic goes here
  for (let i = 1; i <= 100; i++) { // Replace 100 with your actual limit
    // Your matching logic here
    if (i % 7 === 0) { // Example matching condition (replace with your actual condition)
      matchesFound++;
      console.log("Match found!");
  
      if (matchesFound === 8) {
        console.log("8 matches found. Stopping the timer.");
        stopTimer(); // Stop the timer when 8 matches are found
        break; // Exit the loop
      }
    }
  }
  
  console.log("Loop finished.");