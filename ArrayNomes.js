// // ativ1.arrey nomes 
// let nomes = ['Ana','Carlos','Mariana','pedro']

// //  (A) 
//  nomes[4] ='Sofia';
//  // (B)
//  nomes[0] = 'Removido';
//  // (C) indice/posicao de mariana e 2
 

// console.log (nomes);

// let nomesComM = nomes.filter(nomes => nomes.startsWith('M'));

// console.log ('Nomes que começam com "M":', nomesComM);

// ativ2.arrey numeros
// let numeros = ['5','12','8','3','9'];
// numeros[0] ='3';
// numeros[1]='5';
// numeros[2]='8';
// numeros[3]='9';
// numeros[4]='12';
// console.log(numeros);
// let dobrados = numeros.map(numeros => numeros * 2);
// console.log('Numeros dobrados',dobrados );
// let soma = numeros.reduce((numeros,dobrados) => numeros + dobrados);
// console.log(soma);

// Ativ.3. array de frutas
// let frutas1 = ['maça','banana'];
// let frutas2 =['laranja','uva'];

// console.log('array1',frutas1);
// console.log('array2',frutas2);
// let todasFrutas=frutas1.concat(frutas2);
// console.log('concatenado 1 e 2', todasFrutas);

// let comoString =todasFrutas.join(" "+'-'+" ");
// console.log(comoString)

//Ativ.4 Array de idades
// let idades = ['15', '22', '18', '17', '20'];
// let verificar = idades.find (numero => numero > 18);

// console.log(verificar)

//Ativ.5. de livros

let livros = ['a menina do lago', 'o casal que mora ao lado', 'o quarto de hospedes'];
 


console.log(livros.includes('o casal que mora ao lado'));
console.log(livros.includes('o paraiso'));
