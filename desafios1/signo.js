// RA 22509279
const prompt = require('prompt-sync')();

console.log('Consulta de _Signo_')
var dia = prompt('Digite o dia em que você nasceu: ')
var mes = prompt('Digite o mês em que você nasceu: ')

if (dia >= 21 && mes == 'março' || dia <= 20 && mes == 'abril') {
    console.log('Áries')
} else if (dia >= 21 && mes == 'abril' || dia <= 20 && mes == 'maio') {
    console.log('touro')
} else if (dia >= 21 && mes == 'maio' || dia <= 20 && mes == 'junho') {
    console.log('Gêmeos')
} else if (dia >= 21 && mes == 'junho' || dia <= 22 && mes == 'julho') {
    console.log('Câncer')
} else if (dia >= 23 && mes == 'julho' || dia <= 22 && mes == 'agosto') {
    console.log('Leão')
} else if (dia >= 23 && mes == 'setembro' || dia <= 22 && mes == 'setembro') {
    console.log('Virgem')
} else if (dia >= 23 && mes == 'setembro' || dia <= 22 && mes == 'outubro') {
    console.log('Libra')
} else if (dia >= 23 && mes == 'outubro' || dia <= 21 && mes == 'novembro') {
    console.log('Escorpião')
} else if (dia >= 22 && mes == 'novembro' || dia <= 21 && mes == 'dezembro ') {
    console.log('Sargitário')
} else if (dia >= 22 && mes == 'dezembro' || dia <= 20 && mes == 'janeiro') {
    console.log('Capricórnio')
} else if (dia >= 21 && mes == 'janeiro' || dia <= 18 && mes == 'fevereiro') {
    console.log('Aquário')
} else if (dia >= 19 && mes == 'fevereiro' || dia <= 20 && mes == 'março') {
    console.log('Peixes')
}
