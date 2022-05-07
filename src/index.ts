let dato1 = document.getElementById("dato1");
let btnCalcular = document.getElementById("calcular");

let cantidadDeDivisores = (divisor:number,dividendo:number):boolean => {
  return ((divisor%dividendo) ==0);
}
let contador:number=0;
btnCalcular.addEventListener("click", () => {
  let numero:number= Number(dato1.value);
for (let i:number=1;i<=numero;i++)
  if (cantidadDeDivisores (numero,i)){
  contador=contador+1;
}
console.log ("la cantidad de divisores de",numero,"son", contador);
}