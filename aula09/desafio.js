const moment = require ("moment")
const { differenceInMonths, differenceInDays} = require ("date-fns")

let dataAntiga = moment("2005-09-15")
let dataAtual = moment("2020-09-15")

let diasDeDiferenca =  dataAtual.diff(dataAntiga, "dias")
let mesesDeDiferenca = dataAtual.diff(dataAntiga, "months")

//console.log("a diferença de dias entre 15/09/2020 e 15/09/2005 é " + diasDeDiferenca + " dias.")
//console.log("a diferença de meses entre 15/09/2020 e 15/09/2005 é " + mesesDeDiferenca + " meses.")

let dataAntigaFNS = new Date (2005, 8, 15)
let dataAtualFNS = new Date (2020, 8, 15)

let diasDeDiferencaFNS = differenceInDays(dataAtualFNS, dataAntigaFNS)
let mesesDeDiferencaFNS = differenceInMonths(dataAtualFNS, dataAntigaFNS)

//console.log("A diferença de dias entre 15/09/2020 e 15/09/2005 é " + diasDeDiferencaFNS + " dias.")
//console.log("A diferença de meses entre 15/09/2020 e 15/09/2005 é " + mesesDeDiferencaFNS + " meses.")
