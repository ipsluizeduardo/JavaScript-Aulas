const precoGas =  5;
const precoEtanol = 4;
const kmPorLitrosG = 6;
const kmPorLitrosE = 4;
let distanciaKM = 300;
let tipoCombustivel = "";

if (tipoCombustivel === "Etanol") {
    let valorGastoE = (distanciaKM / kmPorLitrosE)* precoEtanol;
    console.log(`O valor gasto em combustivel com etanol foi R$:${valorGastoE.toFixed(2)}`)
}else if (tipoCombustivel === "Gasilina") {
    let valorGastoG = (distanciaKM / kmPorLitrosG) * precoGas;
    console.log(`O valor gasto em combustivel com Gasolina foi R$:${valorGastoG.toFixed(2)}`)
}else {
    console.log("Não Existe!")
};