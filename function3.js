function minhaFuncao(objeto){
 objeto.make = "Toyota";
}
var meucarro={ make: "Honda", model: "Accord", year: 1998};
var x,y;

x=meucarro.make;

minhaFuncao(meucarro);
y=meucarro.make;
console.log( x )