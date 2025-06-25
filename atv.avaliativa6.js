let prompt = require('prompt-sync')();
let numeroInicio=parseInter('Digite o primeiro número: ')
let numeroFim=parseInter('Digite o segundo número: ')
if (numeroInicio < numeroFim) {
  for (let i = numeroInicio; i <= numeroFim; i++) {

       if (i %2 ===0){
   console.log(i + 'É par');
        }else{
       console.log(i + 'É impar');
      }
    }
      console.log('o numero inicial deve ser menor que o final.');
     
    }
      

       