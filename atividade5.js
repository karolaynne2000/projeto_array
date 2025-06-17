let prompt = require('prompt-sync')();
let frutas = [maça,pera,uva, goiaba];
let quantidade =parseFloat(prompt('digite a qtd de vezes: '));

for (i=0; i<=frutas; i++)
{
    let frutas = prompt ('digita a fruta')
    console.log('A fruta '+ i + 'eh'+ frutas)
}   