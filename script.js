// O MOMENT TRABALHA NA CONVERSÃO DE DATA PARA MILISSEGUNDOS
// PEDI QUE O USUARIO INFORME A DATA DE PARTIDA
let departureDateEntry = prompt("Digite a data de partida (FORMATA DD/MM/YYYY)");

// AMAZENA A CONVERSÃO DO QUE O USUARIO DIGITOU USANDO O MOMENT
// CONVERTE O TEXTO EM DATA
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

// RETORNA A DATA ATUAL
let today = moment();
// CALCULA A DIFERENÇA DA DATA ATUAL COM A DATA DE PARTIDA
let dateDiff = today - departureDate;

// PERGUNTA AO USUARIO COMO SERA EXIBIDO A INFORMAÇÃO DE TEMPO
let chosenOption = prompt("Escolha como dece ser exibido o tempo de partida\n1 Segundos\n2- Minutos\n3- Horas\n4- Dias")

//Verifica a opção que o usuario escolheu
if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos");
}else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos");
}else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de vôo: " + hoursOfDeparture + " horas");
}else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de vôo: " + daysOfDeparture + " dias");
}else {
    alert("Opção invalida!");
}