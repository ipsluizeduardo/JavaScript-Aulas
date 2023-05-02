/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura));
    Instancie uma pessoa chamada José que tenha 70KG de peso  e 1,75 de altura e peça ai José para dizer 
    o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
      return (this.peso / Math.pow(this.altura,2)).toFixed(2);
    }

    classificarImc() {
        let imc = this.calcularImc();

        if (imc < 18.5) {
            return `${this.nome}, está abaixo do peso.`;
        }else if ( imc >= 18.5 && imc < 25) {
            return `${this.nome}, está com peso normal. `
        }else if (imc >= 25 && imc < 30) {
            return `${this.nome}, está acima do peso.`
        }else if (imc >= 30 && imc < 40) {
            return `${this.nome}, está obeso.`
        }else {
            return `${this.nome}, está com obesidade grave.`
        }
    }
}

const jose = new Pessoa("Jose", 80, 1.75);
console.log(jose.calcularImc());

const luiz = new Pessoa("Luiz", 59, 1.63);
console.log(luiz.classificarImc());
