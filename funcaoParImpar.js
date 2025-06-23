function verificarParImpar (numero){
    if (numero %2 ===0){
        return 'Par'; 
    } else {
        return 'Impar';
    } 
    
}
console.log(verificarParImpar(3));
console.log(verificarParImpar(18));