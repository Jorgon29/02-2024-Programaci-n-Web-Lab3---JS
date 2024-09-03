//Funcion en cargada de mostrar un prompt para ingresar un valor
const requestValue = (name) => {
  return prompt("Ingrese el valor de " + name + ":");    
}
//Llama a las funciones correspodientes, comprueba los valores provistos sean validos, los invierte y finalmente los muestra
const main = () => {
  
  let a = requestValue("a");
  let b = requestValue("b");
  if(!a || !b){
    alert("Ingrese valores validos");
  }
  [a , b] = [b, a];
  alert("Valor de a: " + a + " Valor de b: " + b);
}

main();
