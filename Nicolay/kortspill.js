document.addEventListener("DOMContentLoaded", function () {
  
    const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel
    const foran = document.getElementsByClassName("foran"); //henter ut alt med class "foran";
    const kort = document.getElementsByClassName("kort"); //henter ut alt med class "kort";


    const element = document.getElementById("startTimer");

    element.addEventListener("click", startTimer);

    function startTimer() {

        let time = document.getElementById("timer");
        let seconds = 0;
        let tideler = 0;
        time.innerText = formatTime(seconds, tideler);
    
        //Timer for tideler og sekunder
        setInterval(() => {
          tideler++; //Tideler legges til (inkrement)
          if(tideler===10){ //Når tideler når 10 resettes tideler til 0 og sekunder inkremeres (øker med 1)
          tideler = 0;
          seconds++;
          }
          time.innerText = formatTime(seconds, tideler);
    
        }, 100); // legges til hvert tidel av et sekund
    
        //Denne funksjonen gjør at dersom sekunder overstiger 60 blir det omgjort til minutter
        function formatTime(seconds, tideler){
          let minutes = Math.floor(seconds/60); //Beregner antall minutter ved å ta heltall sekunder / 60, dvs -->
          //80 sekunder blir fortsatt 60=1 minutt fordi det er nærmeste hele tall
          let remainingSeconds = seconds % 60; //Beregner antall sekunder det er igjen ved hjelp av modulus
          //F.eks. 200%60 blir 20 fordi 60*3= 180, 20 i rest. Dette betyr 3 minutter og 20 sekunder
          let timer = minutes + " " + "minutt" + " " + remainingSeconds + " " + "sekunder" + " " + tideler + " " + "tideler"; //Skriver ut
          return timer; //Skriver ut
        }
      }
    
    
    
    for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
        bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
          bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
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
              console.log(firstCard);
              console.log(secondCard);
            
            }, 1000);
            
          };
    
          // Reset the firstCard and secondCard for the next turn
          setTimeout(() => {
            firstCard = null;
          secondCard = null;
          }, 1100);
          
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