
// Esercizio database email 

let emailUser = prompt("Inserisci la tua e-mail");
let listaDiEmail = ["jimmy123@gmail.com", "pincopallothebest@gmail.com", "atticidicittà@gmail.com", "mazinga69@gmail.com", "banana1994@gmail.com"];

for (let i = 0; i <= listaDiEmail.length; i++){
        if (emailUser == listaDiEmail[i]){
                document.getElementById("email_user").innerHTML = true;
        }
}


// Minigioco del tiro di dadi

let randomNumberPlayer = parseInt( (6 * Math.random())) +1;
let randomNumberMachine = parseInt( (6 * Math.random())) +1;

document.getElementById("random_player").innerHTML = randomNumberPlayer;
document.getElementById("random_machine").innerHTML = randomNumberMachine;

if (randomNumberPlayer === randomNumberMachine){
    document.getElementById("risultato").innerHTML = "Pareggio!";
}   else if (randomNumberPlayer > randomNumberMachine){
        document.getElementById("risultato").innerHTML = "il Giocatore!  :)";
}   else{
        document.getElementById("risultato").innerHTML = "il Computer!  :(";
}