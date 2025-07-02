function verificarSexo(sexo) {
  if (sexo === 'F' || sexo === 'f') {
    return 'Feminino';
  } else if (sexo === 'M' || sexo === 'm') {
    return 'Masculino';
  } else {
    return 'Sexo inválido';
  }
} 
console.log(verificarSexo('x'))