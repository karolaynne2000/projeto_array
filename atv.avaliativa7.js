let prompt = require('prompt-sync')();
let total = 0;
let valor;

do{
    valor = parseFloat(prompt('digite o valor da compra(0 para encerrar):'));
    if (!isNaN(valor)&& valor > 0){
        total += valor;
    }
} while (valor !== 0);
let formaPagamento = prompt('forma de pagamento (dinheiro/cartao): ').toLowerCase();
switch (formaPagameto){
    case 'dinheiro':
        total = total * 0.9;
        console.log ('Pagamento em dinheiro.Desconto aplicado.');
        break;
        case 'cartao':
        console.log ('Pagamento no cartao.Sem desconto.');
        break;
        default: 
        console.log ("forma de pagamento invalida.Total sem desconto.");
        break;
}
console.log ('total a pagar: R$' + total.tofixed(2));