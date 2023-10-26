function StartButton() {

    let time = document.getElementById("time");
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



    //Denne brukes for å stoppe timeren, dette vet vi ikke ennå
  //   setTimeout(() => { 
  //   location.reload(); //Brukes for å starte siten på nytt, trenger kanskje ikke denne senere.
  //  }, 15000); //15000 her er ms til timeren stopper, vi trenger -->
  // noe å kalle på når timeren skal stoppe, ikke laget ennå.

  
  
//Ønsker å jobbe videre med å få til en lagring av high score i en en fs.writeFile ved hjelp av JSON
//Burde prøve å få timeren til å se bra ut?? Hundredeler eller tideler?
//
  }
  
  
  