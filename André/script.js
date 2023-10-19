document.addEventListener("DOMContentLoaded", function () {
  
  

function StartButton () {
    
}

const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel
const foran = document.getElementsByClassName("foran"); //henter ut alt med class "foran";
const kort = document.getElementsByClassName("kort"); //henter ut alt med class "kort";

let antallKlikk = 0;

for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
    bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
      bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      // antallKlikk++;
       //if (test) {  //i denne funksjonen prøver jeg å få kortene til å flippe tilbake til baksiden sin når baksidene har blitt trykket på partall antall ganger
        
      // }
    });
  };

// dette er funksjon for å matche kort med hverandre
  

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
