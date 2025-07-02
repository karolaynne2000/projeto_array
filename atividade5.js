prompt = require('prompt-sync')();
let nome = prompt('Digite o nome do funcionário: ');
let salario = parseFloat(prompt('Digite o salário do funcionário: '));


let aumento = salario * 0.10;
let novoSalario = salario + aumento;

console.log('O funcionário ' + nome + ' teve um aumento de 10%.');
console.log('Seu novo salário é R$: '+ novoSalario.toFixed(2));