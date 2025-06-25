let prompt = require('prompt-sync')();


console.log('\n=== Calculadora Simples ===\n');
console.log('Escolha a Operação\n');
console.log('Soma => (1)');
console.log('Subtração => (2)');
console.log('Multiplicação => (3)');
console.log('Divisão => (4)');
console.log('\n=== Calculadora Simples ===\n');

let operacao = prompt('digite a operação desejada,:');
console.log('Escolha a operação desejada: ', operacao);





let resultado;

switch (operacao ) { 
    case '1':
  resultado = numero1 + numero2;
 console.log("O resultado da soma eh: ", resultado);
 break;


    case '2':
  resultado = numero1 - numero2;
  console.log("O resultado da subtração eh: ", resultado);
  break;
 
    case '3' :
  resultado = numero1 * numero2;
   console.log("O resultado da multiplicação eh: ", resultado);
   break;

    case '4' :
  
  resultado = numero1 - numero2;
  console.log("O resultado da divisão eh: ", resultado);

  break;
  default:
    console.log('Operação inválida');
    
}
