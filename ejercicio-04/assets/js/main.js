//Funcion encargada de llamar a la generadora de arrays numericos que empiezan en 0 
const createCounter = (max) => {
  return rangeFrom0(max);
}
//Funcion que genera arrays de numeros desde 0 hasta un numero provisto (incluido)
function rangeFrom0(limit){
    let counter = [];
    for (let index = 0; index <= limit; index++) {
      counter.push(index);
    }
    return counter;
}
//Muestra un alert individual para valor del contador
const showCounter = (counter) => {
    for (const num in counter) {
      alert(num);
    }
}
//Solicita el valor para el limite final del conteo, repitiendo el proceso si no se provee un numero valido
const requestNumber=()=>{ 
  let result = -1;
  do { 
    result = prompt("Introduzca un numero entero positivo");
    if (result < 0 || Math.floor(result) != result){
      alert("Introduza un valor valido");
    }
  } while (result < 0 || Math.floor(result) != result);  
  return result;
}
//Main encargado de llevar el orden de operaciones
const main = () => {
  const max = requestNumber();
  const counter = createCounter(max);
  showCounter(counter);
}

main();
