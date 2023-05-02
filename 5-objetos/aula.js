/* Reatribuição de propriedades
pessoa.["nome"] = "teste"; (Dinamico)
pessoa.nome = "teste";(Diretamente)
*/

const pessoa = {
    nome: "Vitor",
    idade: 25,

    descrever : function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// pessoa.altura = 1.69;
// delete pessoa.altura;
//pessoa.descrever();

const atributo = "idade";

console.log(pessoa[atributo])
console.log(pessoa["nome"])