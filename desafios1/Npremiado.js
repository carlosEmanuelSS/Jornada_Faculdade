// RA 22509279
// Números preimiados: 
const prompt = require('prompt-sync')();
var premio1 = 17
var premio2 = 20
var premio3 = 69

console.log('Você tem 3 tentativas para acertar o Número premiado:')
var tentativa1 = prompt('Digite o 1° número :')
if (tentativa1 == premio1 || tentativa1 == premio2 || tentativa1 == premio3 ) {
    console.log('PARABÉNS você acertou o Número !!')
    return;
} else { console.log("Você não acertou Tente de novo: ") }

var tentativa2 = prompt('Digite o 2° Número :')
if (tentativa2 == premio1 || tentativa2 == premio2 || tentativa2 == premio3 ){
    console.log('PARABÉNS você acertou o Número !!')
    return;
} else{console.log('Errou !!')}

console.log('Você só tem mais uma chance...')
var tentativa3 = prompt('Digite o último número:')
if(tentativa3 == premio1 || tentativa3 == premio2 || tentativa3 == premio3){
    console.log('PARABÉNS você acertou o Número !!')
    return;
}else{console.log('Infelizmene você não acertou nenhum número ):')}


