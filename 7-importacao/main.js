/**
 Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
 Faça um programa que receba os 5 numeros para os alunos e mostre o maior numero sorteado.

 Dados de entrada:
 5
 50
 10
 98
 23

 saida:
 98
 */

const {gets, print} = require("./funcoes-auxiliares");

/*const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    let numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}
*/
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }
}
print(maiorValorEncontrado)