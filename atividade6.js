function processarValores(a, b) {
  let c;

  if (a === b) {
    c = a + b;
  } else {
    c = a * b;
  }

  return c;
} 
let valorA=3;
let valorB=4;
let resultado=(processarValores(valorA , valorB));

console.log('resultado para: A = ' + valorA + ' B = ' + valorB + ' C =' + resultado);