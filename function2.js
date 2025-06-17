function gerarCredencial(setor){
    const numeroAleatorio = Math.floor(Math.random()*1000);
    const credencial = setor.toUpperCase()+ "-" + numeroAleatorio;
    return credencial;
}
const credencialFinanceiro = gerarCredencial('Financeiro');
const credencialSuporte = gerarCredencial('suporte');

console.log('credencial gerada para o Financeiro:', credencialFinanceiro);
console.log('credencial gerada para o Suporte:', credencialSuporte);