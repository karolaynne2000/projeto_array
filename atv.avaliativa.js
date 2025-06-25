let prompt = require('prompt-sync')();

let numero = prompt('Digite um numero, (1 a 20): ');
    

 if ( numero === 1 <= 20) {

    console.log('Tabuada do: ', numero)
 }
    for (let i = 1; i <= 10; i++){

console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }     

     if (numero === 0) {
    console.log('programa encerrado');
     }
      
    
    if (numero > 20){
        console.log ( 'numero fora do intervalo')
    }
 


