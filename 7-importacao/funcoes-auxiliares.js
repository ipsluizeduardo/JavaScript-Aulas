// const entradas = [5, 50, 10,98, 23];
const entradas = [5, 50, 10,98, 23, 25, 44, 27,88, 33];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++
    return valor;
}

function print (texto) {
    console.log(texto)
}

module.exports = { gets, print};