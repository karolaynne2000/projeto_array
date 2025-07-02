let numeros = [2,3,2];
function calcularMedia(numeros) {
  let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  return soma / numeros.length;
}

let media = calcularMedia(numeros);
console.log('A média é: '+ media);