// RA 22509279
var horas = Number(22.43)
var km = Number(12.7)

if (horas >= 0, 0 && horas <= 6.0) {
    var valorKM = Number(4.40) // Preço por KM
    var fixo = Number(5.30) // Preço FIXO
    var Vcorrida = valorKM * km + fixo
    console.log(`O valor da corrida foi de ${Vcorrida.toFixed(2)} R$.`)

} else if (horas >= 6.1 && horas <= 18.0) {
    var valorKM = Number(3.80)
    var fixo = Number(3.30)
    var Vcorrida = valorKM * km + fixo
    console.log(`O valor da corrida foi de ${Vcorrida.toFixed(2)} R$`)
} else if (horas > 18, 1 && horas <= 23, 59) {
    var valorKM = Number(4.10)
    var fixo = Number(4.30)
    var Vcorrida = valorKM * km + fixo
    console.log(`O valor da corrida foi de ${Vcorrida.toFixed(2)} R$.`)
}
