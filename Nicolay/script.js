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

//Denne funksjonen plasserer kortene tilfeldig
function shuffleCards() {
  var kort = document.querySelectorAll('.kort');
  kort.forEach(kort => {
      var randomPos = Math.floor(Math.random() * 16);
      kort.style.order = randomPos;
  });
}