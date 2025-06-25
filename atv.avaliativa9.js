function contagemRegressiva(numero) {
  console.log(numero);
  if (numero > 0) {
    setTimeout(function(){
      contagemRegressiva(numero - 1 );
    },0.5);
  } 
} 
 console.log('Boom!')
contagemRegressiva(10)


