// RA 22509279
const prompt = require('prompt-sync')();
var horas = prompt('Digite as horas para receber as saudações :  ')

if (horas >= 0.0 && horas <= 11.59) {
    console.log('Bom Dia !!')
} else if (horas >= 12.00 && horas <= 18.59) {
    console.log('Boa Tarde !!')
} else if (horas >= 18.59 && horas <= 23.59) {
    console.log('Boa Noite !!')
}