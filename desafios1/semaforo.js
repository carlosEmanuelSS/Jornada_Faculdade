// RA 22509279
const prompt = require('prompt-sync')();

console.log('Cores do semaforo : ')
console.log('VERDE, AMARELO, VERMELHO')
var semaforo = prompt('Digite a cor do semáforo :'.toLowerCase())

switch (semaforo) {
    case 'vermelho':
        console.log('PARE !!')
        break;
        return;

    case 'amarelo':
        console.log('REDUZA !!')
        break;
        return;

    case 'verde':
        console.log('Avance!')
        break;
        return;
    default:
        console.log|('Cor não identificada...')
        return;
}
