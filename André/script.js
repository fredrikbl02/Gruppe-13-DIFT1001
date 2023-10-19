document.addEventListener("DOMContentLoaded", function () {
  
  

function StartButton () {
    
}

const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel

let antallKlikk = 0;

for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
    bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
      bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      antallKlikk++;
      if (antallKlikk % 2 == 0) {  //i denne funksjonen prøver jeg å få kortene til å flippe tilbake til baksiden sin når baksidene har blitt trykket på partall antall ganger
        let test = document.querySelectorAll('.bakside');
        test.forEach(element => {
          element.style.opacity = '1'; 
        });
              console.log(antallKlikk);
      }
    });
  };

// dette er funksjon for å matche kort med hverandre

  let firstCard = null;
  let secondCard = null;
  
  for (const bakside of bak) {
    bakside.addEventListener("click", function () {
      if (!firstCard) {
        // If firstCard is null, this is the first card being clicked
        firstCard = bakside;
      } else if (!secondCard) {
        // If firstCard is assigned, but secondCard is still null, this is the second card being clicked
        secondCard = bakside;
  
        // Now, you can compare their data-framework values
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
          console.log("Match!");
        } else {
          console.log("No match!");
        }
  
        // Reset the firstCard and secondCard for the next turn
        firstCard = null;
        secondCard = null;
      }
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
