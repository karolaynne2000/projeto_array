let prompt = require ('prompt-sync')();
let contunuar = true;

while (continuar) {
    let escolha = prompt ('escolha par ou impar: ').toLowerCase();
    let jogador = parseInt(prompt('digite um numero entre 1 e 5:'));
    let computador = Math.floor(Math.random() * 5) + 1;
    let soma = jogador + computador;

    console.log ("voce jogou" + jogador + ', computador jogou' + computador);
    console.log('soma: '+ soma);

    let resultado = soma % 2 === 0 ? 'par' : 'impar';

if ( escolha === resultado) {
    console.log ('voce venceu!');
} else {
    console.log ('voce perdeu!');
    continuar = false;
}

}
