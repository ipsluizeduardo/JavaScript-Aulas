/*
 3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 e a escolha de condição de pagamento.
 Utiliza os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo 
 adequado.

 Código condição de pagamento:
 1 - Á vista debito, recebe 10% de desconto;
 2 - Á vista no dinheiro ou pix, recebe 15% de desconto;
 3 - Em duas vezes, preço normal de etiqueta sem juros;
 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoEtiqueta = 100;
const formaDePagamento = 3;
let precoTotal;

if (formaDePagamento === 1) {
    precoTotal = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(precoTotal)
}else if (formaDePagamento === 2) {
    precoTotal = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(precoTotal)
}else if (formaDePagamento === 3) {
    console.log(precoEtiqueta)
}else {
    precoTotal = precoEtiqueta + (precoEtiqueta * 0.1)
    console.log(precoTotal)
}
