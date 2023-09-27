//Oppgave 1

function aldertest(){

    let alder = document.getElementById("alder").value;

    let melding = "";

    if((alder>=13) && (alder<=19)){
        melding = ("Du er en tenåring.");
    }

    else{
        melding = ("Du er ikke en tenåring.");
    }


      

    document.getElementById("oppgave1").innerHTML = melding;
}


//Dette er en test

//Oppgave 2

function talltest(){

    let tall1 = parseInt(document.getElementById("tall1").value);
    let tall2 = parseInt(document.getElementById("tall2").value);

    let svar = "";

   
        if(tall1>tall2){
            svar = tall1 + " er større enn " + tall2;
        }

        else if(tall1===tall2){
            svar = "De er like store";
        }

        if(tall2>tall1){
            svar = tall2 + " er større enn " + tall1;
        }    
        
    

    document.getElementById("oppgave2").innerHTML = svar;

}

//Oppgave 3

function kvadrat(){

    let side = prompt("Skriv inn den ene siden av kvadratet");

    alert("Arealet av kvadratet ditt er: " + side*side);
}

//Oppgave 4

function fyllArray(){
    const biler = ["Volvo", "BMW", "Opel", "Mercedes"];
    return biler;
}

function skrivArray(){

    let biler = fyllArray();

    let resultat = "<ul>";

    for(let i = 0; i < biler.length; i++){
        resultat += "<li>" + biler[i] + "</li>";
    }

    resultat += "</ul>"


    document.getElementById("oppgave4").innerHTML = resultat;


}

//Oppgave 5

function fyllArray2(){
    const biler = ["Volvo", "BMW", "Opel", "Mercedes"];
    return biler;
}

function skrivArray2(){

    let biler = fyllArray2();


    alert(biler[biler.length-1]);

}

//Oppgave6

function Arrays(){

    const navn = ["Kari", "Ole", "Simen", "Kåre", "John"];
    const alder2 = [27, 54, 13, 42, 37];

    let ar = document.getElementById("ar").value;

    let result = "<ul>";

    for(let e = 0; e < navn.length; e++){
        result += "<li>" + navn[e] + " er " + (alder2[e] + parseInt(ar)) + " år " + " om " + ar + " år." + "</li>";
    }

    result += "</ul>"

    document.getElementById("oppgave6").innerHTML = result;
}

//Oppgave 7

function Arrays2(){

    const navn2 = ["Kari", "Ole", "Simen", "Kåre", "John"];
    const alder3 = [27, 54, 13, 42, 37];
    let nummer = ["", "ett", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni"]

    let ar2 = document.getElementById("ar2").value;

    let fasit = "<ul>";

    if(ar2>9){
        fasit = "Skriv et tall mellom 1 og 9."
    }

    else{
    for(let g = 0; g < navn2.length; g++){
        fasit += "<li>" + navn2[g] + " er " + (alder3[g] + parseInt(ar2)) + " år " + " om " + nummer[ar2] + " år." + "</li>";
    }
    }
    fasit += "</ul>"

    document.getElementById("oppgave7").innerHTML = fasit;
}