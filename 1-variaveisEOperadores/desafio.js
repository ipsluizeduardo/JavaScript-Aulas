const preco =  5;
const kmPorLitros = 6;
let distanciaKM = 300;

let gastoC = (distanciaKM / kmPorLitros)* preco;

console.log(`O valor gasto em combustivel foi R$:${gastoC.toFixed(2)}`)