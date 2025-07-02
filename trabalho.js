prompt = require('prompt-sync')();
let senhaCorreta = "12345";
let senha;
let tentativas = 0;




// // Permite até 3 tentativas para digitar a senha corretamente
while (tentativas < 3) {
    senha = prompt('Digite a senha: ');
    if (senha === senhaCorreta) {
        console.log ('Bem-vindo,agente!');
        
console.log('\n=== Menu da Tabuada ===\n');

console.log('(1) => Soma ');
console.log('(2) => Subtração ');
console.log('(3) => Multiplicação ');
console.log('(4) => Divisão ');
console.log('(5) => Sair ');
        
let numero =parseFloat(prompt('Escolha uma opção:'));
 
        console.log('Tabuada do: ', numero);






        
       
  break; // Sai do loop quando a senha estiver correta
    } else {
        tentativas++;
        console.log('Senha inválida! Tentativa ', tentativas + ' de 3');
    }
}
// Se exceder as tentativas, exibe mensagem de bloqueio
if (tentativas === 3) {
    console.log('Número máximo de tentativas excedido. Acesso bloqueado.');
} 

switch (operacao ) { 
    case '1':
   for (let i = 1; i <= 10; i++) {
  console.log(numero + ' + ' + i + ' = ' + (numero + i));
    }
 break;

    case '2':
     for  (let i = 1; i <= 10; i++ ){
  console.log(numero + ' - ' + i + ' = ' + (numero - i));
     }
  break;
 
    case '3' :
    for ( i = 1; i <= 10; i++) {
  console.log(numero + ' * ' + i + ' = ' + (numero * i));
     }
   break;

    case '4' :
   for (i = 1; i <= 10; i++ ){
console.log(numero + ' / ' + i + ' = ' + (numero / i));
   }
   case '5':
       for (i = 1; i <= 10; i++ ){
    console.log('O programa foi encerrado');
       }
  break;
  default:
    console.log('Operação inválida');
    
}
