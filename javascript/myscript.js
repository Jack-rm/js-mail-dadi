let emailUser = prompt("Inserisci la tua e-mail");
let listaDiEmail = ["jimmy123@gmai.com", "pincopallothebest@gmail.com", "atticidicittà@gmail.com", "mazinga69@gmail.com", "banana1994@gmail.com"];

let presente = listaDiEmail.includes(emailUser);

document.getElementById("email_user").innerHTML = presente;