function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100))
}

function aplicaJuros(valor, juros) {
    return valor + (valor * ( juros / 100))
}

function pagamento(forma) {
    if (forma == 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10))
    }else if (forma == 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15))
    }else if (forma == 3) {
        console.log(precoEtiqueta)
    }else {
        console.log(aplicaJuros(precoEtiqueta, 10))
    }
}
const precoEtiqueta = 100;
const formaDePagamento = 4;

pagamento(formaDePagamento)