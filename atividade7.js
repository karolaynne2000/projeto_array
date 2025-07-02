
//Atividade 7 ,8,9
let prompt = require('prompt-sync')();
  let resultado;
let numero1= prompt ('Digite o primeiro número: ')
let numero2= prompt ('Digite o segundo número: ')

console.log('\n=== Menu do Codigo ===\n');
console.log('Escolha a Operação\n');
console.log('Soma => (1)');
console.log('Multiplicação => (2)');
console.log('Divisão => (3)');

  let codigoSelecao = prompt ('Digite a operação desejada: ');

  switch (codigoSelecao) {
    case 1:
      resultado = numero1 + numero2;
      break;
    case 2:
      resultado = numero1 * numero2;
      break;
    case 3:
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        return "Erro: Divisão por zero.";
      }
      break;
    default:
      return "Código de seleção inválido.";
  }

  console.log('O resultado da operação é: ' + resultado);



