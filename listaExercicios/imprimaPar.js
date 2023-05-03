// 2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,220,400,550];

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i]
  if (numero % 2 == 0) {
    console.log(numero + " é Par")
  }
}