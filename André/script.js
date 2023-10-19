document.addEventListener("DOMContentLoaded", function () {
  
  

function StartButton () {
    
}

const bak = document.getElementsByClassName("bak"); //henter ut alt med class "bak" og lagrer det i en variabel

let antallKlikk = 0;

for (const bakside of bak) { //dette er en for of loop som kjører gjennom hvert element med class "bak". 
    bakside.addEventListener("click", function() { //her hører programmet etter et "click" på en av bildene med class "bak"
      bakside.parentElement.classList.toggle("flipped"); //når den hører et klikk setter den en css style som heter "flipped" til true
      antallKlikk++;
      if (antallKlikk % 2 == 0) {
        let test = document.querySelectorAll('.foran');
              test.style.opacity = '100';
              console.log(antallKlikk);
      }
    });
  };



//i denne funksjonen prøver jeg å få kortene til å flippe tilbake til baksiden sin når baksidene har blitt trykket på partall antall ganger


let firstCard, secondCard;

for (const bakside of bak) {
  bakside.addEventListener("click", function(){
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      console.log("match");
    };
  });
};






});
