let prompt = require('prompt-sync')();
let numeros = [10,15,20,25,30,35,40];
let quantidade =parseFloat(prompt('digite a qtd de vezes: '));
// push //adiciona um novo elemento no array
// let novonumero = parseFloat(prompt('Digite um novo numero:'));
// numeros.push(novonumero);

for (i=0; i<quantidade; i++)
{
    let novonumero = parseFloat(prompt('Digite um novo nr:'+ ' '+ (i+1)));
    numeros.push(novonumero);
}
   
for (i=0; i<=numeros.length; i++)
{
    console.log('A posição ' + i + 'eh '[numeros[i]]);
}
// console.log(numeros[1])

