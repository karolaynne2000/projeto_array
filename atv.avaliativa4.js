let prompt = require('prompt-sync')();
let senhaCorreta= '8652';
let tentativas =0 
while (tentativas < 3){
    let senhaDigitada=prompt('Digite a senha: ');
    if (senhaDigitada ===senhaCorreta){
        console.log('Bem-vindo');
        break;
    }else {
        tentativas++;
        if(tentativas <=3){
            console.log('Senha incorreta.Tente novamente.');
        }
    }
} 
if (tentativas ===3){
    console.log('Acesso bloqueado.');
}