// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var pariDispariU=controlloPariDispari();
var numeroU=controlloRangeNumber();
var numeroC=randomNumber(1,5);
var somma=somma(numeroC,numeroU);
var risultato=result(somma,pariDispariU);

console.log("L'utente ha scelto: "+pariDispariU);
console.log("L'utente ha scelto il numero: "+numeroU);
console.log("Il computer ha scelto: "+numeroC);
console.log("Somma dei numeri: "+somma);
console.log(risultato);



//FUNZIONI
//Generatore da 1 a 5
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //max e min inclusi
}
//controlllo valori inseriti dall'utente
function controlloPariDispari() {
   var input=prompt("Pari o dispari").toUpperCase();
   
  if(input=="PARI"||input=="DISPARI"){
    return input;
  }
  else{
     console.log("SI prega di inserire solo Pari o dispari");
  }
}
//CONTROLLO RANGE
function controlloRangeNumber() {
  var numeroU=parseInt( prompt("Inserisci un numero da 1 a 5"));
  if(numeroU>=1 && numeroU<=5){
    return numeroU;
  }
  else{
     console.log("SI prega di inserire solo numeri compresi tra 1 e 5");
  }
}
//SOMMA
function somma(a,b) {
    var somma=a+b;
    return somma;
}
//risultato 
function result(somma,pariDispariU) {
  var paridisparisomma="";
  if(somma%2==0){
    paridisparisomma="PARI";
  }
  else{
    paridisparisomma="DISPARI";
  }
if(pariDispariU==paridisparisomma){
      return "L'utente ha vinto";
  }
else{
  return "L'utente ha perso";
}
}



