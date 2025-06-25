let prompt = require('prompt-sync')();
let repetir =('quer repetir')
while (repetir === 'r'){
    let pares =0;
    let impares =0
    let contador=1;
    while (contador <=10){
        let numero = parseInt(prompt('Digite um numero ' + contador+ ':'));
        if (numero % 2 ===0){
            pares = pares +1;
      }else{
        impares = impares +1;
      }
     console.log('Você digitou'+ pares +'numero pares.' );
     console.log('Você digitou'+ impares + 'numeros impares')
    }


}
console.log('Fim do programa')