prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite o número da tabuada desejada: '));
     console.log('Tabuada do: ', numero);
      console.log('\n Soma');
        for (let i = 1; i <= 10; i++) {
            console.log(numero + ' + ' + i + ' = ' + (numero + i));
        }
        console.log('\n Subtração');
            for (let i = 1; i <= 10; i++){
          console.log( numero + ' - ' + i + ' = ' + (numero - i));
            }
            console.log('\n Multiplicação');
             for (let i = 1; i <= 10; i++){
                console.log( numero + ' * ' + i + ' = ' + (numero * i));
             }
             console.log('\n Divisão');
             for (let i = 1; i <= 10; i++){
               console.log( numero + ' / ' + i + ' = ' + Math.ceil(numero / i)); 
             }
           

